import Navbar from "./Components/Navbar/Navbar"
import {Routes, Route} from 'react-router-dom'
import Login from "./Pages/Login/Login";
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register'
import SearchedBuses from "./Pages/SearchedBuses/SearchedBuses";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/searchedBuses" element={<SearchedBuses />} />
      </Routes>
    </div>
  )
}

export default App