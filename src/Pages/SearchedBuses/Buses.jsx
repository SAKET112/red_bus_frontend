import { useEffect, useState } from "react";
import "./Buses.scss";
import Card from "../../Components/Card/Card";


const Buses = () => {

  const [buses, setBuses] = useState([])
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const accessToken = localStorage.getItem('token')

  useEffect(() => {

    fetch("http://localhost:8800/api/bus", {
        method:"GET",
        headers: {
            "Authorization":  `${accessToken}`,
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => setBuses(res))
    .catch(err => console.log(err))


    const fromData = localStorage.getItem('from') || '';
    const toData = localStorage.getItem('to') || '';
    setFrom(fromData);
    setTo(toData);

  }, []);

//   console.log(buses);   

  let busFilter = buses.filter((item) => (
    from===item.pickup_address && to===item.drop_address
  ))

//   console.log(busFilter)

  return (
    <div className="mainContainer">
        <h3>Buses from {from} to {to}</h3>
        <div className="card">
            {
                busFilter.length==0? <div className="noBus"> <p>No Buses Found </p> </div> : <Card data={busFilter} />
            }
            
            
        </div>
    </div>
  )
}

export default Buses