import useAppState from "../../state/useAppState";
import { Link } from "react-router-dom";
import { useBorderCountries } from "../../hook/countries";
import CountryType from "./../Detail/Country.type";
import "./DetailCard.scss";
import Button from "../Button/Button";

type DetailCardProps = CountryType[];
export default function DetailCard(props: DetailCardProps) {
  const { state } = useAppState();
  const { countries } = useBorderCountries(props[0].borders.toString());
  const renderCurrencies = props[0].currencies.map(
    (currency, index: number) => (
      <span key={index}>
        {currency.name}
        {props[0].currencies.length > 1 && ", "}
      </span>
    )
  );

  const renderLanguages = props[0].languages.map((language, index: number) => (
    <span key={index}>
      {language.name}
      {props[0].languages.length > 1 && ", "}
    </span>
  ));

  const renderBorderCountries =
    countries.length > 0 &&
    countries.map((country, index) => (
      <Button key={index} size="small" classes={`m-6 bg-${state.theme}`}>
        <Link
          to={`/detail/${country.name}`}
          className={`bg-${state.theme}-border`}
        >
          {country.name}
        </Link>
      </Button>
    ));

  return (
    <section className="custom-card-detail-container">
      <img src={props[0].flag} alt={props[0].name} />
      <section className="custom-detail-content">
        <h2>{props[0].name}</h2>
        <section>
          <div>
            <p>
              Native Name : <span>{props[0].nativeName}</span>
            </p>
            <p>
              Population : <span>{props[0].population}</span>
            </p>
            <p>
              Region : <span>{props[0].region}</span>
            </p>
            <p>
              Sub Region : <span>{props[0].subregion}</span>
            </p>
            <p>
              Capital : <span>{props[0].capital}</span>
            </p>
          </div>
          <div>
            <p>
              Top Level Domain : <span>{props[0].topLevelDomain[0]}</span>
            </p>
            <p>Currencies : {renderCurrencies}</p>
            <p>Languages : {renderLanguages}</p>
          </div>
        </section>
        <div>
          <span>Border Countries</span> : {renderBorderCountries}
        </div>
      </section>
    </section>
  );
}
