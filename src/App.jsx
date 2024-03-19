import './App.css' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Layout from './pages/Layout'
import TasksDashboard from './components/tasksDashboard/TasksDashboard'

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
