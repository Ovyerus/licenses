/**
 *  Object mapping license identifers to a map of regexes to replacer info with predictable placeholders
 * Most keys here will replace the info with their name, e.g. `year: /(2002)/` would replace 2002 with `<year>`.
 * Keys starting with `remove` will purely remove its match from the license. Used for superfluous/specific info such as business address.
 * Keys starting with `replace` are special cased.
 *  - `replaceCopyrightInfo` will replace the matcher with `Copyright (c) <year> <author>` as licenses with such a placeholder intend it to be there.
 */

// TODO: combine author and email

module.exports = {
  '0BSD': {
    year: /(2006)/g,
    author: /(Rob Landley <rob@landley.net>)/g
  },
  AAL: {
    year: /(2002)/g,
    author: [/by (AUTHOR)/g, /\(a\) Name \("(AUTHOR)"\)/g],
    organizationName: [
      /\(b\) Professional identification \("(PROFESSIONAL IDENTIFICATION)"\), and/g,
      /(PROFESSIONAL IDENTIFICATION)/g
    ],
    website: [/\* (URL)/g, /\(c\) URL \("(URL)"\)/g],
    slogan: [/"(PROMOTIONAL SLOGAN FOR AUTHOR'S PROFESSIONAL PRACTICE)"/g]
  },
  Abstyles: {
    year: /(1991, 1992)/g,
    author: /Copyright \(C\).*?(Hans-Hermann Bode)/g
  },
  'Adobe-2006': {
    year: /(2006)/g,
    author: /(Adobe Systems Incorporated(?: |,|"))/g
  },
  'Adobe-Glyph': {
    year: /(1997,1998,2002,2007)/g,
    author: [/Copyright \(c\).*?(Adobe Systems Incorporated)/, /(Adobe)/g]
  },
  ADSL: {
    year: /(2006)/g,
    author: /(Amazon Digital Services, Inc\.)/g
  },
  'AFL-1.1': {
    year: /(2002)/g,
    author: /(Lawrence E. Rosen)/g
  },
  'AFL-1.2': {
    year: /(2002)/g,
    author: /(Lawrence E. Rosen)/g
  },
  'AFL-2.0': {
    year: /(2003)/g,
    author: /(Lawrence E. Rosen)/g
  },
  'AFL-2.1': {
    year: /(2003-2004)/g,
    author: /(Lawrence E. Rosen)/g
  },
  'AFL-3.0': {
    year: /(2005)/g,
    author: /(Lawrence Rosen)/g
  },
  Afmparse: {
    year: /(1988, 1989)/g,
    author: /(Adobe Systems Incorporated)/g,
    removeTrademarks: /PostScript, Display PostScript, and Adobe are registered trademarks of Adobe Systems Incorporated.\n\n/
  },
  'AGPL-1.0-only': {
    year: /(2002)/g,
    author: /Copyright ©.*?(Affero Inc\.)/g,
    removeAddress: /510 Third Street - Suite 225, San Francisco, CA 94107, USA\n\n/
  },
  'AGPL-1.0-or-later': {
    year: /(2002)/g,
    author: /Copyright ©.*?(Affero Inc\.)/g,
    removeAddress: /510 Third Street - Suite 225, San Francisco, CA 94107, USA\n\n/
  },
  'AGPL-1.0': {
    year: /(2002)/g,
    author: /Copyright ©.*?(Affero Inc\.)/g,
    removeAddress: /510 Third Street - Suite 225, San Francisco, CA 94107, USA\n\n/
  },
  'AGPL-3.0-only': {
    year: /\(C\) 2007/g,
    author: /(Free Software Foundation, Inc\. <https:\/\/fsf.org\/>)/g
  },
  'AGPL-3.0-or-later': {
    year: /\(C\) 2007/g,
    author: /(Free Software Foundation, Inc\. <https:\/\/fsf.org\/>)/g
  },
  'AGPL-3.0': {
    year: /\(C\) 2007/g,
    author: /(Free Software Foundation, Inc\. <https:\/\/fsf.org\/>)/g
  },
  Aladdin: {
    year: /(1994, 1995, 1997, 1998, 1999)/g,
    author: /(Aladdin Enterprises)/g,
    program: /"(Aladdin Ghostscript)."/g,
    removeAddress: /(Melo Park, California, U.S.A. )/,
    removeProgramNote: / Please note that Aladdin Ghostscript is neither the program known as "GNU Ghostscript" nor the version of Ghostscript available for commercial licensing from Artifex Software Inc\./
  },
  AMDPLPA: {},
  AML: {},
  AMPAS: {
    year: /(2006)/g,
    name: [
      /(Academy of Motion Picture Arts and Sciences \("A.M.P.A.S."\))/g,
      /(A.M.P.A.S.)/g
    ]
  },
  'ANTLR-PD': {
    project: /(ANTLR)(?:-| o|,|.| a)/g
  },
  'Apache-1.0': {},
  'Apache-1.1': {
    year: /(2000)/g,
    author: /(The Apache Software Foundation)/g,
    website: /http:\/\/www.apache.org\//g,
    // Name replacements?
    removeAddress: /Portions of this software are based upon public domain software originally written at the National Center for Supercomputing Applications, University of Illinois, Urbana-Champaign./
  },
  'Apache-2.0': {
    year: /(\[yyyy\])/g,
    author: /(\[name of copyright owner\])/g
  },
  APAFML: {
    year: /(1985, 1987, 1989, 1990, 1991, 1992, 1993, 1997)/g,
    author: /(Adobe Systems(?: Incorporated\.)?)/g
  },
  'APL-1.0': {},
  'APSL-1.0': {},
  'APSL-1.1': {},
  'APSL-1.2': {},
  'APSL-2.0': {},
  'Artistic-1.0-cl8': {},
  'Artistic-1.0-Perl': {},
  'Artistic-1.0': {},
  'Artistic-2.0': {
    year: /(2000-2006)/g,
    author: /, (The Perl Foundation)/g
  },
  Bahyph: {
    year: /(1991)/g,
    author: /\(c\) (GMV)/g
  },
  Barr: {},
  Beerware: {
    author: /(Poul-Henning Kamp)/g,
    email: /(<phk@FreeBSD.ORG>)/g
  },
  'BitTorrent-1.0': {},
  'BitTorrent-1.1': {},
  blessing: {},
  'BlueOak-1.0.0': {},
  Borceux: {
    year: /(1993)/g,
    author: /(Francis Borceux)/g,
    email: /(francis dot borceux at uclouvain dot be.)/g
  },
  'BSD-1-Clause': {
    author: /(<owner>)/g
  },
  'BSD-2-Clause-FreeBSD': {},
  'BSD-2-Clause-NetBSD': {},
  'BSD-2-Clause-Patent': {
    year: /(<YEAR>)/g,
    author: /(<COPYRIGHT HOLDER>)/g
  },
  'BSD-2-Clause': {
    author: /(<owner>)/g
  },
  'BSD-3-Clause-Attribution': {
    author: /(the "Universidad de Palermo, Argentina")/g,
    website: /http:\/\/www.palermo.edu\//g
  },
  'BSD-3-Clause-Clear': {
    year: /(\[xxxx\]-\[xxxx\])/g,
    author: /(\[Owner Organization\])/g
  },
  'BSD-3-Clause-LBNL': {},
  'BSD-3-Clause-No-Nuclear-License-2014': {
    year: /(2008, 2014)/g,
    author: /(Oracle(?: Organisation)?)/g
  },
  'BSD-3-Clause-No-Nuclear-License': {
    year: /(1994-2009)/g,
    author: [
      /(Sun Microsystems, Inc\.)/g,
      /(SUN MICROSYSTEMS, Inc\. \("SUN"\))/g,
      /(SUN)/g
    ]
  },
  'BSD-3-Clause-No-Nuclear-Warranty': {
    year: /(2003-2005)/g,
    author: [
      /(Sun Microsystems, Inc\.)/g,
      /(SUN MICROSYSTEMS, Inc\. \("SUN"\))/g,
      /(SUN)/g
    ]
  },
  'BSD-3-Clause-Open-MPI': {},
  'BSD-3-Clause': {
    author: /(<owner>)/g
  },
  'BSD-4-Clause-UC': {},
  'BSD-4-Clause': {
    author: /(<owner>)/g
  },
  'BSD-Protection': {},
  'BSD-Source-Code': {
    year: /(2011,)/g,
    author: /(Deusty(?:, LLC)?)/g
  },
  'BSL-1.0': {},
  'bzip2-1.0.5': {},
  'bzip2-1.0.6': {},
  Caldera: {},
  'CATOSL-1.1': {},
  'CC-BY-1.0': {},
  'CC-BY-2.0': {},
  'CC-BY-2.5': {},
  'CC-BY-3.0': {},
  'CC-BY-4.0': {},
  'CC-BY-NC-1.0': {},
  'CC-BY-NC-2.0': {},
  'CC-BY-NC-2.5': {},
  'CC-BY-NC-3.0': {},
  'CC-BY-NC-4.0': {},
  'CC-BY-NC-ND-1.0': {},
  'CC-BY-NC-ND-2.0': {},
  'CC-BY-NC-ND-2.5': {},
  'CC-BY-NC-ND-3.0': {},
  'CC-BY-NC-ND-4.0': {},
  'CC-BY-NC-SA-1.0': {},
  'CC-BY-NC-SA-2.0': {},
  'CC-BY-NC-SA-2.5': {},
  'CC-BY-NC-SA-3.0': {},
  'CC-BY-NC-SA-4.0': {},
  'CC-BY-ND-1.0': {},
  'CC-BY-ND-2.0': {},
  'CC-BY-ND-2.5': {},
  'CC-BY-ND-3.0': {},
  'CC-BY-ND-4.0': {},
  'CC-BY-SA-1.0': {},
  'CC-BY-SA-2.0': {},
  'CC-BY-SA-2.5': {},
  'CC-BY-SA-3.0': {},
  'CC-BY-SA-4.0': {},
  'CC-PDDC': {},
  'CC0-1.0': {},
  'CDDL-1.0': {},
  'CDDL-1.1': {},
  'CDLA-Permissive-1.0': {},
  'CDLA-Sharing-1.0': {},
  'CECILL-1.0': {},
  'CECILL-1.1': {},
  'CECILL-2.0': {},
  'CECILL-2.1': {},
  'CECILL-B': {},
  'CECILL-C': {},
  'CERN-OHL-1.1': {},
  'CERN-OHL-1.2': {},
  ClArtistic: {},
  'CNRI-Jython': {},
  'CNRI-Python-GPL-Compatible': {},
  'CNRI-Python': {},
  'Condor-1.1': {},
  'copyleft-next-0.3.0': {},
  'copyleft-next-0.3.1': {},
  'CPAL-1.0': {}, // Has blanks but is a bit weird. TODO
  'CPL-1.0': {},
  'CPOL-1.02': {},
  Crossword: {
    year: /(1995-2009)/g,
    author: /(Gerd Neugebauer)/g,
    project: /(cwpuzzle.dtx)/g
  },
  CrystalStacker: {
    author: /(NewCreature Design)/g,
    project: /(Crystal Stacker)/g
  },
  'CUA-OPL-1.0': {}, // Also has blanks
  Cube: {
    year: /(2001-2003)/g,
    author: /(Wouter van Oortmerssen)/g,
    project: /(Cube(?: game engine)?)/g
  },
  curl: {
    year: /(1996-2015)/g,
    author: /(Daniel Stenberg, <daniel@haxx.se>)/g
  },
  'D-FSL-1.0': {}, // Says to include copyright line, do we add?
  diffmark: {},
  DOC: {},
  Dotseqn: {
    year: /(1995)/g,
    author: /(Donald Arseneau)/g
  },
  DSDP: {},
  dvipdfm: {},
  'ECL-1.0': {
    author: /(<copyright holders>)/g
  },
  'ECL-2.0': {},
  'eCos-2.0': {},
  'EFL-1.0': {},
  'EFL-2.0': {},
  eGenix: {},
  Entessa: {
    year: /(2003)/g,
    author: /(Entessa, LLC\.)/g
    // Todo
  },
  'EPL-1.0': {},
  'EPL-2.0': {},
  'ErlPL-1.1': {},
  'etalab-2.0': {},
  EUDatagrid: {},
  'EUPL-1.0': {
    year: /(2007)/g,
    author: /(the European Community)/g
  },
  'EUPL-1.1': {
    year: /(2007)/g,
    author: /(the European Community)/g
  },
  'EUPL-1.2': {
    year: /(2007, 2016)/g,
    author: /© (the European Union)/g
  },
  Eurosym: {
    year: /(1999-2002)/g,
    author: /(Henrik Theiling)/g
  },
  Fair: {
    replaceCopyrightInfo: /(<Copyright Information>)/g
  },
  'Frameworx-1.0': {
    year: /(2003)/g,
    author: /(THE FRAMEWORX COMPANY)/g
    // Some more
  },
  FreeImage: {},
  FSFAP: {},
  FSFUL: {
    year: /(1992-1996, 1998-2012)/g,
    author: [
      /(Free Software Foundation, Inc\.)/g,
      /the (Free Software Foundation)/g
    ]
  },
  FSFULLR: {
    year: /(1996-2006)/g,
    author: [
      /(Free Software Foundation, Inc\.)/g,
      /the (Free Software Foundation)/g
    ]
  },
  FTL: {},
  'GFDL-1.1-only': {
    year: /\(C\) (2000)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: / 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
  },
  'GFDL-1.1-or-later': {
    year: /\(C\) (2000)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: / 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
  },
  'GFDL-1.1': {
    year: /\(C\) (2000)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: / 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
  },
  'GFDL-1.2-only': {
    year: /(2000,2001,2002)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: / 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
  },
  'GFDL-1.2-or-later': {
    year: /(2000,2001,2002)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: / 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
  },
  'GFDL-1.2': {
    year: /(2000,2001,2002)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: / 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
  },
  'GFDL-1.3-only': {
    year: /(2000, 2001, 2002, 2007, 2008)/g,
    author: /(Free Software Foundation, Inc\. <http:\/\/fsf.org\/>)/g
  },
  'GFDL-1.3-or-later': {
    year: /(2000, 2001, 2002, 2007, 2008)/g,
    author: /(Free Software Foundation, Inc\. <http:\/\/fsf.org\/>)/g
  },
  'GFDL-1.3': {
    year: /(2000, 2001, 2002, 2007, 2008)/g,
    author: /(Free Software Foundation, Inc\. <http:\/\/fsf.org\/>)/g
  },
  Giftware: {
    year: /(18 October 1998)/g, // Not too sure if this is meant to be copyright notice or license attribution
    author: /(Shawn Hargreaves)/g,
    project: /(Alegro)(?: is| community| somewhere)/g
  },
  GL2PS: {
    year: /\(C\) (2003)/g,
    author: /(Christophe Geuzaine)/g
  },
  Glide: {},
  Glulxe: {
    year: /(1999-2010)/g,
    author: /(Andrew Plotkin)/g
  },
  gnuplot: {
    year: /(1986 - 1993, 1998, 2004)/g,
    author: /(Thomas Williams, Colin Kelley)/g
  },
  'GPL-1.0-only': {
    year: /\(C\) (1989)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
  },
  'GPL-1.0-or-later': {
    year: /\(C\) (1989)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
  },
  'GPL-1.0': {
    year: /\(C\) (1989)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
  },
  'GPL-1.0+': {
    year: /\(C\) (1989)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
  },
  'GPL-2.0-only': {
    year: /(1989, 1991)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
  },
  'GPL-2.0-or-later': {
    year: /(1989, 1991)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
  },
  'GPL-2.0-with-autoconf-exception': {},
  'GPL-2.0-with-bison-exception': {},
  'GPL-2.0-with-classpath-exception': {},
  'GPL-2.0-with-font-exception': {},
  'GPL-2.0-with-GCC-exception': {},
  'GPL-2.0': {
    year: /(1989, 1991)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
  },
  'GPL-2.0+': {
    year: /(1989, 1991)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
  },
  'GPL-3.0-only': {
    year: /© (2007)/g,
    author: /(Free Software Foundation, Inc\. <https:\/\/fsf.org\/>)/g
  },
  'GPL-3.0-or-later': {
    year: /© (2007)/g,
    author: /(Free Software Foundation, Inc\. <https:\/\/fsf.org\/>)/g
  },
  'GPL-3.0-with-autoconf-exception': {},
  'GPL-3.0-with-GCC-exception': {},
  'GPL-3.0': {
    year: /© (2007)/g,
    author: /(Free Software Foundation, Inc\. <https:\/\/fsf.org\/>)/g
  },
  'GPL-3.0+': {
    year: /© (2007)/g,
    author: /(Free Software Foundation, Inc\. <https:\/\/fsf.org\/>)/g
  },
  'gSOAP-1.3b': {},
  HaskellReport: {
    year: /\(c\) (2010)/g,
    author: /(Simon Marlow)/g
  },
  'HPND-sell-variant': {
    author: /(<copyright holder>(?: <or related entities>)?)/g,
    replaceCopyrightInfo: /(<copyright notice>)/g
  },
  HPND: {
    author: /(<copyright holder>(?: <or related entities>)?)/g,
    replaceCopyrightInfo: /(<copyright notice>)/g
  },
  'IBM-pibs': {},
  ICU: {
    year: /(1995-2014)/g,
    author: /(International Business Machines Corporation and others)/g
  },
  IJG: {},
  ImageMagick: {},
  iMatix: {},
  Imlib2: {},
  'Info-ZIP': {},
  'Intel-ACPI': {},
  Intel: {}, // OSI
  'Interbase-1.0': {},
  IPA: {},
  'IPL-1.0': {}, // OSI
  ISC: {
    year: /(1995-2003)/g,
    author: [/(Internet Software Consortium)\n\n/g, / (ISC) /g]
  },
  'JasPer-2.0': {},
  JPNIC: {},
  JSON: {
    year: /(2002)/g,
    author: /(JSON.org)/g
  },
  'LAL-1.2': {},
  'LAL-1.3': {},
  Latex2e: {},
  Leptonica: {
    year: /(2001)/g,
    author: /(Leptonica)/g
  },
  'LGPL-2.0-only': {
    year: /(\(C\) 1991)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
  },
  'LGPL-2.0-or-later': {
    year: /(\(C\) 1991)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
  },
  'LGPL-2.0': {
    year: /(\(C\) 1991)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
  },
  'LGPL-2.0+': {
    year: /(\(C\) 1991)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
  },
  'LGPL-2.1-only': {
    year: /(1991, 1999)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
  },
  'LGPL-2.1-or-later': {
    year: /(1991, 1999)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
  },
  'LGPL-2.1': {
    year: /(1991, 1999)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
  },
  'LGPL-2.1+': {
    year: /(1991, 1999)/g,
    author: /(Free Software Foundation, Inc\.)/g,
    removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
  },
  'LGPL-3.0-only': {
    year: /(\(C\) 2007)/g,
    author: /(Free Software Foundation, Inc\. <https:\/\/fsf\.org\/>)/g
  },
  'LGPL-3.0-or-later': {
    year: /(\(C\) 2007)/g,
    author: /(Free Software Foundation, Inc\. <https:\/\/fsf\.org\/>)/g
  },
  'LGPL-3.0': {
    year: /(\(C\) 2007)/g,
    author: /(Free Software Foundation, Inc\. <https:\/\/fsf\.org\/>)/g
  },
  'LGPL-3.0+': {
    year: /(\(C\) 2007)/g,
    author: /(Free Software Foundation, Inc\. <https:\/\/fsf\.org\/>)/g
  },
  LGPLLR: {},
  'libpng-2.0': {},
  Libpng: {},
  'libselinux-1.0': {
    author: /(NSA)/g,
    project: /(\(libselinux\))/g
  },
  libtiff: {},
  'LiLiQ-P-1.1': {},
  'LiLiQ-R-1.1': {},
  'LiLiQ-Rplus-1.1': {},
  'Linux-OpenIB': {},
  'LPL-1.0': {
    year: /(<YEAR>)/g,
    author: [/(<ORGANIZATION>(?: \( " <OWNER> " \))?)/g, /(<OWNER>)/g],
    state: /(<STATE>)/g
  },
  'LPL-1.02': {
    year: /(2003)/g,
    author: [/(Lucent Technologies Inc\.(?: \("LUCENT"\))?)/g, /(LUCENT)/g],
    state: /(New York)/g
  },
  'LPPL-1.0': {},
  'LPPL-1.1': {},
  'LPPL-1.2': {},
  'LPPL-1.3a': {},
  'LPPL-1.3c': {},
  MakeIndex: {},
  MirOS: {
    year: /(\[YEAR\])/g,
    author: /(\[NAME\] \[EMAIL\])/g
  },
  'MIT-0': {
    year: /(<YEARr>)/g,
    author: /(<COPYRIGHT HOLDER>)/g
  },
  'MIT-advertising': {},
  'MIT-CMU': {
    replaceCopyrightInfo: /(<copyright notice>)/g
  },
  'MIT-enna': {
    year: /(2000)/g,
    author: /(Carsten Haitzler)/g
  },
  'MIT-feh': {},
  MIT: {
    author: /(<copyright holders>)/g
  },
  MITNFA: {},
  Motosoto: {},
  mpich2: {},
  'MPL-1.0': {}, // Blanks
  'MPL-1.1': {},
  'MPL-2.0-no-copyleft-exception': {},
  'MPL-2.0': {},
  'MS-PL': {},
  'MS-RL': {},
  MTLL: {},
  'MulanPSL-1.0': {},
  Multics: {},
  Mup: {
    year: /(1995-2012)/g,
    author: /(Arkkra Enterprises)/g
  },
  'NASA-1.3': {},
  Naumen: {
    author: /(NAUMEN(?: \(tm\)|.| or| "| OR| and))/g
  },
  'NBPL-1.0': {
    year: /(<Year>)/g,
    author: [
      /(<Name of Development Group>)/g,
      /(<Name of Development Group,)/g
    ],
    institution: [
      /(<Owner Organization Name>)/g,
      /(<Name of Institution>)/g,
      /( Name of Institution>)/g
    ],
    website: /(<URL for Development Group\/Institution>)/g
  },
  NCSA: {
    year: /(<Year>)/g,
    author: [
      /(<Name of Development Group>)/g,
      /(<Name of Development Group,)/g
    ],
    institution: [
      /(<Owner Organization Name>)/g,
      /(<Name of Institution>)/g,
      /( Name of Institution>)/g
    ],
    website: /(<URL for Development Group\/Institution>)/g
  },
  'Net-SNMP': {},
  NetCDF: {},
  Newsletr: {
    year: /(1989--2004)/g,
    author: /(Hunter Goatley)/g
  },
  NGPL: {
    year: /(1989)/g,
    author: /((?:Mike|M\.) Stephenson)/g,
    project: /(NetHack)/g
  },
  'NLOD-1.0': {},
  NLPL: {},
  Nokia: {},
  NOSL: {},
  Noweb: {
    year: /(1989-2000)/g,
    author: /(Norman Ramsey)/g,
    project: /(noweb)/gi
  },
  'NPL-1.0': {
    author: /(______________________________________)/g
  },
  'NPL-1.1': {},
  'NPOSL-3.0': {},
  NRL: {},
  'NTP-0': {
    year: /(\(4-digit-year\))/g,
    author: [/(\(CopyrightHoldersName\))/g, /(\(TrademarkedName\))/g]
  },
  NTP: {
    year: /(\(From 4-digit-year\)-\(To 4-digit-year\))/g,
    author: [/(\(CopyrightHoldersName\))/g, /(\(TrademarkedName\))/g]
  },
  Nunit: {},
  'OCCT-PL': {},
  'OCLC-2.0': {}, // Todo
  'ODbL-1.0': {},
  'ODC-By-1.0': {},
  'OFL-1.0-no-RFN': {},
  'OFL-1.0-RFN': {},
  'OFL-1.0': {},
  'OFL-1.1-no-RFN': {
    year: /(<dates>)/g,
    author: /(<Copyright Holder> \(<URL\|email>\))/g
  },
  'OFL-1.1-RFN': {
    year: /(<dates>)/g,
    author: /(<Copyright Holder> \(<URL\|email>\))/g
  },
  'OFL-1.1': {
    year: /(<dates>)/g,
    author: /(<Copyright Holder> \(<URL\|email>\))/g
  },
  'OGL-Canada-2.0': {},
  'OGL-UK-1.0': {},
  'OGL-UK-2.0': {},
  'OGL-UK-3.0': {},
  OGTSL: {},
  'OLDAP-1.1': {},
  'OLDAP-1.2': {},
  'OLDAP-1.3': {},
  'OLDAP-1.4': {},
  'OLDAP-2.0': {},
  'OLDAP-2.0.1': {},
  'OLDAP-2.1': {},
  'OLDAP-2.2': {},
  'OLDAP-2.2.1': {},
  'OLDAP-2.2.2': {},
  'OLDAP-2.3': {},
  'OLDAP-2.4': {},
  'OLDAP-2.5': {},
  'OLDAP-2.6': {},
  'OLDAP-2.7': {},
  'OLDAP-2.8': {},
  OML: {}, // Todo
  OpenSSL: {},
  'OPL-1.0': {},
  'OSET-PL-2.1': {},
  'OSL-1.0': {},
  'OSL-1.1': {},
  'OSL-2.0': {},
  'OSL-2.1': {},
  'OSL-3.0': {},
  'Parity-6.0.0': {
    author: /(contributor name)/g,
    project: /: (source)/g
  },
  'PDDL-1.0': {},
  'PHP-3.0': {}, // Todo
  'PHP-3.01': {},
  Plexus: {
    year: /(2002)/g,
    author: /(The Codehaus)/g,
    email: /bob@codehaus\.org/g,
    website: /(http:\/\/classworlds\.codehaus\.org\/)/g,
    project: /(classworlds)/g
  },
  PostgreSQL: {}, // Todo
  'PSF-2.0': {},
  psfrag: {
    year: /(1996)/g,
    author: /(Craig Barratt, Michael C. Grant, and David Carlisle)/g,
    project: /(psfrag\.dtx)/g
  },
  psutils: {},
  'Python-2.0': {},
  Qhull: {
    year: /(1993-2003)/g,
    author: [
      /The National Science and Technology Research Center for Computation and Visualization of Geometric Structures \(The Geometry Center\) University of Minnesota/g,
      /(The Geometry Center)/g
    ],
    email: [/(qhull@qhull\.org)/g, /qhull_bug@qhull\.org/g],
    project: /(Qhull)/g
  },
  'QPL-1.0': {
    year: /(1999-2005)/g,
    author: /(Trolltech AS, Norway)/g
  },
  Rdisc: {
    removeAddress: /\n\nSun Microsystems, Inc\.\n\n2550 Garcia Avenue\n\nMountain View, California 94043"/g,
    project: /Rdisc/g,
    author: /(Sun Microsystems, Inc\.)/g
  },
  'RHeCos-1.1': {},
  'RPL-1.1': {}, // Todo
  'RPL-1.5': {
    year: /(2001-2007)/g,
    author: /(Technical Pursuit Inc\.)/g
  },
  'RPSL-1.0': {
    author: /(____________________________________)/g
  },
  'RSA-MD': {},
  RSCPL: {
    author: /(______________________________________)/g
  },
  Ruby: {},
  'SAX-PD': {
    replaceCopyrightInfo: /(Copyright Status)/g
    // More
  },
  Saxpath: {
    year: /(2000-2002)/g,
    author: [/(werken digital)/g, /(the SAXPath Project Management)/g],
    project: /(SAXPath)/g,
    website: /(http:\/\/www.saxpath.org\/)/g
  },
  SCEA: {},
  'Sendmail-8.23': {},
  Sendmail: {},
  'SGI-B-1.0': {},
  'SGI-B-1.1': {},
  'SGI-B-2.0': {
    year: /(\[dates of first publication\])/g,
    author: /(Silicon Graphics, Inc\.)/g
  },
  'SHL-0.5': {
    year: /(\[yyyy\])/g,
    author: /(\[name of copyright owner\])/g
  },
  'SHL-0.51': {
    year: /(\[yyyy\])/g,
    author: /(\[name of copyright owner\])/g
  },
  'SimPL-2.0': {},
  'SISSL-1.2': {
    author: /(__________________________________)/g
  },
  SISSL: {}, // Blanks
  Sleepycat: {
    year: /(1990-1999)/g,
    author: /(Sleepycat Software)/g
  },
  SMLNJ: {
    year: /(1989-2001)/g,
    author: /(Lucent(?: Technologies))/g
  },
  SMPPL: {
    author: /(\[COMPLETE THIS\])/g,
    contributors: /(______________________________________)/g
  },
  SNIA: {
    author: /(\[COMPLETE THIS\])/g,
    contributors: /(______________________________________)/g
  },
  'Spencer-86': {
    year: /(1986)/g,
    author: /(Henry Spencer)/g,
    institution: /(University of Toronto)/g
  },
  'Spencer-94': {
    year: /(1992, 1993, 1994)/g,
    author: /(Henry Spencer)/g,
    institution: /(the American Telephone and Telegraph Company or of the Regents of the University of California)/g
  },
  'Spencer-99': {
    year: /(1998, 1999)/g,
    author: /(Henry Specner)/g,
    funders: /(Cray Research Inc\., UUNET Communications Services Inc\., Sun Microsystems Inc\., and Scriptics Corporation)/g
  },
  'SPL-1.0': {}, // Todo
  'SSH-OpenSSH': {},
  'SSH-short': {
    project: /("ssh" or "Secure Shell")/g
  },
  'SSPL-1.0': {
    year: /© (2018)/g,
    author: /©.*?(MongoDB, Inc\.)/g
  },
  'StandardML-NJ': {},
  'SugarCRM-1.1.3': {},
  SWL: {},
  'TAPR-OHL-1.0': {},
  TCL: {},
  'TCP-wrappers': {
    year: [/(1990, 1991, 1992, 1993, 1994 and 1995)/g, /(1995)/g],
    author: /(Wietse Venema)/g,
    institution: /(Eindhoven University of Technology, The Netherlands)/g
  },
  TMate: {},
  'TORQUE-1.1': {},
  TOSL: {
    year: /(2006)/g,
    author: /(Mike Mintz and Robert Ekendahl)/gi
  },
  'TU-Berlin-1.0': {},
  'TU-Berlin-2.0': {},
  'UCL-1.0': {},
  'Unicode-DFS-2015': {},
  'Unicode-DFS-2016': {},
  'Unicode-TOU': {},
  Unlicense: {},
  'UPL-1.0': {
    year: /(\[year\])/g,
    author: /(\[copyright holders\])/g
  },
  Vim: {},
  VOSTROM: {},
  'VSL-1.0': {},
  'W3C-19980720': {},
  'W3C-20150513': {},
  W3C: {},
  'Watcom-1.0': {}, // Todo
  Wsuipa: {},
  WTFPL: {
    year: /\(C\) (2004)/g,
    author: /(Sam Hocevar <sam@hocevar\.net>)/g
  },
  wxWindows: {},
  X11: {},
  Xerox: {
    year: /(1995, 1996)/g,
    author: /(Xerox Corporation)/gi
  },
  'XFree86-1.1': {},
  xinetd: {},
  Xnet: {
    year: /(2000-2001)/g,
    author: /(X.Net, Inc\. Lafayette, California, USA)/g
  },
  xpp: {},
  XSkat: {},
  'YPL-1.0': {},
  'YPL-1.1': {},
  Zed: {
    year: /(January 1995)/g,
    author: /(Jim Davies)/g,
    email: /(Jim\.Davies@comlab\.ox\.ac\.uk)/g,
    project: /(zed-csp\.sty)/g
  },
  'Zend-2.0': {},
  'Zimbra-1.3': {},
  'Zimbra-1.4': {},
  'zlib-acknowledgement': {},
  Zlib: {
    author: /(<copyright holders>)/g
  },
  'ZPL-1.1': {},
  'ZPL-2.0': {}, // Todo
  'ZPL-2.1': {}
};
