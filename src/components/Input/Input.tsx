import React from "react";

// CSS
import classes from "./Input.module.css";

interface Props {
  type: string;
  className: string;
  placeholder: string;
  colorCode: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
  return (
    <input
      type={props.type}
      className={`${classes[props.className]}`}
      placeholder={props.placeholder}
      onChange={props.onChange}
      style={{ border: "1px solid" + props.colorCode }}
    />
  );
};

export default Input;
