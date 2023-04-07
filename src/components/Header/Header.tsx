// CSS
import classes from "./Header.module.css"


// Components
import Title from "./Title"
import ColorList from "./Color/ColorList"

interface Props {
    handleClickColorCode: (color: string) => void
    colorCode: string,
}

const Header = (props: Props) => {
    return (
        <div className={classes['header-wrap']} style={{ backgroundColor: props.colorCode }}>
            <div>
                <Title title="택배조회 시스템" className="header-title" />
            </div>

            <div className={classes["header-change-color"]}>
                <Title className="header-title" title="색상변경 :" />
                <ColorList handleClickColorCode={props.handleClickColorCode} colorCode={props.colorCode} />
            </div>
        </div>
    )
}

export default Header