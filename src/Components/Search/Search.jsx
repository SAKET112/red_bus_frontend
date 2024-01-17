import { useState } from "react";
import "./Search.scss";
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import {useNavigate} from 'react-router-dom'



const Search = () => {

  const navigate = useNavigate();

  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")

  const handleSubmit = () => {
    
    if(from.length==0 || to.length==0){
      alert("Please enter your Destination")
    } else{
      localStorage.setItem('from', from.toLowerCase());
      localStorage.setItem('to', to.toLowerCase());
      if(verifyToken) {
        navigate('/searchedBuses')
      } else{
        alert("Please Login First")
      }
    }
    
  }
  
  const verifyToken= localStorage.getItem('token')
  

  return (
    <div className="heroSection">
        {/* <img src="https://st.redbus.in/Images/HomeIndia/HeroImageV2_C.png" alt="" /> */}
        <h1> No. 1 Online Bus Ticket Booking Site</h1>
        <div className="input">
            <label> 
                <DirectionsBusFilledOutlinedIcon />
                <input type="text" placeholder="From" value={from} onChange={e => setFrom(e.target.value)} />
            </label>
            <label> 
                <DirectionsBusFilledOutlinedIcon />
                <input type="text" placeholder="To" value={to} onChange={e => setTo(e.target.value)}/>
            </label>
            <label> 
                <input type="Date" placeholder="Date" />
            </label>
            
            <button onClick={handleSubmit}>SEARCH BUSES</button>
        </div>
    </div>
  )
}

export default Search