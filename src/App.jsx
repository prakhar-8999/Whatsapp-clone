import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home'
import Page404 from './components/Page404'
import Login from './pages/Login'

function App() {
    

    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<Page404/>}/>
            <Route path="/Login" element={<Login/>}/>                 
          </Routes>
        </Router>
      </>
    )
}

export default App
