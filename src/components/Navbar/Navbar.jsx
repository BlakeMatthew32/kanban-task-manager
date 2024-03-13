import "./Navbar.css"

import Logo from "../Logo/logo"
import Boards from "../boards/boards"

const Navbar = ({ boards, createBoardClick }) => {
    return (
        <>
            <nav className="navbar">
                <Logo />
                <Boards boardListTitles={boards}  createBoardClick={createBoardClick} />
            </nav>
        </>
        
    )
}

export default Navbar