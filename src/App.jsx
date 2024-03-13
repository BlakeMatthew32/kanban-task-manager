import './App.css' 

import Header from './components/header/header'
import Navbar from './components/Navbar/Navbar'
import useArray from './hooks/useArray'

function App() {

  const boards = useArray([1, 2, 3])

  const createBoardClick = (boardTitle) => {
    boards.push(boardTitle)
  }

  return (
    <div className='app--container'>
      <Header />
      <Navbar boards={boards} createBoardClick={createBoardClick} />
    </div>
  )
}

export default App
