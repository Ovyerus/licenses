declare namespace licenses {
  export type Identifiers = {{}};

  export interface LicenseInfo {
    name: string;
    url: string;
    osiApproved: boolean;
  }
}

declare const licenses: {
  [key in licenses.Identifiers[number]]: licenses.LicenseInfo;
};
export = licenses;
