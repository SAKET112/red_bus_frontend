import { useEffect, useState } from "react";
import "./Buses.scss";


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
      "_id": "618b660ca17ac455f40e10ef",
      "bus_name": "Bharat Benz A/C Sleeper(2 + 1)",
      "pick_up_time": "2",
      "duration": "3.30",
      "drop_time": "5.30",
      "rating": 1,
      "price": 425,
      "seats_available": 34,
      "seat_type": "single",
      "pickup_address": "durgapur",
      "drop_address": "howrah",
      "passengers": [],
      "travel_name": "JGD Travels Pvt Ltd.",
      "__v": 0
  },
  {
      "_id": "618b6662a17ac455f40e10f1",
      "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
      "pick_up_time": "2.30",
      "duration": "3.30",
      "drop_time": "6.00",
      "rating": 1.9,
      "price": 525,
      "seats_available": 34,
      "seat_type": "single",
      "pickup_address": "durgapur",
      "drop_address": "howrah",
      "passengers": [],
      "travel_name": "JGD Travels Pvt Ltd.",
      "__v": 0
  },
  {
      "_id": "618b67c223e97c3fcee6f2b6",
      "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
      "pick_up_time": "2.30",
      "duration": "3.30",
      "drop_time": "6.00",
      "rating": 1.9,
      "price": 525,
      "seats_available": 34,
      "seat_type": "single",
      "pickup_address": "durgapur",
      "drop_address": "howrah",
      "passengers": [],
      "sleeper": true,
      "ac": false,
      "nonac": false,
      "travel_name": "Hans Travels (I) Pvt Ltd.",
      "__v": 0
  },
  {
      "_id": "618b683d23e97c3fcee6f2b8",
      "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
      "pick_up_time": "5.30",
      "duration": "40.00",
      "drop_time": "9.25",
      "rating": 2.2,
      "price": 2600,
      "seats_available": 34,
      "seat_type": "single",
      "pickup_address": "mumbai",
      "drop_address": "new delhi",
      "passengers": [],
      "sleeper": false,
      "ac": true,
      "nonac": false,
      "travel_name": "Hans Travels (I) Pvt Ltd.",
      "__v": 0
  },
  {
      "_id": "618b691d23e97c3fcee6f2ba",
      "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
      "pick_up_time": "16.30",
      "duration": "44.00",
      "drop_time": "12.25",
      "rating": 2.7,
      "price": 3000,
      "seats_available": 34,
      "seat_type": "single",
      "pickup_address": "mumbai",
      "drop_address": "new delhi",
      "passengers": [],
      "sleeper": false,
      "ac": true,
      "nonac": false,
      "travel_name": "Hans Travels (I) Pvt Ltd.",
      "__v": 0
  },
  {
      "_id": "618b69e223e97c3fcee6f2bc",
      "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
      "pick_up_time": 17.00,
      "duration": 21.00,
      "drop_time": 13.30,
      "rating": 3.9,
      "price": 1524,
      "seats_available": 34,
      "seat_type": "single",
      "pickup_address": "bangalore",
      "drop_address": "mumbai",
      "passengers": [],
      "sleeper": false,
      "ac": false,
      "nonac": true,
      "travel_name": "Primo National travels.",
      "__v": 0
  },
  {
      "_id": "618b6a2423e97c3fcee6f2be",
      "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
      "pick_up_time":14.10,
      "duration": 21.00,
      "drop_time": 11.30,
      "rating": 3.9,
      "price": 1524,
      "seats_available": 34,
      "seat_type": "single",
      "pickup_address": "bangalore",
      "drop_address": "mumbai",
      "passengers": [],
      "sleeper": true,
      "ac": false,
      "nonac": false,
      "travel_name": "Fexi Ticket National travels.",
      "__v": 0
  },
  {
      "_id": "618bca61b4d9551885665441",
      "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
      "pick_up_time": 14.10,
      "duration": 21.00,
      "drop_time": 11.30,
      "rating": 3.9,
      "price": 1524,
      "seats_available": 34,
      "seat_type": "single",
      "pickup_address": "bangalore",
      "drop_address": "mumbai",
      "passengers": [],
      "sleeper": true,
      "ac": false,
      "nonac": false,
      "travel_name": "Fexi Ticket National travels.",
      "__v": 0
  },
  {
      "_id": "618d192d3ddf348b056907cf",
      "bus_name": "Bharat Benz A/C Sleeper(2 + 2)",
      "pick_up_time": 14.1,
      "duration": 21,
      "drop_time": 11.3,
      "rating": 3.9,
      "price": 1524,
      "seats_available": 34,
      "seat_type": "single",
      "pickup_address": "bangalore",
      "drop_address": "mumbai",
      "passengers": [],
      "sleeper": true,
      "ac": false,
      "nonac": false,
      "travel_name": "Fexi Ticket National travels.",
      "__v": 0
  },
  {
      "_id": "618d192d3ddf348b056907cf",
      "bus_name": "Pavan Benz A/C Sleeper(2 + 2)",
      "pick_up_time": 18.1,
      "duration": 21,
      "drop_time": 24.3,
      "rating": 3.9,
      "price": 15240,
      "seats_available": 34,
      "seat_type": "single",
      "pickup_address": "bangalore",
      "drop_address": "mumbai",
      "passengers": [],
      "seater": true,
      "sleeper": false,
      "ac": false,
      "nonac": false,
      "travel_name": "Fexi Ticket National travels.",
      "wifi": false,
      "waterbottle": true,
      "charging_point": false,
      "Blankets": true,
      "Movie": false,
      "toilet": true,
      "__v": 0
  },
  {
      "_id": "618d192d3ddf348b056907cf",
      "bus_name": "Pavan Paapu RED A/C Sleeper(2 + 2)",
      "pick_up_time": 5,
      "duration": 21,
      "drop_time": 18.3,
      "rating": 3.9,
      "price": 152400,
      "seats_available": 34,
      "seat_type": "single",
      "pickup_address": "bangalore",
      "drop_address": "mumbai",
      "passengers": [],
      "seater": true,
      "sleeper": false,
      "ac": false,
      "nonac": false,
      "travel_name": "Fexi Ticket National travels.",
      "wifi": true,
      "waterbottle": false,
      "charging_point": true,
      "Blankets": false,
      "Movie": true,
      "toilet": false,
      "__v": 0
  }
  ]

  let busFilter =buses.filter((item) => (
    from===item.pickup_address && to===item.drop_address
  ))

  console.log(busFilter)

  return (
    <div className="mainContainer">
        
    </div>
  )
}

export default Buses