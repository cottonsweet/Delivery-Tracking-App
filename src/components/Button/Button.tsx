// CSS
import classes from "./Button.module.css";

interface Props {
  title: string;
  className?: string;
  colorCode: string;
  activiteBtnSystem?: boolean;
  onClick?: () => void;
}

const Button = (props: Props) => {
  const buttonStyle = {
    backgroundColor: props.activiteBtnSystem ? props.colorCode : "#e5e7eb",
    color: props.activiteBtnSystem ? "" : "grey",
  };
  return (
    <button
      onClick={props.onClick}
      className={classes[props.className || ""]}
      style={buttonStyle}
    >
      {props.title}
    </button>
  );
};

export default Button;
