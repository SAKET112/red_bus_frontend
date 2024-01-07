import { useEffect, useState } from "react";
import "./Buses.scss";
import Card from "../../Components/Card/Card";


const Buses = () => {

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {

    const fromData = localStorage.getItem('from') || '';
    const toData = localStorage.getItem('to') || '';
    setFrom(fromData);
    setTo(toData);
  }, []);
 
  const buses = [
    {
        "_id": "659ad95a930d02fb0f4afd9d",
        "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
        "travel_name": "Fexi Ticket National travels..",
        "pickup_time": "11 AM",
        "duration": 18,
        "rating": 3,
        "pickup_address": "bangalore",
        "drop_time": "4 AM",
        "drop_address": "mumbai",
        "price": 3500,
        "seat_available": 22,
        "booked_seats": [],
        "__v": 0
    },
    {
        "_id": "659ada1b930d02fb0f4afd9f",
        "bus_name": "Bharat Benz A/C Sleeper(2 + 1)",
        "travel_name": "JGD Travels Pvt Ltd.",
        "pickup_time": "2 AM",
        "duration": 2,
        "rating": 3,
        "pickup_address": "durgapur",
        "drop_time": "4 AM",
        "drop_address": "howrah",
        "price": 449,
        "seat_available": 22,
        "booked_seats": [],
        "__v": 0
    },
    {
        "_id": "659ada4e930d02fb0f4afda1",
        "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
        "travel_name": "Hans Travels (I) Pvt Ltd.",
        "pickup_time": "3 AM",
        "duration": 2.5,
        "rating": 4.5,
        "pickup_address": "durgapur",
        "drop_time": "5:30 AM",
        "drop_address": "howrah",
        "price": 649,
        "seat_available": 22,
        "booked_seats": [],
        "__v": 0
    },
    {
        "_id": "659ada70930d02fb0f4afda3",
        "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
        "travel_name": "Hans Travels (I) Pvt Ltd.",
        "pickup_time": "6 AM",
        "duration": 3,
        "rating": 3.9,
        "pickup_address": "durgapur",
        "drop_time": "9 AM",
        "drop_address": "howrah",
        "price": 449,
        "seat_available": 22,
        "booked_seats": [],
        "__v": 0
    },
    {
        "_id": "659ada9e930d02fb0f4afda5",
        "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
        "travel_name": "Primo National travels.",
        "pickup_time": "11 AM",
        "duration": 3,
        "rating": 3.9,
        "pickup_address": "durgapur",
        "drop_time": "2 PM",
        "drop_address": "howrah",
        "price": 549,
        "seat_available": 22,
        "booked_seats": [],
        "__v": 0
    },
    {
        "_id": "659adab9930d02fb0f4afda7",
        "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
        "travel_name": "Primo National travels.",
        "pickup_time": "3 PM",
        "duration": 3,
        "rating": 3.5,
        "pickup_address": "durgapur",
        "drop_time": "6 PM",
        "drop_address": "howrah",
        "price": 549,
        "seat_available": 22,
        "booked_seats": [],
        "__v": 0
    },
    {
        "_id": "659adb2f930d02fb0f4afda9",
        "bus_name": "Bharat Benz A/C Sleeper(2 + 1)",
        "travel_name": "Primo National travels.",
        "pickup_time": "12 AM",
        "duration": 10,
        "rating": 4.5,
        "pickup_address": "new delhi",
        "drop_time": "10 AM",
        "drop_address": "ayodhya",
        "price": 800,
        "seat_available": 22,
        "booked_seats": [],
        "__v": 0
    },
    {
        "_id": "659adb73930d02fb0f4afdab",
        "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
        "travel_name": "Fexi Ticket National travels.",
        "pickup_time": "3 AM",
        "duration": 10,
        "rating": 4,
        "pickup_address": "new delhi",
        "drop_time": "1 PM",
        "drop_address": "ayodhya",
        "price": 1000,
        "seat_available": 22,
        "booked_seats": [],
        "__v": 0
    },
    {
        "_id": "659adbaf930d02fb0f4afdad",
        "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
        "travel_name": "Fexi Ticket National travels.",
        "pickup_time": "8 PM",
        "duration": 11,
        "rating": 4.2,
        "pickup_address": "new delhi",
        "drop_time": "7 AM",
        "drop_address": "ayodhya",
        "price": 949,
        "seat_available": 22,
        "booked_seats": [],
        "__v": 0
    },
    {
        "_id": "659adc24930d02fb0f4afdaf",
        "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
        "travel_name": "Fexi Ticket National travels.",
        "pickup_time": "5 AM",
        "duration": 11,
        "rating": 4,
        "pickup_address": "howrah",
        "drop_time": "4 PM",
        "drop_address": "banaras",
        "price": 1349,
        "seat_available": 22,
        "booked_seats": [],
        "__v": 0
    },
    {
        "_id": "659adc53930d02fb0f4afdb1",
        "bus_name": "Bharat Benz A/C Sleeper(2 + 1)",
        "travel_name": "Primo National travels.",
        "pickup_time": "8 AM",
        "duration": 11,
        "rating": 4.3,
        "pickup_address": "howrah",
        "drop_time": "7 PM",
        "drop_address": "banaras",
        "price": 1449,
        "seat_available": 22,
        "booked_seats": [],
        "__v": 0
    }
]

  let busFilter = buses.filter((item) => (
    from===item.pickup_address && to===item.drop_address
  ))

  console.log(busFilter)

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