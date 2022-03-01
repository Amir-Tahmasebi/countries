import { useEffect } from "react";
import Router from "./router";
import { setInitState } from "./state/actionHandler";
import StateType from "./state/State.type";
import useAppState from "./state/useAppState";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const { dispatch } = useAppState();
  useEffect(() => {
    const state: StateType = JSON.parse(
      localStorage.getItem("state") as string
    );
    if (state && state.theme && state.countries.length > 0) {
      dispatch(setInitState(state));
    }
  }, []);

  return <Router />;
}

export default App;
