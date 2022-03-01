import "./Button.scss";

type ButtonPropsType = {
  children  : React.ReactNode;
  onClick?: () => void;
  size: "small" | "large";
  classes?: string;
  Icon?: any | null;
};

export default function Button({
  children,
  onClick,
  size,
  classes,
  Icon
}: ButtonPropsType) {
  return (
    <button
      onClick={onClick}
      className={`custom-button ${classes} custom-button-${size}`}
    >
      {Icon && <Icon className="custom-btn-icon" />}
      <span>{children}</span>
    </button>
  );
}
