import DE from "./de";
import EN from "./en";
import FR from "./fr";
import IT from "./it";

const locales = {
  "en-US": EN,
  fr: FR,
  it: IT,
  de: DE,
};

export default function useLocalization(locale = "en-US") {
  if (locales[locale]) {
    return locales[locale];
  }

  throw new Error("Locale cannot be found");
}
