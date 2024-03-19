
import { Outlet } from "react-router-dom"

//components
import Modal from "../components/Modal/Modal"
import Navbar from "../components/Navbar/Navbar"
import Header from "../components/header/header"
import BoardForm from '../components/boardForm/BoardForm'

// custom hooks
import useBoard from "../hooks/useBoard"

const Layout = () => {

    const {
        modalOpen, 
        boardList,
        boardListEmpty,
        createBoardClick, 
        createBoard,
        toggleModal
    } = useBoard()

    return (
    <div className='app--container'>
        <Header />
        <Navbar createBoardClick={createBoardClick} boards={boardList} />
        {modalOpen && 
        <Modal title={"Add New Board"} toggle={toggleModal}>
            <BoardForm createBoard={createBoard} />
        </Modal>
        }
        <Outlet context={{boardListEmpty, createBoardClick}}/>
    </div>
    )
}

export default Layout