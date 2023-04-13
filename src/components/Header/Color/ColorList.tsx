import { useState } from "react";

// Type
import { ColorType } from "./Color";

// Data
import Color from "./Color";

// CSS
import classes from "./ColorList.module.css";

interface Props {
  handleClickColorCode: (color: string) => void;
  colorCode: string;
}

const ColorList = (props: Props) => {
  const [compareColor, setCompareColor] = useState("#6366F1");

  const getActiviteColor = (color: string) => color === compareColor;

  // 헤더쪽 li 색상코드 데이터 받아오기
  const handleChangeColor = (data: ColorType) => {
    props.handleClickColorCode(data.color);
    setCompareColor(data.color);
  };

  // 받아온 색상 코드 데이터를 동적으로 className 지정
  const getColorItemClass = (data: ColorType) => {
    const isActive = getActiviteColor(data.color);
    return `${classes["color-item__list"]} ${
      isActive ? classes["activiteColor"] : ""
    } `;
  };
  return (
    <ul className={classes["color-item"]}>
      {Color.map((data) => (
        <li
          key={data.id}
          className={getColorItemClass(data)}
          onClick={() => handleChangeColor(data)}
        >
          {data.name}
        </li>
      ))}
    </ul>
  );
};

export default ColorList;
