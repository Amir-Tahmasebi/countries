type CurrenciesType = {
    name : string
}

type LanguagesType = {
    name : string
}
type CountryType = {
    name: string
    nativeName: string
    population: number;
    region: string;
    capital: string;
    flag: string;
    subregion: string
    topLevelDomain: string[]
    currencies: CurrenciesType[]
    languages: LanguagesType[]
    borders : string[]
    
}
export default CountryType;