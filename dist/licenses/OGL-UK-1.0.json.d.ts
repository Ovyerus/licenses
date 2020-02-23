interface License {
  name: string;
  url: string;
  osiApproved: boolean;
  licenseText: string;
}

declare const license: License;

export default license;
