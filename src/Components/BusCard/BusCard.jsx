import { useState } from "react";
import { FaWifi } from "react-icons/fa";
import { FaRestroom } from "react-icons/fa";
import { MdAcUnit } from "react-icons/md";
import Seat from "../Seat/Seat";
import './BusCard.css'


const BusCard = (data) => {

    const [showSeat,setShowSeat] = useState('')
    const [showSeatBool,setShowSeatBool] = useState(false);


    const handleViewSeats = (e) => {
        setShowSeat(e)
        setShowSeatBool(false)
    }
    const hideSeat = ()=>{
        setShowSeat("")
    }
    console.log(showSeat)
    console.log(data);

  return (
    <div>
    {
        data?.data.map((item)=>{
            return (
                <div className="mainCardContainer" key={item.id}>
                    <div className="upperCard">
                        <div className="busDetails">
                            <p className="travelName">
                                {item?.travel_name}
                            </p>
                            <p className="busName">
                                {item?.bus_name}
                            </p>
                            <div className="features">
                                <FaWifi className="icon" />
                                <FaRestroom className="icon" />
                                <MdAcUnit className="icon" />
                            </div>
                        </div>
                        <div className="pickUp">
                            <p className="pickUpTime"> {item?.pickup_time} </p>
                            <p className="pickUpAddress"> From : {item?.pickup_address}</p>
                        </div>
                        <div  className="totalTime">
                            <p>{item?.duration} Hrs</p>
                        </div>
                        <div className="drop">
                            <p className="dropTime">{item?.drop_time}</p>
                            <p className="dropAddress"> To : {item?.drop_address}</p>
                        </div>
                        <div  className="rating">
                            <p> {item?.rating}  </p>
                            <p>⭐</p>
                        </div>
                        <div className="price">
                            <p className="pricing">Pricing Starts From</p>
                            <span className="basePrice">₹ {item?.price}</span>
                        </div>
                        <div className="seats">
                            <span>{item?.seat_available}</span>
                            <p>seats</p>
                            <p>available</p>
                        </div>
                    </div>

                    <div className="lowerCard">
                        <p className="amenities"> Amenity | Boarding and Dropping Point | Reviews | Booking Policies </p>
                       {showSeat == item?._id? <button onClick={hideSeat}>Hide Seats</button>:<button onClick={()=>handleViewSeats(item?._id)}>View Seats</button>}
                    </div>
                    {showSeat == item?._id?<div className="seatContainer">
                        <Seat />
                    </div>:null}
            </div>
            )
        })
    }
   </div>
  )
}

export default BusCard