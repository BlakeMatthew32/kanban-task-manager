import "./Navbar.css"

import Logo from "../Logo/logo"
import Boards from "../boards/boards"

const Navbar = ({ boards, createBoardClick }) => {
    return (
        <>
            <nav className="navbar">
                <Logo />
                <Boards createBoardClick={createBoardClick} boards={boards} />
            </nav>
        </>
        
    )
}

export default Navbar