import { useState } from "react";
import "./Search.scss";
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';


const Search = () => {

  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <div className="heroSection">
        <h1>India's No. 1 Online Bus Ticket Booking Site</h1>
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