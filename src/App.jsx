
import './App.css' 

//components
import Header from './components/header/header'
import Navbar from './components/Navbar/Navbar'
import Modal from './components/Modal/Modal'
import BoardForm from './components/boardForm/BoardForm'

// custom hooks
import useBoard from './hooks/useBoard'

function App() {

  const {
    modalOpen, 
    boardList, 
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
    </div>
  )
}

export default App
