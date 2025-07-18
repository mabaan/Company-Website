import countryData from "./countries.json";

export type Country = {
  name: string;
  flag: string;
  code: string;
  dial_code: string;
};

export function getCountryList(): Country[] {
  return countryData;
}
