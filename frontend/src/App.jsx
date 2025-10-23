import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './SignUp'

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
