import "./Navbar.css"

import Logo from "../Logo/logo"
import Boards from "../boards/boards"

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <Logo />
                <Boards />
            </nav>
        </>
        
    )
}

export default Navbar