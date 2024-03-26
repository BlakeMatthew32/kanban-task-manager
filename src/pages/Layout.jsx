
import { Outlet } from "react-router-dom"

//components
import Modal from "../components/Modal/Modal"
import Navbar from "../components/Navbar/Navbar"
import Header from "../components/header/header"
import BoardForm from '../components/boardForm/BoardForm'

// custom hooks
import useToggle from "../hooks/useToggle"

const Layout = () => {

    const [modalOpen, toggleModal] = useToggle()

    return (
    <div className='app--container'>
        <Header />
        <Navbar toggleModal={toggleModal}/>
        {modalOpen && 
        <Modal title={"Add New Board"} toggle={toggleModal}>
            <BoardForm toggleModal={toggleModal} />
        </Modal>
        }
        <Outlet context={{ toggleModal }}/>
    </div>
    )
}

export default Layout