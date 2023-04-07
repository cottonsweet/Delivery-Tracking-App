// CSS
import classes from "./Button.module.css"

interface Props {
    title: string,
    className?: string,
    onClick?: () => void
}

const Button = (props: Props) => {
    return (
        <button onClick={props.onClick} className={classes[props.className || ""]}>{props.title}</button>
    )
}

export default Button