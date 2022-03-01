import { RotatingLines as Loader } from "react-loader-spinner";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading-container">
      <Loader width="120" />
    </div>
  )
}
