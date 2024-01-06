import { Route, Routes } from "react-router-dom"
import "./App.scss"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Buses from "./Pages/SearchedBuses/Buses"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/searchedBuses" element={<Buses />} />
      </Routes>
    </div>
  )
}

export default App