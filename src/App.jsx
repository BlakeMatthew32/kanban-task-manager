import { useState } from 'react'
import './App.css' 

//components
import Header from './components/header/header'
import Navbar from './components/Navbar/Navbar'
import BoardForm from './components/boardForm/BoardForm'

// custom hooks
import useArray from './hooks/useArray'

function App() {

  const [isCreateBoard, setIsCreateBoard] = useState(false)
  const boardsList = useArray([])

  const createBoardClick = () => {
    setIsCreateBoard(true)
  }

  const createBoard = (board) => {
    boardsList.push(board)
    setIsCreateBoard(false)
  }

  return (
    <div className='app--container'>
      <Header />
      <Navbar createBoardClick={createBoardClick} boards={boardsList.value} />
      {isCreateBoard && <BoardForm createBoard={createBoard} />}
    </div>
  )
}

export default App
