import { useEffect, useState } from "react";
import "./Buses.scss";
import Card from "../../Components/Card/Card";


const Buses = () => {

  const [buses, setBuses] = useState([])
  const from = localStorage.getItem('from') || ''
  const to = localStorage.getItem('to') || ''

  const accessToken = localStorage.getItem('token')

  useEffect(()=>{
    fetchFunction()
  },[])

  const fetchFunction = ()=>{
    fetch(`https://tame-puce-stingray-tam.cyclic.app/api/bus?pickup_address=${from}&&drop_address=${to}`, {
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


  return (
    <div className="mainContainer">
        <h3>Buses from {from} to {to}</h3>
        <div className="card">
             
            {
              buses.length==0?<p>No Buses Found</p>:<Card data={buses} />
            }
          
            
        </div>
    </div>
  )
}

export default Buses