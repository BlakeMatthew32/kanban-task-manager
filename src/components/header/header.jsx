import "./header.css"

import Logo from "../Logo/logo"

const Header = () => {
    return (
        <header className="Header">
            {/* h2 is place holder that will be set depending on current board */}
            <h2>Platform Launch</h2> 
            <button className="header__button">+ Add new task</button>
        </header>
    )
}

export default Header