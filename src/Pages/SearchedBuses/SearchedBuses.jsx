import { useState } from 'react'
import './SearchedBuses.css'
import { useEffect } from 'react'
import BusCard from '../../Components/BusCard/BusCard'

const SearchedBuses = () => {

    const [buses, setBuses] = useState([])
    const from = localStorage.getItem('from') || ''
    const to = localStorage.getItem('to') || ''

    const accessToken = localStorage.getItem('token')

    const fetchFunction = ()=>{
        fetch(`https://aggressive-worm-coveralls.cyclic.app/api/bus?pickup_address=${from}&&drop_address=${to}`, {
          method:"GET",
          headers: {
              "Authorization":  `${accessToken}`,
              "Content-type": "application/json"
          }
       })
        .then(res => res.json())
        .then(res => setBuses(res))
        .catch(err => console.log(err))
      
    }
    
    console.log(buses.length);

    useEffect(()=>{
        fetchFunction()
      }, [])

  return (
    <div className="mainContainer">
        <h3>Buses from {from} to {to}</h3>
        <div className="card">
             
            {
              buses.length==0?<p>No Buses Found</p>:<BusCard data={buses} />
            }
          
            
        </div>
    </div>
  )
}

export default SearchedBuses