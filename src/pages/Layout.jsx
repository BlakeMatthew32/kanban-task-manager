import Modal from "../components/Modal/Modal"
import Navbar from "../components/Navbar/Navbar"
import Header from "../components/header/header"
import BoardForm from '../components/boardForm/BoardForm'
import TasksDashboard from "../components/tasksDashboard/TasksDashboard"
import useBoard from "../hooks/useBoard"
import { Outlet } from "react-router-dom"



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
        {/* <TasksDashboard boardListEmpty={boardListEmpty} createBoardClick={createBoardClick} /> */}
    </div>
    )
}

export default Layout