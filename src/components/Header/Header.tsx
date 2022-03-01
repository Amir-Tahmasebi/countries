import { FaRegMoon } from "react-icons/fa";
import { changeThemeColor } from "../../state/actionHandler";
import useAppState from "../../state/useAppState";
import "./Header.scss";

type HeaderProps = {
  classes?: string;
};

export default function Header({ classes }: HeaderProps) {
  const { state, dispatch } = useAppState();
  const handleClick = () => {
    const color = state.theme === "white" ? "dark" : "white";
    dispatch(changeThemeColor(color));
  };
  
  return (
    <header className={`custom-header-container bg-${state.theme}`}>
      <section className="custom-header-wrapper">
        <h1>Where in the World?</h1>
        <p onClick={handleClick}>
          <FaRegMoon className="custom-header-icon" />
          <strong>Dark Mode</strong>
        </p>
      </section>
    </header>
  );
}
