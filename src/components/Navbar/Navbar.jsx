import "./Navbar.css"

import Logo from "../Logo/logo"
import Boards from "../boards/boards"

const Navbar = ({ toggleModal }) => {
    return (
        <>
            <nav className="navbar">
                <Logo />
                <Boards toggleModal={toggleModal}/>
            </nav>
        </>
        
    )
}

export default Navbar