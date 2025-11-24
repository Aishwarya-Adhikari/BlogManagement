
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

import Login from './pages/authentication/Login'
import Register from './pages/authentication/Register'

import Home from './pages/blog/Home'
import AddBlog from './pages/blog/AddBlog'  
import EditBlog from './pages/blog/EditBlog'

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/blog/add' element={<AddBlog/>}/>
        <Route path='/blog/edit' element={<EditBlog/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
