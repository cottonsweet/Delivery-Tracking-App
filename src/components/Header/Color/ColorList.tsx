
// Data
import Color from "./Color"

// CSS
import classes from "./ColorList.module.css"

interface Props {
    handleClickColorCode: (color: string) => void,
}

const ColorList = (props: Props) => {

    return (
        <ul className={classes["color-item"]}>
            {Color.map((data) => (
                <li key={data.id} className={classes["color-item__list"]} onClick={() => props.handleClickColorCode(data.color)}>{data.name}</li>
            ))}
        </ul>
    )
}

export default ColorList