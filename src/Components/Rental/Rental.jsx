import "./Rental.css";

const Rental = () => {
  return (
    <div className="rental-container">
      <div className="rental-text-content">
        <h2 className="rental-heading">
          NOW, <span>GET MORE THAN JUST BUS </span>TICKETS WITH REDBUS!
        </h2>
        <div className="rental-switch">
          <div className="Cab-rental">
            <img src="https://s2.rdbuz.com/web/images/homeV2/AboutUs/ryde.svg" alt="" />
            <h5>Cab/Bus Rental</h5>
          </div>

          <div className="Cab-rental">
            <img src="https://s1.rdbuz.com/web/images/homeV2/AboutUs/redRail.svg" alt="" />
            <h5>Train Tickets</h5>
          </div>
        </div>
        <p>Rent Cabs, Tempo Travellers & Buses with best drivers</p>
        <div className="rental-types">
          <div className="rentals">
            <img src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/ryde_car.svg" alt="" />
            <div className="rental-txt">Outstation</div>
          </div>
          <div className="rentals">
            <img src="https://s1.rdbuz.com/web/images/homeV2/AboutUs/ryde_car_hourly.svg" alt="" />
            <div className="rental-txt">Hourly Rental</div>
          </div>
          <div className="rentals">
            <img src="https://s2.rdbuz.com/web/images/homeV2/AboutUs/ryde_airport_transport.svg" alt="" />
            <div className="rental-txt">Airport transfers</div>
          </div>
          <button>Book Cab/Bus Rental</button>
        </div>
      </div>
      <div className="rental-image">
        <img src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/aboutUsImg.svg" alt="" />
      </div>
    </div>
  )
}

export default Rental