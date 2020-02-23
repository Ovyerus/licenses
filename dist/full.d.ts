import { Identifiers } from './';

declare namespace fullLicenses {
  export interface FullLicenseInfo {
    name: string;
    url: string;
    osiApproved: boolean;
    licenseText: string;
  }
}

declare const fullLicenses: {
  [key in Identifiers[number]]: fullLicenses.FullLicenseInfo;
};
export = fullLicenses;
