const { yellow } = require("colorette");
const got = require("got");
const Ora = require("ora");

const { promises: fs } = require("fs");
const path = require("path");

const replacers = require("./replacers");

const replaceText = (replacer, text) => {
  let newText = text;

  for (const [name, regex_] of Object.entries(replacer)) {
    const regex = Array.isArray(regex_) ? regex_ : [regex_];
    let replacement;

    // removeX handling - just blank it out
    if (name.startsWith("remove")) replacement = "";
    else if (name === "replaceCopyrightInfo")
      // replaceCopyrightInfo special casing
      replacement = "Copyright (c) <year> <author>";
    else replacement = (match, group) => match.replace(group, `<${name}>`);

    // Go through the license text and run the replacement across all matching instances
    for (const re of regex) newText = text.replace(re, replacement);
  }

  return newText;
};

const chunk = (arr, n) =>
  Array.from({ length: Math.ceil(arr.length / n) }, (v, i) =>
    // eslint-disable-next-line no-mixed-operators
    arr.slice(i * n, i * n + n)
  );

const URL = "https://spdx.org/licenses/licenses.json";
const spinner = new Ora().start();

(async () => {
  spinner.text = "Clearing ./dist/";

  await fs.rmdir("./dist", { recursive: true });
  await fs.mkdir("./dist/licenses", { recursive: true });

  spinner.text = "Fetching license list";

  const { body } = await got(URL, { responseType: "json" });
  const licenses = {};

  for (const {
    licenseId: id,
    name,
    seeAlso,
    isOsiApproved: osiApproved
  } of body.licenses)
    licenses[id] = {
      name,
      osiApproved,
      url: Array.isArray(seeAlso)
        ? seeAlso[0] // Only pick first of possibly multiple URLS
        : `https://spdx.org/licenses/${id}.html` // Handle missing seeAlso
    };

  await Promise.all([
    fs.writeFile("dist/spdx.json", JSON.stringify(licenses, null, "\t")),
    fs.writeFile(
      "dist/spdx-simple.json",
      JSON.stringify(Object.keys(licenses), null, "\t")
    )
  ]);

  let counter = 0;
  const licenseLen = body.licenses.length;
  const allLicenseData = [];

  // Download the data for each license.
  // Puts into batches as its faster than raw serial, however too many at
  // once gets you banned from spdx.org for a while.
  /* eslint-disable no-loop-func */
  for (const chnk of chunk(body.licenses, 20))
    await Promise.all(
      chnk.map(async l => {
        const { body } = await got(l.detailsUrl, { responseType: "json" });
        spinner.text = `Downloaded ${++counter}/${licenseLen}`;

        allLicenseData.push(body);
      })
    );
  /* eslint-enable */

  counter = 0;

  // Manipulate all the data at once, running replacers & writing files.
  await Promise.all(
    allLicenseData.map(async body => {
      const replacer = replacers[body.licenseId];
      let licenseText = body.licenseText // Do some cleanup of the body text
        .replace(/\r\n/g, "\n")
        .replace(/http\ss\s:\/\//g, "https://")
        .trim();

      if (replacer) licenseText = replaceText(replacer, licenseText);
      else
        console.warn(
          yellow(
            `\nNo placeholder replacer found for \`${body.licenseId}\`. Probably new license.`
          )
        );

      licenses[body.licenseId].licenseText = licenseText;
      const fp = path.join("dist/licenses", `${body.licenseId}.json`);

      await fs.writeFile(
        fp,
        JSON.stringify(licenses[body.licenseId], null, "\t")
      );
      await fs.copyFile("templates/license.d.ts", `${fp}.d.ts`);

      spinner.text = `${++counter}/${licenseLen}`;
    })
  );

  spinner.text = "Writing final files";

  await fs.writeFile(
    "dist/spdx-full.json",
    JSON.stringify(licenses, null, "\t")
  );

  for (const template of (await fs.readdir("templates")).filter(
    f => !["index.d.ts", "license.d.ts"].includes(f)
  ))
    await fs.copyFile(
      path.join("templates", template),
      path.join("dist", template)
    );

  const indexTemplate = await fs.readFile("templates/index.d.ts", "utf-8");
  await fs.writeFile(
    "dist/index.d.ts",
    indexTemplate.replace(
      "{{}}",
      JSON.stringify(Object.keys(licenses), null, "    ")
    )
  );

  spinner.succeed("Done");
})()
  .catch(err => {
    if (err.response)
      throw new Error(
        `Error getting URL ${err.url}. Response is:\n${err.response.body}`
      );
    else throw err;
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
