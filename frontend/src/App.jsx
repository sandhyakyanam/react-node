import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard'
import EditProfile from './Edit'

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path ='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/EditProfile' element={<EditProfile/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
