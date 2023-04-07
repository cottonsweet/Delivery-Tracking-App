// CSS
import classes from "./Header.module.css"


// Components
import Title from "./Title"
import ColorList from "./Color/ColorList"

const Header = () => {
    return (
        <div className={classes['header-wrap']}>
            <div>
                <Title title="택배조회 시스템" />
            </div>

            <div className={classes["header-change-color"]}>
                <Title title="색상변경 :" />
                <ColorList />
            </div>
        </div>
    )
}

export default Header