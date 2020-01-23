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
		year: /(2006)/,
		author: /(Rob Landley)/,
		email: /(<rob@landley.net>)/
	},
	AAL: {
		year: /(2002)/,
		author: [/by (AUTHOR)/, /\(a\) Name \("(AUTHOR)"\)/],
		organizationName: [
			/(PROFESSIONAL IDENTIFICATION)/,
			/\(b\) Professional identification \("(PROFESSIONAL IDENTIFICATION)"\), and/
		],
		website: [/\* (URL)/, /\(c\) URL \("(URL)"\)/],
		slogan: [/"(PROMOTIONAL SLOGAN FOR AUTHOR'S PROFESSIONAL PRACTICE)"/]
	},
	Abstyles: {
		year: /(1991, 1992)/,
		author: /Copyright \(C\).*?(Hans-Hermann Bode)/
	},
	'Adobe-2006': {
		year: /(2006)/,
		author: [
			/(Adobe Systems Incorporated)/g
			// /Copyright\(c\).*?(Adobe Systems Incorporated)/,
			// /(Adobe Systems Incorporated) grants/,
			// /The name "\(Adobe Systems Incorporated\)"/,
			// /defend (Adobe Systems Incorporated)/
		]
	},
	'Adobe-Glyph': {
		year: /(1997,1998,2002,2007)/,
		author: [
			/Copyright \(c\).*?(Adobe Systems Incorporated)/,
			/(Adobe)/g // ??
			// /(Adobe) shall/,
			// /if (Adobe) has/,
			// /. The (Adobe) materials/,
			// /(Adobe) specifically/,
			// /(Adobe) materials,/,
			// /(Adobe) materials./
		]
	},
	ADSL: {
		year: /(2006)/,
		author: /(Amazon Digital Services, Inc\.)/
	},
	'AFL-1.1': {
		year: /(2002)/,
		author: /(Lawrence E. Rosen)/
	},
	'AFL-1.2': {
		year: /(2002)/,
		author: /(Lawrence E. Rosen)/
	},
	'AFL-2.0': {
		year: /(2003)/,
		author: /(Lawrence E. Rosen)/
	},
	'AFL-2.1': {
		year: /(2003-2004)/,
		author: /(Lawrence E. Rosen)/
	},
	'AFL-3.0': {
		year: /(2005)/,
		author: /(Lawrence Rosen)/
	},
	Afmparse: {
		year: /(1988, 1989)/,
		author: /(Adobe Systems Incorporated)/,
		removeTrademarks: /PostScript, Display PostScript, and Adobe are registered trademarks of Adobe Systems Incorporated.\n\n/
	},
	'AGPL-1.0-only': {
		year: /(2002)/,
		author: /Copyright ©.*?(Affero Inc\.)/,
		removeAddress: /510 Third Street - Suite 225, San Francisco, CA 94107, USA\n\n/
	},
	'AGPL-1.0-or-later': {
		year: /(2002)/,
		author: /Copyright ©.*?(Affero Inc\.)/,
		removeAddress: /510 Third Street - Suite 225, San Francisco, CA 94107, USA\n\n/
	},
	'AGPL-1.0': {
		year: /(2002)/,
		author: /Copyright ©.*?(Affero Inc\.)/,
		removeAddress: /510 Third Street - Suite 225, San Francisco, CA 94107, USA\n\n/
	},
	'AGPL-3.0-only': {
		year: /\(C\) 2007/,
		author: /(Free Software Foundation, Inc\. <https:\/\/fsf.org\/>)/
	},
	'AGPL-3.0-or-later': {
		year: /\(C\) 2007/,
		author: /(Free Software Foundation, Inc\. <https:\/\/fsf.org\/>)/
	},
	'AGPL-3.0': {
		year: /\(C\) 2007/,
		author: /(Free Software Foundation, Inc\. <https:\/\/fsf.org\/>)/
	},
	Aladdin: {
		year: /(1994, 1995, 1997, 1998, 1999)/,
		author: /(Aladdin Enterprises)/,
		program: /"(Aladdin Ghostscript)."/,
		removeAddress: /(Melo Park, California, U.S.A. )/,
		removeProgramNote: / Please note that Aladdin Ghostscript is neither the program known as \"GNU Ghostscript\" nor the version of Ghostscript available for commercial licensing from Artifex Software Inc\./
	},
	AMDPLPA: {},
	AML: {},
	AMPAS: {
		year: /(2006)/,
		name: [
			/(Academy of Motion Picture Arts and Sciences \(\"A.M.P.A.S.\"\))/,
			/(A.M.P.A.S.)/
		]
	},
	'ANTLR-PD': {
		project: /(ANTLR)(?:-| o|,|.| a)/
	},
	'Apache-1.0': {},
	'Apache-1.1': {
		year: /(2000)/,
		author: /(The Apache Software Foundation)/,
		website: /http:\/\/www.apache.org\//,
		// name replacements?
		removeAddress: /Portions of this software are based upon public domain software originally written at the National Center for Supercomputing Applications, University of Illinois, Urbana-Champaign./
	},
	'Apache-2.0': {
		year: /(\[yyyy\])/,
		author: /(\[name of copyright owner\])/
	},
	APAFML: {
		year: /(1985, 1987, 1989, 1990, 1991, 1992, 1993, 1997)/,
		author: [/(Adobe Systems Incorporated.)/, /(Adobe Systems)/]
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
		year: /(2000-2006)/,
		author: /, (The Perl Foundation)/
	},
	Bahyph: {
		year: /(1991)/,
		author: /\(c\) (GMV)/
	},
	Barr: {},
	Beerware: {
		author: /(Poul-Henning Kamp)/,
		email: /(<phk@FreeBSD.ORG>)/
	},
	'BitTorrent-1.0': {},
	'BitTorrent-1.1': {},
	blessing: {},
	'BlueOak-1.0.0': {},
	Borceux: {
		year: /(1993)/,
		author: /(Francis Borceux)/,
		email: /(francis dot borceux at uclouvain dot be.)/
	},
	'BSD-1-Clause': {
		author: /(<owner>)/
	},
	'BSD-2-Clause-FreeBSD': {},
	'BSD-2-Clause-NetBSD': {},
	'BSD-2-Clause-Patent': {
		year: /(<YEAR>)/,
		author: /(<COPYRIGHT HOLDER>)/
	},
	'BSD-2-Clause': {
		author: /(<owner>)/
	},
	'BSD-3-Clause-Attribution': {
		author: /(the "Universidad de Palermo, Argentina")/,
		website: /http:\/\/www.palermo.edu\//
	},
	'BSD-3-Clause-Clear': {
		year: /(\[xxxx\]-\[xxxx\])/,
		author: /(\[Owner Organization\])/
	},
	'BSD-3-Clause-LBNL': {},
	'BSD-3-Clause-No-Nuclear-License-2014': {
		year: /(2008, 2014)/,
		author: [/(Oracle Organisation)/, /(Oracle)/]
	},
	'BSD-3-Clause-No-Nuclear-License': {
		year: /(1994-2009)/,
		author: [
			/(Sun Microsystems, Inc\.)/,
			/(SUN MICROSYSTEMS, Inc\. \(\"SUN\"\))/,
			/(SUN)/
		]
	},
	'BSD-3-Clause-No-Nuclear-Warranty': {
		year: /(2003-2005)/,
		author: [
			/(Sun Microsystems, Inc\.)/,
			/(SUN MICROSYSTEMS, Inc\. \(\"SUN\"\))/,
			/(SUN)/
		]
	},
	'BSD-3-Clause-Open-MPI': {},
	'BSD-3-Clause': {
		author: /(<owner>)/
	},
	'BSD-4-Clause-UC': {},
	'BSD-4-Clause': {
		author: /(<owner>)/
	},
	'BSD-Protection': {},
	'BSD-Source-Code': {
		year: /(2011,)/,
		author: /(Deusty(?:, LLC)?)/
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
		year: /(1995-2009)/,
		author: /(Gerd Neugebauer)/,
		project: /(cwpuzzle.dtx)/
	},
	CrystalStacker: {
		author: /(NewCreature Design)/,
		project: /(Crystal Stacker)/
	},
	'CUA-OPL-1.0': {}, // also has blanks
	Cube: {
		year: /(2001-2003)/,
		author: /(Wouter van Oortmerssen)/,
		project: /(Cube(?: game engine)?)/
	},
	curl: {
		year: /(1996-2015)/,
		author: /(Daniel Stenberg)/,
		email: /(<daniel@haxx.se>)/
	},
	'D-FSL-1.0': {}, // says to include copyright line, do we add?
	diffmark: {},
	DOC: {},
	Dotseqn: {
		year: /(1995)/,
		author: /(Donald Arseneau)/
	},
	DSDP: {},
	dvipdfm: {},
	'ECL-1.0': {
		author: /(<copyright holders>)/
	},
	'ECL-2.0': {},
	'eCos-2.0': {},
	'EFL-1.0': {},
	'EFL-2.0': {},
	eGenix: {},
	Entessa: {
		year: /(2003)/,
		author: /(Entessa, LLC\.)/
		//todo
	},
	'EPL-1.0': {},
	'EPL-2.0': {},
	'ErlPL-1.1': {},
	'etalab-2.0': {},
	EUDatagrid: {},
	'EUPL-1.0': {
		year: /(2007)/,
		author: /(the European Community)/
	},
	'EUPL-1.1': {
		year: /(2007)/,
		author: /(the European Community)/
	},
	'EUPL-1.2': {
		year: /(2007, 2016)/,
		author: /© (the European Union)/
	},
	Eurosym: {
		year: /(1999-2002)/,
		author: /(Henrik Theiling)/
	},
	Fair: {
		replaceCopyrightInfo: /(<Copyright Information>)/
	},
	'Frameworx-1.0': {
		year: /(2003)/,
		author: /(THE FRAMEWORX COMPANY)/
		// some more
	},
	FreeImage: {},
	FSFAP: {},
	FSFUL: {
		year: /(1992-1996, 1998-2012)/,
		author: [
			/(Free Software Foundation, Inc\.)/,
			/the (Free Software Foundation)/
		]
	},
	FSFULLR: {
		year: /(1996-2006)/,
		author: [
			/(Free Software Foundation, Inc\.)/,
			/the (Free Software Foundation)/
		]
	},
	FTL: {},
	'GFDL-1.1-only': {
		year: /\(C\) (2000)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: / 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
	},
	'GFDL-1.1-or-later': {
		year: /\(C\) (2000)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: / 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
	},
	'GFDL-1.1': {
		year: /\(C\) (2000)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: / 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
	},
	'GFDL-1.2-only': {
		year: /(2000,2001,2002)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: / 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
	},
	'GFDL-1.2-or-later': {
		year: /(2000,2001,2002)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: / 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
	},
	'GFDL-1.2': {
		year: /(2000,2001,2002)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: / 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
	},
	'GFDL-1.3-only': {
		year: /(2000, 2001, 2002, 2007, 2008)/,
		author: /(Free Software Foundation, Inc\.)/,
		email: /(<http:\/\/fsf.org\/>)/
	},
	'GFDL-1.3-or-later': {
		year: /(2000, 2001, 2002, 2007, 2008)/,
		author: /(Free Software Foundation, Inc\.)/,
		email: /(<http:\/\/fsf.org\/>)/
	},
	'GFDL-1.3': {
		year: /(2000, 2001, 2002, 2007, 2008)/,
		author: /(Free Software Foundation, Inc\.)/,
		email: /(<http:\/\/fsf.org\/>)/
	},
	Giftware: {
		year: /(18 October 1998)/, // Not too sure if this is meant to be copyright notice or license attribution
		author: /(Shawn Hargreaves)/,
		project: /(Alegro)(?: is| community| somewhere)/
	},
	GL2PS: {
		year: /\(C\) (2003)/,
		author: /(Christophe Geuzaine)/
	},
	Glide: {},
	Glulxe: {
		year: /(1999-2010)/,
		author: /(Andrew Plotkin)/
	},
	gnuplot: {
		year: /(1986 - 1993, 1998, 2004)/,
		author: /(Thomas Williams, Colin Kelley)/
	},
	'GPL-1.0-only': {
		year: /\(C\) (1989)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
	},
	'GPL-1.0-or-later': {
		year: /\(C\) (1989)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
	},
	'GPL-1.0': {
		year: /\(C\) (1989)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
	},
	'GPL-1.0+': {
		year: /\(C\) (1989)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA/
	},
	'GPL-2.0-only': {
		year: /(1989, 1991)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
	},
	'GPL-2.0-or-later': {
		year: /(1989, 1991)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
	},
	'GPL-2.0-with-autoconf-exception': {},
	'GPL-2.0-with-bison-exception': {},
	'GPL-2.0-with-classpath-exception': {},
	'GPL-2.0-with-font-exception': {},
	'GPL-2.0-with-GCC-exception': {},
	'GPL-2.0': {
		year: /(1989, 1991)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
	},
	'GPL-2.0+': {
		year: /(1989, 1991)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
	},
	'GPL-3.0-only': {
		year: /© (2007)/,
		author: /(Free Software Foundation, Inc\.)/,
		email: /(<https:\/\/fsf.org\/>)/
	},
	'GPL-3.0-or-later': {
		year: /© (2007)/,
		author: /(Free Software Foundation, Inc\.)/,
		email: /(<https:\/\/fsf.org\/>)/
	},
	'GPL-3.0-with-autoconf-exception': {},
	'GPL-3.0-with-GCC-exception': {},
	'GPL-3.0': {
		year: /© (2007)/,
		author: /(Free Software Foundation, Inc\.)/,
		email: /(<https:\/\/fsf.org\/>)/
	},
	'GPL-3.0+': {
		year: /© (2007)/,
		author: /(Free Software Foundation, Inc\.)/,
		email: /(<https:\/\/fsf.org\/>)/
	},
	'gSOAP-1.3b': {},
	HaskellReport: {
		year: /\(c\) (2010)/,
		author: /(Simon Marlow)/
	},
	'HPND-sell-variant': {
		author: /(<copyright holder>(?: <or related entities>)?)/,
		replaceCopyrightInfo: /(<copyright notice>)/
	},
	HPND: {
		author: /(<copyright holder>(?: <or related entities>)?)/,
		replaceCopyrightInfo: /(<copyright notice>)/
	},
	'IBM-pibs': {},
	ICU: {
		year: /(1995-2014)/,
		author: /(International Business Machines Corporation and others)/
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
		year: /(1995-2003)/,
		author: [/(Internet Software Consortium)\n\n/, / (ISC) /]
	},
	'JasPer-2.0': {},
	JPNIC: {},
	JSON: {
		year: /(2002)/,
		author: /(JSON.org)/
	},
	'LAL-1.2': {},
	'LAL-1.3': {},
	Latex2e: {},
	Leptonica: {
		year: /(2001)/,
		author: /(Leptonica)/
	},
	'LGPL-2.0-only': {
		year: /(\(C\) 1991)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
	},
	'LGPL-2.0-or-later': {
		year: /(\(C\) 1991)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
	},
	'LGPL-2.0': {
		year: /(\(C\) 1991)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
	},
	'LGPL-2.0+': {
		year: /(\(C\) 1991)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
	},
	'LGPL-2.1-only': {
		year: /(1991, 1999)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
	},
	'LGPL-2.1-or-later': {
		year: /(1991, 1999)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
	},
	'LGPL-2.1': {
		year: /(1991, 1999)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
	},
	'LGPL-2.1+': {
		year: /(1991, 1999)/,
		author: /(Free Software Foundation, Inc\.)/,
		removeAddress: /51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA/
	},
	'LGPL-3.0-only': {
		year: /(\(C\) 2007)/,
		author: /(Free Software Foundation, Inc\.)/,
		email: /(<https:\/\/fsf\.org\/>)/
	},
	'LGPL-3.0-or-later': {
		year: /(\(C\) 2007)/,
		author: /(Free Software Foundation, Inc\.)/,
		email: /(<https:\/\/fsf\.org\/>)/
	},
	'LGPL-3.0': {
		year: /(\(C\) 2007)/,
		author: /(Free Software Foundation, Inc\.)/,
		email: /(<https:\/\/fsf\.org\/>)/
	},
	'LGPL-3.0+': {
		year: /(\(C\) 2007)/,
		author: /(Free Software Foundation, Inc\.)/,
		email: /(<https:\/\/fsf\.org\/>)/
	},
	LGPLLR: {},
	'libpng-2.0': {},
	Libpng: {},
	libtiff: {},
	'LiLiQ-P-1.1': {},
	'LiLiQ-R-1.1': {},
	'LiLiQ-Rplus-1.1': {},
	'Linux-OpenIB': {},
	'LPL-1.0': {
		year: /(<YEAR>)/,
		author: [/(<ORGANIZATION>(?: \( " <OWNER> " \))?)/, /(<OWNER>)/],
		state: /(<STATE>)/
	},
	'LPL-1.02': {
		year: /(2003)/,
		author: [/(Lucent Technologies Inc\.(?: \("LUCENT"\))?)/, /(LUCENT)/],
		state: /(New York)/
	},
	'LPPL-1.0': {},
	'LPPL-1.1': {},
	'LPPL-1.2': {},
	'LPPL-1.3a': {},
	'LPPL-1.3c': {},
	MakeIndex: {},
	MirOS: {
		year: /(\[YEAR\])/,
		author: /(\[NAME\])/,
		email: /(\[EMAIL\])/
	},
	'MIT-0': {
		year: /(<YEARr>)/,
		author: /(<COPYRIGHT HOLDER>)/
	},
	'MIT-advertising': {},
	'MIT-CMU': {
		replaceCopyrightInfo: /(<copyright notice>)/
	},
	'MIT-enna': {
		year: /(2000)/,
		author: /(Carsten Haitzler)/
	},
	'MIT-feh': {},
	MIT: {
		author: /(<copyright holders>)/
	},
	MITNFA: {},
	Motosoto: {},
	mpich2: {},
	'MPL-1.0': {}, // blanks
	'MPL-1.1': {},
	'MPL-2.0-no-copyleft-exception': {},
	'MPL-2.0': {},
	'MS-PL': {},
	'MS-RL': {},
	MTLL: {},
	'MulanPSL-1.0': {},
	Multics: {},
	Mup: {
		year: /(1995-2012)/,
		author: /(Arkkra Enterprises)/
	},
	'NASA-1.3': {},
	Naumen: {
		author: /(NAUMEN(?: \(tm\)|.| or| "| OR| and))/
	},
	'NBPL-1.0': {
		year: /(<Year>)/,
		author: [/(<Name of Development Group>)/, /(<Name of Development Group,)/],
		institution: [
			/(<Owner Organization Name>)/,
			/(<Name of Institution>)/,
			/( Name of Institution>)/
		],
		website: /(<URL for Development Group\/Institution>)/
	},
	NCSA: {
		year: /(<Year>)/,
		author: [/(<Name of Development Group>)/, /(<Name of Development Group,)/],
		institution: [
			/(<Owner Organization Name>)/,
			/(<Name of Institution>)/,
			/( Name of Institution>)/
		],
		website: /(<URL for Development Group\/Institution>)/
	},
	'Net-SNMP': {},
	NetCDF: {},
	Newsletr: {
		year: /(1989--2004)/,
		author: /(Hunter Goatley)/
	},
	NGPL: {
		year: /(1989)/,
		author: /((?:Mike|M\.) Stephenson)/,
		project: /(NetHack)/
	},
	'NLOD-1.0': {},
	NLPL: {},
	Nokia: {},
	NOSL: {},
	Noweb: {
		year: /(1989-2000)/,
		author: /(Norman Ramsey)/,
		project: /(noweb)/i
	},
	'NPL-1.0': {
		author: /(______________________________________)/
	},
	'NPL-1.1': {},
	'NPOSL-3.0': {},
	NRL: {},
	NTP: {
		year: /(\(From 4-digit-year\)-\(To 4-digit-year\))/,
		author: [/(\(CopyrightHoldersName\))/, /(\(TrademarkedName\))/]
	},
	Nunit: {},
	'OCCT-PL': {},
	'OCLC-2.0': {}, // todo
	'ODbL-1.0': {},
	'ODC-By-1.0': {},
	'OFL-1.0': {},
	'OFL-1.1': {
		year: /(<dates>)/,
		author: /(<Copyright Holder>)/,
		email: /(\(<URL\|email>\))/
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
	OML: {}, //todo
	OpenSSL: {},
	'OPL-1.0': {},
	'OSET-PL-2.1': {},
	'OSL-1.0': {},
	'OSL-1.1': {},
	'OSL-2.0': {},
	'OSL-2.1': {},
	'OSL-3.0': {},
	'Parity-6.0.0': {
		author: /(contributor name)/,
		project: /: (source)/
	},
	'PDDL-1.0': {},
	'PHP-3.0': {}, // todo
	'PHP-3.01': {},
	Plexus: {
		year: /(2002)/,
		author: /(The Codehaus)/,
		email: /bob@codehaus\.org/,
		website: /(http:\/\/classworlds\.codehaus\.org\/)/,
		project: /(classworlds)/
	},
	PostgreSQL: {}, // todo
	psfrag: {
		year: /(1996)/,
		author: /(Craig Barratt, Michael C. Grant, and David Carlisle)/,
		project: /(psfrag\.dtx)/
	},
	psutils: {},
	'Python-2.0': {},
	Qhull: {
		year: /(1993-2003)/,
		author: [
			/The National Science and Technology Research Center for Computation and Visualization of Geometric Structures \(The Geometry Center\) University of Minnesota/,
			/(The Geometry Center)/
		],
		email: [/(qhull@qhull\.org)/, /qhull_bug@qhull\.org/],
		project: /(Qhull)/
	},
	'QPL-1.0': {
		year: /(1999-2005)/,
		author: /(Trolltech AS, Norway)/
	},
	Rdisc: {
		removeAddress: /\n\nSun Microsystems, Inc\.\n\n2550 Garcia Avenue\n\nMountain View, California 94043"/,
		project: /Rdisc/,
		author: /(Sun Microsystems, Inc\.)/
	},
	'RHeCos-1.1': {},
	'RPL-1.1': {}, // todo
	'RPL-1.5': {
		year: /(2001-2007)/,
		author: /(Technical Pursuit Inc\.)/
	},
	'RPSL-1.0': {
		author: /(____________________________________)/
	},
	'RSA-MD': {},
	RSCPL: {
		author: /(______________________________________)/
	},
	Ruby: {},
	'SAX-PD': {
		replaceCopyrightInfo: /(Copyright Status)/
		// more
	},
	Saxpath: {
		year: /(2000-2002)/,
		author: [/(werken digital)/, /(the SAXPath Project Management)/],
		project: /(SAXPath)/,
		website: /(http:\/\/www.saxpath.org\/)/
	},
	SCEA: {},
	'Sendmail-8.23': {},
	Sendmail: {},
	'SGI-B-1.0': {},
	'SGI-B-1.1': {},
	'SGI-B-2.0': {
		year: /(\[dates of first publication\])/,
		author: /(Silicon Graphics, Inc\.)/
	},
	'SHL-0.5': {
		year: /(\[yyyy\])/,
		author: /(\[name of copyright owner\])/
	},
	'SHL-0.51': {
		year: /(\[yyyy\])/,
		author: /(\[name of copyright owner\])/
	},
	'SimPL-2.0': {},
	'SISSL-1.2': {
		author: /(__________________________________)/
	},
	SISSL: {}, // blanks
	Sleepycat: {
		year: /(1990-1999)/,
		author: /(Sleepycat Software)/
	},
	SMLNJ: {
		year: /(1989-2001)/,
		author: /(Lucent(?: Technologies))/
	},
	SMPPL: {
		author: /(\[COMPLETE THIS\])/,
		contributors: /(______________________________________)/
	},
	SNIA: {
		author: /(\[COMPLETE THIS\])/,
		contributors: /(______________________________________)/
	},
	'Spencer-86': {
		year: /(1986)/,
		author: /(Henry Spencer)/,
		institution: /(University of Toronto)/
	},
	'Spencer-94': {
		year: /(1992, 1993, 1994)/,
		author: /(Henry Spencer)/,
		institution: /(the American Telephone and Telegraph Company or of the Regents of the University of California)/
	},
	'Spencer-99': {
		year: /(1998, 1999)/,
		author: /(Henry Specner)/,
		funders: /(Cray Research Inc\., UUNET Communications Services Inc\., Sun Microsystems Inc\., and Scriptics Corporation)/
	},
	'SPL-1.0': {}, // todo
	'SSH-OpenSSH': {},
	'SSH-short': {
		project: /("ssh" or "Secure Shell")/
	},
	'SSPL-1.0': {
		year: /© (2018)/,
		author: /©.*?(MongoDB, Inc\.)/
	},
	'StandardML-NJ': {},
	'SugarCRM-1.1.3': {},
	SWL: {},
	'TAPR-OHL-1.0': {},
	TCL: {},
	'TCP-wrappers': {
		year: [/(1990, 1991, 1992, 1993, 1994 and 1995)/, /(1995)/],
		author: /(Wietse Venema)/,
		institution: /(Eindhoven University of Technology, The Netherlands)/
	},
	TMate: {},
	'TORQUE-1.1': {},
	TOSL: {
		year: /(2006)/,
		author: /(Mike Mintz and Robert Ekendahl)/i
	},
	'TU-Berlin-1.0': {},
	'TU-Berlin-2.0': {},
	'UCL-1.0': {},
	'Unicode-DFS-2015': {},
	'Unicode-DFS-2016': {},
	'Unicode-TOU': {},
	Unlicense: {},
	'UPL-1.0': {
		year: /(\[year\])/,
		author: /(\[copyright holders\])/
	},
	Vim: {},
	VOSTROM: {},
	'VSL-1.0': {},
	'W3C-19980720': {},
	'W3C-20150513': {},
	W3C: {},
	'Watcom-1.0': {}, // todo
	Wsuipa: {},
	WTFPL: {
		year: /\(C\) (2004)/,
		author: /(Sam Hocevar <sam@hocevar\.net>)/
	},
	WXwindows: {},
	X11: {},
	Xerox: {
		year: /(1995, 1996)/,
		author: /(Xerox Corporation)/i
	},
	'XFree86-1.1': {},
	xinetd: {},
	Xnet: {
		year: /(2000-2001)/,
		author: /(X.Net, Inc\. Lafayette, California, USA)/
	},
	xpp: {},
	XSkat: {},
	'YPL-1.0': {},
	'YPL-1.1': {},
	Zed: {
		year: /(January 1995)/,
		author: /(Jim Davies)/,
		email: /(Jim\.Davies@comlab\.ox\.ac\.uk)/,
		author: /(zed-csp\.sty)/
	},
	'Zend-2.0': {},
	'Zimbra-1.3': {},
	'Zimbra-1.4': {},
	'zlib-acknowledgement': {},
	Zlib: {
		author: /(<copyright holders>)/
	},
	'ZPL-1.1': {},
	'ZPL-2.0': {}, // todo
	'ZPL-2.1': {}
};
