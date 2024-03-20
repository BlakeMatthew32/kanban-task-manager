import './App.css' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Layout from './pages/Layout'
import TasksDashboard from './components/tasksDashboard/TasksDashboard'

//tanstack query 
import { 
  useQuery,
  useQueryClient,
  QueryClient, 
  QueryClientProvider
 } from '@tanstack/react-query'

 const queryClient = new QueryClient()

function App() {

  return (
    <BrowserRouter>

      <QueryClientProvider client={queryClient}>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TasksDashboard />}></Route>
          </Route>
        </Routes>

      </QueryClientProvider>
      
    </BrowserRouter>
    
  )
}

export default App
