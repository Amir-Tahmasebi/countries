import useAppState from "../../state/useAppState";
import Loading from "../Loading/Loading";
import { useAllCountries } from "./../../hook/countries";
import Card from "./../Card";
import Filter from "./Filter";
import "./Home.scss";

export default function Home() {
  useAllCountries();
  const { state } = useAppState();

  const renderCountries =
    state.countries &&
    state.countries.length > 0 &&
    state.countries.map((country: any, index: number) => (
      <Card classes={`bg-${state.theme}`} key={index} {...country} />
    ));

  return (
    <section className="custom-home-content">
      <Filter />
      {!state.isLoading ? (
        <section className="card-container">{renderCountries}</section>
      ) : (
        <Loading />
      )}
    </section>
  );
}
