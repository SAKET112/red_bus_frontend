import './search.css';
import { TbBusStop } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { useState } from 'react';
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
    <div className="bus-search-container">
      <div className="background-image">
        <div className="centered-text">India's No. 1 Online Bus Ticket Booking Site</div>
        <div className="input-container">
          <div className="input-group">
            <TbBusStop className='icon' />
            <input 
                type="text" 
                placeholder="From"
                value={from}
                onChange={(e) => setFrom(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <TbBusStop className='icon' />
            <input 
                type="text" 
                placeholder="To" 
                value={to}
                onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <div className="input-group">
            <MdDateRange className='icon' />
            <input type="date" />
          </div>
          <button type="button" onClick={handleSubmit}>Search Buses</button>
        </div>
      </div>
    </div>
  )
}

export default Search