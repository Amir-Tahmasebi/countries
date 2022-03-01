import { useParams, useNavigate } from "react-router-dom";
import { useCounty } from "../../hook/countries";
import Button from "./../Button/Button";
import DetailCard from "../DetailCard/DetailCard";
import { HiArrowNarrowLeft } from "react-icons/hi";
import useAppState from "../../state/useAppState";
import Loading from "../Loading/Loading";

export default function Detail() {
  const params = useParams();
  const { country, isLoading, error } = useCounty(params.name as string);
  const navigate = useNavigate();
  const { state } = useAppState();

  if (error) return <h1>Error ...</h1>;

  return (
    <main className="detail-container">
      <Button
        onClick={() => navigate(-1)}
        classes={`my-50 bg-${state.theme}`}
        size="large"
        Icon={HiArrowNarrowLeft}
      >
        Back
      </Button>
      {isLoading ? (
        <Loading />
      ) : (
        country.length > 0 && <DetailCard {...country} />
      )}
    </main>
  );
}
