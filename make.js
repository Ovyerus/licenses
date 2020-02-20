'use strict';
require('hard-rejection/register'); // eslint-disable-line import/no-unassigned-import
const Ora = require('ora');
const got = require('got');
const pMap = require('p-map');

const fs = require('fs');
const path = require('path');

const replacers = require('./replacers');

const URL = 'https://spdx.org/licenses/licenses.json';
const MAX_CONCURRENT_CONNECTIONS = 10;
const spinner = new Ora();

spinner.start();

(async () => {
  const response = await got(URL, { json: true });

  const spdx = response.body;
  const licensesJson = Object.create(null);

  for (const license of spdx.licenses)
    licensesJson[license.licenseId] = {
      name: license.name,
      url: Array.isArray(license.seeAlso)
        ? license.seeAlso[0] // Only get the first of possibly multiple URLs
        : `https://spdx.org/licenses/${license.licenseId}.html`, // Handle missing seeAlso
      osiApproved: license.isOsiApproved
    };

  fs.writeFileSync('spdx.json', JSON.stringify(licensesJson, null, '\t'));
  fs.writeFileSync(
    'spdx-simple.json',
    JSON.stringify(Object.keys(licensesJson), null, '\t')
  );

  let counter = 0;

  const mapper = async license => {
    try {
      const response = await got(license.detailsUrl, { json: true });
      const currLicense = licensesJson[license.licenseId];

      currLicense.licenseText = response.body.licenseText
        .replace(/\r\n/g, '\n')
        .replace(/http\ss\s:\/\//g, 'https://')
        .trim();

      const replacer = replacers[license.licenseId];

      if (replacer)
        for (const [name, regex_] of Object.entries(replacer)) {
          let replacement, regex;

          if (!Array.isArray(regex_)) regex = [regex_];

          if (name.startsWith('remove')) replacement = '';
          else if (name === 'replaceCopyrightInfo')
            replacement = 'Copyright (c) <year> <author>';
          else
            replacement = (match, group) => match.replace(group, `<${name}>`);

          for (const re of regex)
            currLicense.licenseText = currLicense.licenseText.replace(
              re,
              replacement
            );
        }
      else
        console.warn(
          `No placeholder replacer found for \`${license.licenseId}\`. Probably new license.`
        );

      fs.writeFileSync(
        path.join('licenses', `${license.licenseId}.json`),
        JSON.stringify(currLicense, null, '\t')
      );

      spinner.text = `Downloaded ${++counter} of ${
        Object.keys(licensesJson).length
      } licenses`;
    } catch (error) {
      if (error.response)
        throw new Error(
          `Error getting URL ${license.detailsUrl}. Response is:\n${error.response.body}`
        );
      else throw error;
    }
  };

  await pMap(spdx.licenses, mapper, {
    concurrency: MAX_CONCURRENT_CONNECTIONS
  });

  fs.writeFileSync('spdx-full.json', JSON.stringify(licensesJson, null, '\t'));
  spinner.succeed('Done');
})().catch(error => {
  if ('response' in error)
    throw new Error(
      `Error getting URL ${error.url}. Response is:\n${error.response.body}`
    );
  else throw error;
});
