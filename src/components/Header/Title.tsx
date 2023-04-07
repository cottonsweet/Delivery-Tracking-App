// CSS
import classes from "./Title.module.css"

interface Props {
    title: string
    className?: string
}

const Title = (props: Props) => {
    return (
        <div className={classes[props.className || ""]}>{props.title}</div>
    )
}

export default Title