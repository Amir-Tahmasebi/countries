import useAppState from "../../state/useAppState";
import Input from "./Input";
import Region from "./Region";

export default function Filter() {
  const {state} = useAppState()
  return (
    <section className="custom-filter-wrapper">
      <Input classes={`bg-${state.theme}`} />
      <Region classes={`bg-${state.theme}`} />
    </section>
  );
}
