import { useState } from 'react'
import './App.css' 

//components
import Header from './components/header/header'
import Navbar from './components/Navbar/Navbar'
import Modal from './components/Modal/Modal'
import BoardForm from './components/boardForm/BoardForm'

// custom hooks
import useArray from './hooks/useArray'
import useBoard from './hooks/useBoard'

function App() {

  const {
    isCreateBoard, 
    boardList, 
    createBoardClick, 
    createBoard} = useBoard()

  return (
    <div className='app--container'>
      <Header />
      <Navbar createBoardClick={createBoardClick} boards={boardList} />
      {isCreateBoard && 
        <Modal title={"Add New Board"}>
          <BoardForm createBoard={createBoard} />
        </Modal>
      }
    </div>
  )
}

export default App
