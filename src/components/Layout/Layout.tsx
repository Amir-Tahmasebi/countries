import useAppState from "../../state/useAppState";
import Header from "../Header";
import "./Layout.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {

  const {state} = useAppState()

  return (
    <section className={`custom-layout-container ${state.theme === "white" ? "bg-very-light-gray" : "bg-very-dark"}`}>
      <Header classes="bg-white" />
      <section className="custom-layout-wrapper">{children}</section>
    </section>
  );
}
