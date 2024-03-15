import { useState } from 'react'
import './App.css' 

//components
import Header from './components/header/header'
import Navbar from './components/Navbar/Navbar'
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
      {isCreateBoard && <BoardForm createBoard={createBoard} />}
    </div>
  )
}

export default App
