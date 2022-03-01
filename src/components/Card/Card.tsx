import "./Card.scss";
import CardProps from "./Card.type";
import { Link } from "react-router-dom";

export default function Card({
  flag,
  capital,
  name,
  population,
  region,
  classes,
}: CardProps) {
  return (
    <section className={`custom-card`}>
      <div className={`custom-card-container`}>
        <div className={`custom-card-wrapper ${classes ? classes : ""}`}>
          <img src={flag} alt={name} />
          <div className="custom-card-content">
            <Link to={`detail/${name}`}>
              <h3>{name}</h3>
            </Link>
            <p>
              Population: <span>{population}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
