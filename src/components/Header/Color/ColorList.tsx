
// Data
import Color from "./Color"

// CSS
import classes from "./ColorList.module.css"


const ColorList = () => {
    return (
        <ul className={classes["color-item"]}>
            {Color.map((data) => (
                <li key={data.id} className={classes["color-item__list"]}>{data.name}</li>
            ))}
        </ul>
    )
}

export default ColorList