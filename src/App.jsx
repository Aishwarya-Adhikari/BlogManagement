
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/blog/Home'
import Login from './pages/authentication/Login'
import Register from './pages/authentication/Register'
import AddBlog from './pages/blog/AddBlog'

function App() {
  

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addblog' element={<AddBlog/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
