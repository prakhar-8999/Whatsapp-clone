import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home'
import Page404 from './components/Page404'
import Chats from "./pages/Chats";
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
    

    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<Page404/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>  
            <Route path="/Chats" element={<Chats/>}/>              
          </Routes>
        </Router>
      </>
    )
}

export default App
