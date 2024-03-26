import './App.css' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Layout from './pages/Layout'
import TasksDashboard from './components/tasksDashboard/TasksDashboard'
import TaskBoard from './pages/TaskBoard/TaskBoard'

//tanstack query 
import { 
  QueryClient, 
  QueryClientProvider
 } from '@tanstack/react-query'

import { addBoard, getBoards } from '../firebaseAPI'


const queryClient = new QueryClient()
queryClient.setQueryDefaults(['boards'], { queryFn: getBoards })

queryClient.setMutationDefaults(['createBoard'], 
  { mutationFn: addBoard, 
    onSuccess: data => {
      queryClient.invalidateQueries(["boards"])
    }
})

function App() {

  return (
    <BrowserRouter>

      <QueryClientProvider client={queryClient}>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TasksDashboard />} />
            <Route path='boards/:id' element={<TaskBoard />} />
          </Route>
        </Routes>

      </QueryClientProvider>
      
    </BrowserRouter>
    
  )
}

export default App
