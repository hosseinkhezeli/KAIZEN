
// export const validatePhoneRegex = new RegExp('^(\\+98|0)?9\\d{9}$');
export const validatePhoneRegex = new RegExp("^(09)\\d{9}$");
export const validatePhoneRegexWithoutZero = new RegExp("^(9)\\d{9}$");
export const validatePhoneRegexInternational = new RegExp("\\+(9[976]\\d|8[987530]\\d|6[987]\\d|5[90]\\d|42\\d|3[875]\\d|\n" +
  "2[98654321]\\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|\n" +
  "4[987654310]|3[9643210]|2[70]|7|1)\\d{1,14}$");
export const validateLandlineRegex = new RegExp("^0\\d{2,3}\\d{8}$");
export const validate10DigitRegex = new RegExp("^$|^\\d{10}$");
export const validateEmailRegex = new RegExp(
  "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
);
export const validateWebsiteRegex = new RegExp(
  "[(http(s)?):\\/\\/(www\\.)?a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)"
);
export const RE_DIGIT = new RegExp(/^\d+$/);
export const validatePostalCodeRegex = new RegExp(/^[0-9]{10}$/);
export const validateOnlyEn = new RegExp(/[a-zA-Z]/)
export const validateShebaNumber = new RegExp(/^(?=.{24}$)[0-9]*$/)
export const validateShebaNumberWithIR = new RegExp(/^(?:IR)(?=.{24}$)[0-9]*$/)


