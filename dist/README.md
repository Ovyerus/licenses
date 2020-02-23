# licenses [![Build Status](https://travis-ci.org/Ovyerus/licenses.svg?branch=master)](https://travis-ci.org/Ovyerus/licenses)

> List of [SPDX licenses](https://spdx.org/licenses/) with predictable placeholder strings for copyright info.

This is a fork of [spdx-license-list](https://github.com/sindresorhus/spdx-license-list) with added placeholders
in the copyright strings (of most of the licenses) to make it easy for machines to create licenses with user-given info.

Some licenses are skipped due to being overly specific for that particular product or company, however most generic,
OSI-approved licenses should have them just fine.

<small>(If you want to add support for a license that hasn't received placeholders yet, feel free to submit a PR 😃)</small>

The lists of licenses are just JSON files and can be used anywhere.

- [spdx.json](spdx.json) contains just license metadata
- [spdx-full.json](spdx-full.json) includes the license text too
- [spdx-simple.json](spdx-simple.json) only contains the license IDs

_Using SPDX License List version 3.8 (2020-02-09)_

The placeholders in the text are in the format of `<placeholder name>`, so for example, `Copyright (c) 2002 John Doe`
would become `Copyright (c) <year> <author>`

## Install

```
$ npm install @ovyerus/licenses
```

## Usage

```js
const spdxLicenseList = require('@ovyerus/licenses');

console.log(spdxLicenseList.MIT);
/*
{
	name: 'MIT License',
	url: 'http://www.opensource.org/licenses/MIT',
	osiApproved: true
}
*/
```

```js
const mitLicense = require('@ovyerus/licenses/licenses/MIT');

console.log(mitLicense.licenseText);
//=> 'MIT License\r\n\r\nCopyright (c) <year> <copyright holders> …'
```

You can also get a version with the licence text included:

```js
const spdxLicenseList = require('@ovyerus/licenses/full');

console.log(spdxLicenseList.MIT);
/*
{
	name: 'MIT License',
	url: 'http://www.opensource.org/licenses/MIT',
	osiApproved: true,
	licenseText: '…'
}
*/
```

Or just the license IDs as a `Set`:

```js
const spdxLicenseList = require('@ovyerus/licenses/simple');

console.log(spdxLicenseList);
//=> Set {'Glide', 'Abstyles', …}
```

## API

### spdxLicenseList

Type: `Object`

The licenses are indexed by their identifier and contains a `name` property with the full name of the license, `url` with the URL to the license, and `osiApproved` boolean for whether the license is [OSI Approved](https://opensource.org/licenses).
