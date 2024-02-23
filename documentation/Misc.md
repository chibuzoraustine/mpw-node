<p align="center">
    <img title="MoiPayWay" src="https://moipayway.com/wp-content/uploads/2023/04/moipayway.png" width="50%"/>
</p>

<h1>Misc</h1>

Methods needed to have smooth integration with MoiPayWay infrastructure.

- [Countries](#countries)
- [File upload](#file-upload)

## Countries

Retrieve list of countries

```javascript
import MoiPayWay from "mpw-node"

const mpw = new MoiPayWay("secret_token");

try {
    console.log(await mpw.misc.countries())
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
{
  "status": "success",
  "response_code": 200,
  "message": "Details retrieved successfully",
  "data": [
    {
      "code": "af",
      "name": "Afghanistan",
      "supported": "",
      "continent": "Asia",
      "currency": "AFN"
    },
    {
      "code": "ax",
      "name": "Aland Islands",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "al",
      "name": "Albania",
      "supported": "",
      "continent": "Europe",
      "currency": "ALL"
    },
    {
      "code": "dz",
      "name": "Algeria",
      "supported": "",
      "continent": "Africa",
      "currency": "DZD"
    },
    {
      "code": "as",
      "name": "American Samoa",
      "supported": "",
      "continent": "Oceania",
      "currency": "USD"
    },
    {
      "code": "ad",
      "name": "Andorra",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "ao",
      "name": "Angola",
      "supported": "",
      "continent": "Africa",
      "currency": "AOA"
    },
    {
      "code": "ai",
      "name": "Anguilla",
      "supported": "",
      "continent": "North America",
      "currency": "XCD"
    },
    {
      "code": "aq",
      "name": "Antarctica",
      "supported": "",
      "continent": "Antarctica",
      "currency": "AAD"
    },
    {
      "code": "ag",
      "name": "Antigua and Barbuda",
      "supported": "",
      "continent": "North America",
      "currency": "XCD"
    },
    {
      "code": "ar",
      "name": "Argentina",
      "supported": "",
      "continent": "South America",
      "currency": "ARS"
    },
    {
      "code": "am",
      "name": "Armenia",
      "supported": "",
      "continent": "Asia",
      "currency": "AMD"
    },
    {
      "code": "aw",
      "name": "Aruba",
      "supported": "",
      "continent": "North America",
      "currency": "AWG"
    },
    {
      "code": "au",
      "name": "Australia",
      "supported": "",
      "continent": "Oceania",
      "currency": "AUD"
    },
    {
      "code": "at",
      "name": "Austria",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "az",
      "name": "Azerbaijan",
      "supported": "",
      "continent": "Asia",
      "currency": "AZN"
    },
    {
      "code": "bs",
      "name": "Bahamas",
      "supported": "",
      "continent": "North America",
      "currency": "BSD"
    },
    {
      "code": "bh",
      "name": "Bahrain",
      "supported": "",
      "continent": "Asia",
      "currency": "BHD"
    },
    {
      "code": "bd",
      "name": "Bangladesh",
      "supported": "",
      "continent": "Asia",
      "currency": "BDT"
    },
    {
      "code": "bb",
      "name": "Barbados",
      "supported": "",
      "continent": "North America",
      "currency": "BBD"
    },
    {
      "code": "by",
      "name": "Belarus",
      "supported": "",
      "continent": "Europe",
      "currency": "BYN"
    },
    {
      "code": "be",
      "name": "Belgium",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "bz",
      "name": "Belize",
      "supported": "",
      "continent": "North America",
      "currency": "BZD"
    },
    {
      "code": "bj",
      "name": "Benin",
      "supported": "",
      "continent": "Africa",
      "currency": "XOF"
    },
    {
      "code": "bm",
      "name": "Bermuda",
      "supported": "",
      "continent": "North America",
      "currency": "BMD"
    },
    {
      "code": "bt",
      "name": "Bhutan",
      "supported": "",
      "continent": "Asia",
      "currency": "BTN"
    },
    {
      "code": "bo",
      "name": "Bolivia",
      "supported": "",
      "continent": "South America",
      "currency": "BOB"
    },
    {
      "code": "bq",
      "name": "Bonaire, Sint Eustatius and Saba",
      "supported": "",
      "continent": "North America",
      "currency": "USD"
    },
    {
      "code": "ba",
      "name": "Bosnia and Herzegovina",
      "supported": "",
      "continent": "Europe",
      "currency": "BAM"
    },
    {
      "code": "bw",
      "name": "Botswana",
      "supported": "",
      "continent": "Africa",
      "currency": "BWP"
    },
    {
      "code": "bv",
      "name": "Bouvet Island",
      "supported": "",
      "continent": "Antarctica",
      "currency": "NOK"
    },
    {
      "code": "br",
      "name": "Brazil",
      "supported": "",
      "continent": "South America",
      "currency": "BRL"
    },
    {
      "code": "io",
      "name": "British Indian Ocean Territory",
      "supported": "",
      "continent": "Asia",
      "currency": "USD"
    },
    {
      "code": "bn",
      "name": "Brunei Darussalam",
      "supported": "",
      "continent": "Asia",
      "currency": "BND"
    },
    {
      "code": "bg",
      "name": "Bulgaria",
      "supported": "",
      "continent": "Europe",
      "currency": "BGN"
    },
    {
      "code": "bf",
      "name": "Burkina Faso",
      "supported": "",
      "continent": "Africa",
      "currency": "XOF"
    },
    {
      "code": "bi",
      "name": "Burundi",
      "supported": "",
      "continent": "Africa",
      "currency": "BIF"
    },
    {
      "code": "kh",
      "name": "Cambodia",
      "supported": "",
      "continent": "Asia",
      "currency": "KHR"
    },
    {
      "code": "cm",
      "name": "Cameroon",
      "supported": "",
      "continent": "Africa",
      "currency": "XAF"
    },
    {
      "code": "ca",
      "name": "Canada",
      "supported": "",
      "continent": "North America",
      "currency": "CAD"
    },
    {
      "code": "cv",
      "name": "Cape Verde",
      "supported": "",
      "continent": "Africa",
      "currency": "CVE"
    },
    {
      "code": "ky",
      "name": "Cayman Islands",
      "supported": "",
      "continent": "North America",
      "currency": "KYD"
    },
    {
      "code": "cf",
      "name": "Central African Republic",
      "supported": "",
      "continent": "Africa",
      "currency": "XAF"
    },
    {
      "code": "td",
      "name": "Chad",
      "supported": "",
      "continent": "Africa",
      "currency": "XAF"
    },
    {
      "code": "cl",
      "name": "Chile",
      "supported": "",
      "continent": "South America",
      "currency": "CLP"
    },
    {
      "code": "cn",
      "name": "China",
      "supported": "",
      "continent": "Asia",
      "currency": "CNY"
    },
    {
      "code": "cx",
      "name": "Christmas Island",
      "supported": "",
      "continent": "Asia",
      "currency": "AUD"
    },
    {
      "code": "cc",
      "name": "Cocos (Keeling) Islands",
      "supported": "",
      "continent": "Asia",
      "currency": "AUD"
    },
    {
      "code": "co",
      "name": "Colombia",
      "supported": "",
      "continent": "South America",
      "currency": "COP"
    },
    {
      "code": "km",
      "name": "Comoros",
      "supported": "",
      "continent": "Africa",
      "currency": "KMF"
    },
    {
      "code": "cg",
      "name": "Congo",
      "supported": "",
      "continent": "Africa",
      "currency": "XAF"
    },
    {
      "code": "cd",
      "name": "Congo, Democratic Republic of the Congo",
      "supported": "",
      "continent": "Africa",
      "currency": "CDF"
    },
    {
      "code": "ck",
      "name": "Cook Islands",
      "supported": "",
      "continent": "Oceania",
      "currency": "NZD"
    },
    {
      "code": "cr",
      "name": "Costa Rica",
      "supported": "",
      "continent": "North America",
      "currency": "CRC"
    },
    {
      "code": "ci",
      "name": "Cote D'Ivoire",
      "supported": "",
      "continent": "Africa",
      "currency": "XOF"
    },
    {
      "code": "hr",
      "name": "Croatia",
      "supported": "",
      "continent": "Europe",
      "currency": "HRK"
    },
    {
      "code": "cu",
      "name": "Cuba",
      "supported": "",
      "continent": "North America",
      "currency": "CUP"
    },
    {
      "code": "cw",
      "name": "Curacao",
      "supported": "",
      "continent": "North America",
      "currency": "ANG"
    },
    {
      "code": "cy",
      "name": "Cyprus",
      "supported": "",
      "continent": "Asia",
      "currency": "EUR"
    },
    {
      "code": "cz",
      "name": "Czech Republic",
      "supported": "",
      "continent": "Europe",
      "currency": "CZK"
    },
    {
      "code": "dk",
      "name": "Denmark",
      "supported": "",
      "continent": "Europe",
      "currency": "DKK"
    },
    {
      "code": "dj",
      "name": "Djibouti",
      "supported": "",
      "continent": "Africa",
      "currency": "DJF"
    },
    {
      "code": "dm",
      "name": "Dominica",
      "supported": "",
      "continent": "North America",
      "currency": "XCD"
    },
    {
      "code": "do",
      "name": "Dominican Republic",
      "supported": "",
      "continent": "North America",
      "currency": "DOP"
    },
    {
      "code": "ec",
      "name": "Ecuador",
      "supported": "",
      "continent": "South America",
      "currency": "USD"
    },
    {
      "code": "eg",
      "name": "Egypt",
      "supported": "Yes",
      "continent": "Africa",
      "currency": "EGP"
    },
    {
      "code": "sv",
      "name": "El Salvador",
      "supported": "",
      "continent": "North America",
      "currency": "USD"
    },
    {
      "code": "gq",
      "name": "Equatorial Guinea",
      "supported": "",
      "continent": "Africa",
      "currency": "XAF"
    },
    {
      "code": "er",
      "name": "Eritrea",
      "supported": "",
      "continent": "Africa",
      "currency": "ERN"
    },
    {
      "code": "ee",
      "name": "Estonia",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "et",
      "name": "Ethiopia",
      "supported": "",
      "continent": "Africa",
      "currency": "ETB"
    },
    {
      "code": "fk",
      "name": "Falkland Islands (Malvinas)",
      "supported": "",
      "continent": "South America",
      "currency": "FKP"
    },
    {
      "code": "fo",
      "name": "Faroe Islands",
      "supported": "",
      "continent": "Europe",
      "currency": "DKK"
    },
    {
      "code": "fj",
      "name": "Fiji",
      "supported": "",
      "continent": "Oceania",
      "currency": "FJD"
    },
    {
      "code": "fi",
      "name": "Finland",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "fr",
      "name": "France",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "gf",
      "name": "French Guiana",
      "supported": "",
      "continent": "South America",
      "currency": "EUR"
    },
    {
      "code": "pf",
      "name": "French Polynesia",
      "supported": "",
      "continent": "Oceania",
      "currency": "XPF"
    },
    {
      "code": "tf",
      "name": "French Southern Territories",
      "supported": "",
      "continent": "Antarctica",
      "currency": "EUR"
    },
    {
      "code": "ga",
      "name": "Gabon",
      "supported": "",
      "continent": "Africa",
      "currency": "XAF"
    },
    {
      "code": "gm",
      "name": "Gambia",
      "supported": "",
      "continent": "Africa",
      "currency": "GMD"
    },
    {
      "code": "ge",
      "name": "Georgia",
      "supported": "",
      "continent": "Asia",
      "currency": "GEL"
    },
    {
      "code": "de",
      "name": "Germany",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "gh",
      "name": "Ghana",
      "supported": "Yes",
      "continent": "Africa",
      "currency": "GHS"
    },
    {
      "code": "gi",
      "name": "Gibraltar",
      "supported": "",
      "continent": "Europe",
      "currency": "GIP"
    },
    {
      "code": "gr",
      "name": "Greece",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "gl",
      "name": "Greenland",
      "supported": "",
      "continent": "North America",
      "currency": "DKK"
    },
    {
      "code": "gd",
      "name": "Grenada",
      "supported": "",
      "continent": "North America",
      "currency": "XCD"
    },
    {
      "code": "gp",
      "name": "Guadeloupe",
      "supported": "",
      "continent": "North America",
      "currency": "EUR"
    },
    {
      "code": "gu",
      "name": "Guam",
      "supported": "",
      "continent": "Oceania",
      "currency": "USD"
    },
    {
      "code": "gt",
      "name": "Guatemala",
      "supported": "",
      "continent": "North America",
      "currency": "GTQ"
    },
    {
      "code": "gg",
      "name": "Guernsey",
      "supported": "",
      "continent": "Europe",
      "currency": "GBP"
    },
    {
      "code": "gn",
      "name": "Guinea",
      "supported": "",
      "continent": "Africa",
      "currency": "GNF"
    },
    {
      "code": "gw",
      "name": "Guinea-Bissau",
      "supported": "",
      "continent": "Africa",
      "currency": "XOF"
    },
    {
      "code": "gy",
      "name": "Guyana",
      "supported": "",
      "continent": "South America",
      "currency": "GYD"
    },
    {
      "code": "ht",
      "name": "Haiti",
      "supported": "",
      "continent": "North America",
      "currency": "HTG"
    },
    {
      "code": "hm",
      "name": "Heard Island and Mcdonald Islands",
      "supported": "",
      "continent": "Antarctica",
      "currency": "AUD"
    },
    {
      "code": "va",
      "name": "Holy See (Vatican City State)",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "hn",
      "name": "Honduras",
      "supported": "",
      "continent": "North America",
      "currency": "HNL"
    },
    {
      "code": "hk",
      "name": "Hong Kong",
      "supported": "",
      "continent": "Asia",
      "currency": "HKD"
    },
    {
      "code": "hu",
      "name": "Hungary",
      "supported": "",
      "continent": "Europe",
      "currency": "HUF"
    },
    {
      "code": "is",
      "name": "Iceland",
      "supported": "",
      "continent": "Europe",
      "currency": "ISK"
    },
    {
      "code": "in",
      "name": "India",
      "supported": "",
      "continent": "Asia",
      "currency": "INR"
    },
    {
      "code": "id",
      "name": "Indonesia",
      "supported": "",
      "continent": "Asia",
      "currency": "IDR"
    },
    {
      "code": "ir",
      "name": "Iran, Islamic Republic of",
      "supported": "",
      "continent": "Asia",
      "currency": "IRR"
    },
    {
      "code": "iq",
      "name": "Iraq",
      "supported": "",
      "continent": "Asia",
      "currency": "IQD"
    },
    {
      "code": "ie",
      "name": "Ireland",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "im",
      "name": "Isle of Man",
      "supported": "",
      "continent": "Europe",
      "currency": "GBP"
    },
    {
      "code": "il",
      "name": "Israel",
      "supported": "",
      "continent": "Asia",
      "currency": "ILS"
    },
    {
      "code": "it",
      "name": "Italy",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "jm",
      "name": "Jamaica",
      "supported": "",
      "continent": "North America",
      "currency": "JMD"
    },
    {
      "code": "jp",
      "name": "Japan",
      "supported": "",
      "continent": "Asia",
      "currency": "JPY"
    },
    {
      "code": "je",
      "name": "Jersey",
      "supported": "",
      "continent": "Europe",
      "currency": "GBP"
    },
    {
      "code": "jo",
      "name": "Jordan",
      "supported": "",
      "continent": "Asia",
      "currency": "JOD"
    },
    {
      "code": "kz",
      "name": "Kazakhstan",
      "supported": "",
      "continent": "Asia",
      "currency": "KZT"
    },
    {
      "code": "ke",
      "name": "Kenya",
      "supported": "Yes",
      "continent": "Africa",
      "currency": "KES"
    },
    {
      "code": "ki",
      "name": "Kiribati",
      "supported": "",
      "continent": "Oceania",
      "currency": "AUD"
    },
    {
      "code": "kp",
      "name": "Korea, Democratic People's Republic of",
      "supported": "",
      "continent": "Asia",
      "currency": "KPW"
    },
    {
      "code": "kr",
      "name": "Korea, Republic of",
      "supported": "",
      "continent": "Asia",
      "currency": "KRW"
    },
    {
      "code": "xk",
      "name": "Kosovo",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "kw",
      "name": "Kuwait",
      "supported": "",
      "continent": "Asia",
      "currency": "KWD"
    },
    {
      "code": "kg",
      "name": "Kyrgyzstan",
      "supported": "",
      "continent": "Asia",
      "currency": "KGS"
    },
    {
      "code": "la",
      "name": "Lao People's Democratic Republic",
      "supported": "",
      "continent": "Asia",
      "currency": "LAK"
    },
    {
      "code": "lv",
      "name": "Latvia",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "lb",
      "name": "Lebanon",
      "supported": "",
      "continent": "Asia",
      "currency": "LBP"
    },
    {
      "code": "ls",
      "name": "Lesotho",
      "supported": "",
      "continent": "Africa",
      "currency": "LSL"
    },
    {
      "code": "lr",
      "name": "Liberia",
      "supported": "",
      "continent": "Africa",
      "currency": "LRD"
    },
    {
      "code": "ly",
      "name": "Libyan Arab Jamahiriya",
      "supported": "",
      "continent": "Africa",
      "currency": "LYD"
    },
    {
      "code": "li",
      "name": "Liechtenstein",
      "supported": "",
      "continent": "Europe",
      "currency": "CHF"
    },
    {
      "code": "lt",
      "name": "Lithuania",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "lu",
      "name": "Luxembourg",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "mo",
      "name": "Macao",
      "supported": "",
      "continent": "Asia",
      "currency": "MOP"
    },
    {
      "code": "mk",
      "name": "Macedonia, the Former Yugoslav Republic of",
      "supported": "",
      "continent": "Europe",
      "currency": "MKD"
    },
    {
      "code": "mg",
      "name": "Madagascar",
      "supported": "",
      "continent": "Africa",
      "currency": "MGA"
    },
    {
      "code": "mw",
      "name": "Malawi",
      "supported": "",
      "continent": "Africa",
      "currency": "MWK"
    },
    {
      "code": "my",
      "name": "Malaysia",
      "supported": "",
      "continent": "Asia",
      "currency": "MYR"
    },
    {
      "code": "mv",
      "name": "Maldives",
      "supported": "",
      "continent": "Asia",
      "currency": "MVR"
    },
    {
      "code": "ml",
      "name": "Mali",
      "supported": "",
      "continent": "Africa",
      "currency": "XOF"
    },
    {
      "code": "mt",
      "name": "Malta",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "mh",
      "name": "Marshall Islands",
      "supported": "",
      "continent": "Oceania",
      "currency": "USD"
    },
    {
      "code": "mq",
      "name": "Martinique",
      "supported": "",
      "continent": "North America",
      "currency": "EUR"
    },
    {
      "code": "mr",
      "name": "Mauritania",
      "supported": "",
      "continent": "Africa",
      "currency": "MRO"
    },
    {
      "code": "mu",
      "name": "Mauritius",
      "supported": "",
      "continent": "Africa",
      "currency": "MUR"
    },
    {
      "code": "yt",
      "name": "Mayotte",
      "supported": "",
      "continent": "Africa",
      "currency": "EUR"
    },
    {
      "code": "mx",
      "name": "Mexico",
      "supported": "",
      "continent": "North America",
      "currency": "MXN"
    },
    {
      "code": "fm",
      "name": "Micronesia, Federated States of",
      "supported": "",
      "continent": "Oceania",
      "currency": "USD"
    },
    {
      "code": "md",
      "name": "Moldova, Republic of",
      "supported": "",
      "continent": "Europe",
      "currency": "MDL"
    },
    {
      "code": "mc",
      "name": "Monaco",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "mn",
      "name": "Mongolia",
      "supported": "",
      "continent": "Asia",
      "currency": "MNT"
    },
    {
      "code": "me",
      "name": "Montenegro",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "ms",
      "name": "Montserrat",
      "supported": "",
      "continent": "North America",
      "currency": "XCD"
    },
    {
      "code": "ma",
      "name": "Morocco",
      "supported": "",
      "continent": "Africa",
      "currency": "MAD"
    },
    {
      "code": "mz",
      "name": "Mozambique",
      "supported": "",
      "continent": "Africa",
      "currency": "MZN"
    },
    {
      "code": "mm",
      "name": "Myanmar",
      "supported": "",
      "continent": "Asia",
      "currency": "MMK"
    },
    {
      "code": "na",
      "name": "Namibia",
      "supported": "",
      "continent": "Africa",
      "currency": "NAD"
    },
    {
      "code": "nr",
      "name": "Nauru",
      "supported": "",
      "continent": "Oceania",
      "currency": "AUD"
    },
    {
      "code": "np",
      "name": "Nepal",
      "supported": "",
      "continent": "Asia",
      "currency": "NPR"
    },
    {
      "code": "nl",
      "name": "Netherlands",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "an",
      "name": "Netherlands Antilles",
      "supported": "",
      "continent": "North America",
      "currency": "ANG"
    },
    {
      "code": "nc",
      "name": "New Caledonia",
      "supported": "",
      "continent": "Oceania",
      "currency": "XPF"
    },
    {
      "code": "nz",
      "name": "New Zealand",
      "supported": "",
      "continent": "Oceania",
      "currency": "NZD"
    },
    {
      "code": "ni",
      "name": "Nicaragua",
      "supported": "",
      "continent": "North America",
      "currency": "NIO"
    },
    {
      "code": "ne",
      "name": "Niger",
      "supported": "",
      "continent": "Africa",
      "currency": "XOF"
    },
    {
      "code": "ng",
      "name": "Nigeria",
      "supported": "Yes",
      "continent": "Africa",
      "currency": "NGN"
    },
    {
      "code": "nu",
      "name": "Niue",
      "supported": "",
      "continent": "Oceania",
      "currency": "NZD"
    },
    {
      "code": "nf",
      "name": "Norfolk Island",
      "supported": "",
      "continent": "Oceania",
      "currency": "AUD"
    },
    {
      "code": "mp",
      "name": "Northern Mariana Islands",
      "supported": "",
      "continent": "Oceania",
      "currency": "USD"
    },
    {
      "code": "no",
      "name": "Norway",
      "supported": "",
      "continent": "Europe",
      "currency": "NOK"
    },
    {
      "code": "om",
      "name": "Oman",
      "supported": "",
      "continent": "Asia",
      "currency": "OMR"
    },
    {
      "code": "pk",
      "name": "Pakistan",
      "supported": "",
      "continent": "Asia",
      "currency": "PKR"
    },
    {
      "code": "pw",
      "name": "Palau",
      "supported": "",
      "continent": "Oceania",
      "currency": "USD"
    },
    {
      "code": "ps",
      "name": "Palestinian Territory, Occupied",
      "supported": "",
      "continent": "Asia",
      "currency": "ILS"
    },
    {
      "code": "pa",
      "name": "Panama",
      "supported": "",
      "continent": "North America",
      "currency": "PAB"
    },
    {
      "code": "pg",
      "name": "Papua New Guinea",
      "supported": "",
      "continent": "Oceania",
      "currency": "PGK"
    },
    {
      "code": "py",
      "name": "Paraguay",
      "supported": "",
      "continent": "South America",
      "currency": "PYG"
    },
    {
      "code": "pe",
      "name": "Peru",
      "supported": "",
      "continent": "South America",
      "currency": "PEN"
    },
    {
      "code": "ph",
      "name": "Philippines",
      "supported": "",
      "continent": "Asia",
      "currency": "PHP"
    },
    {
      "code": "pn",
      "name": "Pitcairn",
      "supported": "",
      "continent": "Oceania",
      "currency": "NZD"
    },
    {
      "code": "pl",
      "name": "Poland",
      "supported": "",
      "continent": "Europe",
      "currency": "PLN"
    },
    {
      "code": "pt",
      "name": "Portugal",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "pr",
      "name": "Puerto Rico",
      "supported": "",
      "continent": "North America",
      "currency": "USD"
    },
    {
      "code": "qa",
      "name": "Qatar",
      "supported": "",
      "continent": "Asia",
      "currency": "QAR"
    },
    {
      "code": "re",
      "name": "Reunion",
      "supported": "",
      "continent": "Africa",
      "currency": "EUR"
    },
    {
      "code": "ro",
      "name": "Romania",
      "supported": "",
      "continent": "Europe",
      "currency": "RON"
    },
    {
      "code": "ru",
      "name": "Russian Federation",
      "supported": "",
      "continent": "Asia",
      "currency": "RUB"
    },
    {
      "code": "rw",
      "name": "Rwanda",
      "supported": "",
      "continent": "Africa",
      "currency": "RWF"
    },
    {
      "code": "bl",
      "name": "Saint Barthelemy",
      "supported": "",
      "continent": "North America",
      "currency": "EUR"
    },
    {
      "code": "sh",
      "name": "Saint Helena",
      "supported": "",
      "continent": "Africa",
      "currency": "SHP"
    },
    {
      "code": "kn",
      "name": "Saint Kitts and Nevis",
      "supported": "",
      "continent": "North America",
      "currency": "XCD"
    },
    {
      "code": "lc",
      "name": "Saint Lucia",
      "supported": "",
      "continent": "North America",
      "currency": "XCD"
    },
    {
      "code": "mf",
      "name": "Saint Martin",
      "supported": "",
      "continent": "North America",
      "currency": "EUR"
    },
    {
      "code": "pm",
      "name": "Saint Pierre and Miquelon",
      "supported": "",
      "continent": "North America",
      "currency": "EUR"
    },
    {
      "code": "vc",
      "name": "Saint Vincent and the Grenadines",
      "supported": "",
      "continent": "North America",
      "currency": "XCD"
    },
    {
      "code": "ws",
      "name": "Samoa",
      "supported": "",
      "continent": "Oceania",
      "currency": "WST"
    },
    {
      "code": "sm",
      "name": "San Marino",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "st",
      "name": "Sao Tome and Principe",
      "supported": "",
      "continent": "Africa",
      "currency": "STD"
    },
    {
      "code": "sa",
      "name": "Saudi Arabia",
      "supported": "",
      "continent": "Asia",
      "currency": "SAR"
    },
    {
      "code": "sn",
      "name": "Senegal",
      "supported": "",
      "continent": "Africa",
      "currency": "XOF"
    },
    {
      "code": "rs",
      "name": "Serbia",
      "supported": "",
      "continent": "Europe",
      "currency": "RSD"
    },
    {
      "code": "cs",
      "name": "Serbia and Montenegro",
      "supported": "",
      "continent": "Europe",
      "currency": "RSD"
    },
    {
      "code": "sc",
      "name": "Seychelles",
      "supported": "",
      "continent": "Africa",
      "currency": "SCR"
    },
    {
      "code": "sl",
      "name": "Sierra Leone",
      "supported": "",
      "continent": "Africa",
      "currency": "SLL"
    },
    {
      "code": "sg",
      "name": "Singapore",
      "supported": "",
      "continent": "Asia",
      "currency": "SGD"
    },
    {
      "code": "sx",
      "name": "Sint Maarten",
      "supported": "",
      "continent": "North America",
      "currency": "ANG"
    },
    {
      "code": "sk",
      "name": "Slovakia",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "si",
      "name": "Slovenia",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "sb",
      "name": "Solomon Islands",
      "supported": "",
      "continent": "Oceania",
      "currency": "SBD"
    },
    {
      "code": "so",
      "name": "Somalia",
      "supported": "",
      "continent": "Africa",
      "currency": "SOS"
    },
    {
      "code": "za",
      "name": "South Africa",
      "supported": "Yes",
      "continent": "Africa",
      "currency": "ZAR"
    },
    {
      "code": "gs",
      "name": "South Georgia and the South Sandwich Islands",
      "supported": "",
      "continent": "Antarctica",
      "currency": "GBP"
    },
    {
      "code": "ss",
      "name": "South Sudan",
      "supported": "",
      "continent": "Africa",
      "currency": "SSP"
    },
    {
      "code": "es",
      "name": "Spain",
      "supported": "",
      "continent": "Europe",
      "currency": "EUR"
    },
    {
      "code": "lk",
      "name": "Sri Lanka",
      "supported": "",
      "continent": "Asia",
      "currency": "LKR"
    },
    {
      "code": "sd",
      "name": "Sudan",
      "supported": "",
      "continent": "Africa",
      "currency": "SDG"
    },
    {
      "code": "sr",
      "name": "Suriname",
      "supported": "",
      "continent": "South America",
      "currency": "SRD"
    },
    {
      "code": "sj",
      "name": "Svalbard and Jan Mayen",
      "supported": "",
      "continent": "Europe",
      "currency": "NOK"
    },
    {
      "code": "sz",
      "name": "Swaziland",
      "supported": "",
      "continent": "Africa",
      "currency": "SZL"
    },
    {
      "code": "se",
      "name": "Sweden",
      "supported": "",
      "continent": "Europe",
      "currency": "SEK"
    },
    {
      "code": "ch",
      "name": "Switzerland",
      "supported": "",
      "continent": "Europe",
      "currency": "CHF"
    },
    {
      "code": "sy",
      "name": "Syrian Arab Republic",
      "supported": "",
      "continent": "Asia",
      "currency": "SYP"
    },
    {
      "code": "tw",
      "name": "Taiwan, Province of China",
      "supported": "",
      "continent": "Asia",
      "currency": "TWD"
    },
    {
      "code": "tj",
      "name": "Tajikistan",
      "supported": "",
      "continent": "Asia",
      "currency": "TJS"
    },
    {
      "code": "tz",
      "name": "Tanzania, United Republic of",
      "supported": "",
      "continent": "Africa",
      "currency": "TZS"
    },
    {
      "code": "th",
      "name": "Thailand",
      "supported": "",
      "continent": "Asia",
      "currency": "THB"
    },
    {
      "code": "tl",
      "name": "Timor-Leste",
      "supported": "",
      "continent": "Asia",
      "currency": "USD"
    },
    {
      "code": "tg",
      "name": "Togo",
      "supported": "",
      "continent": "Africa",
      "currency": "XOF"
    },
    {
      "code": "tk",
      "name": "Tokelau",
      "supported": "",
      "continent": "Oceania",
      "currency": "NZD"
    },
    {
      "code": "to",
      "name": "Tonga",
      "supported": "",
      "continent": "Oceania",
      "currency": "TOP"
    },
    {
      "code": "tt",
      "name": "Trinidad and Tobago",
      "supported": "",
      "continent": "North America",
      "currency": "TTD"
    },
    {
      "code": "tn",
      "name": "Tunisia",
      "supported": "",
      "continent": "Africa",
      "currency": "TND"
    },
    {
      "code": "tr",
      "name": "Turkey",
      "supported": "",
      "continent": "Asia",
      "currency": "TRY"
    },
    {
      "code": "tm",
      "name": "Turkmenistan",
      "supported": "",
      "continent": "Asia",
      "currency": "TMT"
    },
    {
      "code": "tc",
      "name": "Turks and Caicos Islands",
      "supported": "",
      "continent": "North America",
      "currency": "USD"
    },
    {
      "code": "tv",
      "name": "Tuvalu",
      "supported": "",
      "continent": "Oceania",
      "currency": "AUD"
    },
    {
      "code": "ug",
      "name": "Uganda",
      "supported": "",
      "continent": "Africa",
      "currency": "UGX"
    },
    {
      "code": "ua",
      "name": "Ukraine",
      "supported": "",
      "continent": "Europe",
      "currency": "UAH"
    },
    {
      "code": "ae",
      "name": "United Arab Emirates",
      "supported": "",
      "continent": "Asia",
      "currency": "AED"
    },
    {
      "code": "gb",
      "name": "United Kingdom",
      "supported": "",
      "continent": "Europe",
      "currency": "GBP"
    },
    {
      "code": "us",
      "name": "United States",
      "supported": "",
      "continent": "North America",
      "currency": "USD"
    },
    {
      "code": "um",
      "name": "United States Minor Outlying Islands",
      "supported": "",
      "continent": "North America",
      "currency": "USD"
    },
    {
      "code": "uy",
      "name": "Uruguay",
      "supported": "",
      "continent": "South America",
      "currency": "UYU"
    },
    {
      "code": "uz",
      "name": "Uzbekistan",
      "supported": "",
      "continent": "Asia",
      "currency": "UZS"
    },
    {
      "code": "vu",
      "name": "Vanuatu",
      "supported": "",
      "continent": "Oceania",
      "currency": "VUV"
    },
    {
      "code": "ve",
      "name": "Venezuela",
      "supported": "",
      "continent": "South America",
      "currency": "VEF"
    },
    {
      "code": "vn",
      "name": "Viet Nam",
      "supported": "",
      "continent": "Asia",
      "currency": "VND"
    },
    {
      "code": "vg",
      "name": "Virgin Islands, British",
      "supported": "",
      "continent": "North America",
      "currency": "USD"
    },
    {
      "code": "vi",
      "name": "Virgin Islands, U.s.",
      "supported": "",
      "continent": "North America",
      "currency": "USD"
    },
    {
      "code": "wf",
      "name": "Wallis and Futuna",
      "supported": "",
      "continent": "Oceania",
      "currency": "XPF"
    },
    {
      "code": "eh",
      "name": "Western Sahara",
      "supported": "",
      "continent": "Africa",
      "currency": "MAD"
    },
    {
      "code": "ye",
      "name": "Yemen",
      "supported": "",
      "continent": "Asia",
      "currency": "YER"
    },
    {
      "code": "zm",
      "name": "Zambia",
      "supported": "",
      "continent": "Africa",
      "currency": "ZMW"
    },
    {
      "code": "zw",
      "name": "Zimbabwe",
      "supported": "",
      "continent": "Africa",
      "currency": "ZWL"
    }
  ]
}
```

## File upload

File upload

```javascript
import MoiPayWay from "mpw-node"
import {readFileSync} from "fs"

const mpw = new MoiPayWay("secret_token");

// file is of type `File`
let file = fs.readFileSync('image.png');

// or
const fileInput = document.getElementById('yourFileId');
let file = fileInput.files[0]; 

try {
    console.log(await mpw.misc.fileUpload(file))
} catch (e) {
    console.log(e)
}

```

Sample Response

```json
{
  "status": "success",
  "response_code": 200,
  "message": "Uploaded successfully",
  "data": {
    "file_url": "https://api.moipayway.com/files/default.png"
  }
}
```