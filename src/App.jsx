import './App.css' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Layout from './pages/Layout'
import Header from './components/header/header'
import Navbar from './components/Navbar/Navbar'
import Modal from './components/Modal/Modal'
import TasksDashboard from './components/tasksDashboard/TasksDashboard'

// custom hooks
import useBoard from './hooks/useBoard'

function App() {

  
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TasksDashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
