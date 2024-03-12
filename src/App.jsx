import './App.css'
import "./sidebar/sidebar.css"  

import Header from './header/header'
import Sidebar from './sidebar/sidebar'

function App() {

  return (
    <div className='app--container'>
      <Header />
      <Sidebar />
    </div>
  )
}

export default App
