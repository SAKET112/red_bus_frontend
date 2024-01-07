import { useState } from "react";
import "./Seat.scss";
import BusSeat from "../BusSeat/BusSeat";


const Seat = () => {


  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [phone, setPhone] = useState("")

  const handleSeatClick = (seatNumber) => {

    // Toggle the selected state of the seat

    setSelectedSeats((prevSelectedSeats) => {

      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }

    });

  };

  const saveData = ()=>{
      console.log(selectedSeats)

      if(selectedSeats.length==0){
        alert("Please Select a seat to continue")
      } else{
        setShowSidebar(true);
      }

  }

  const submitData = async() => {

    const payload = {
      name: name,
      age: age,
      gender: gender,
      phoneNo: phone,
      seats: selectedSeats
    }

    console.log(payload);

       await fetch("http://localhost:8800/api/passenger",{
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json"
          }
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    // Handle submission of data (e.g., send to server)
    
    // Reset selected seats and close the sidebar
    setSelectedSeats([]);
    setShowSidebar(false);
  };

  

  // Function to update form data
  

  const closeSidebar = () => {
    setShowSidebar(false);
  };


  const renderSeats = () => {
    const rows = 5; // Number of rows
    const cols = 6; // Number of columns

    const seats = [];

    for (let row = 1; row <= rows; row++) {
      for (let col = 1; col <= cols; col++) {
        const seatNumber = `${row}${String.fromCharCode(64 + col)}`;
        const isSeatSelected = selectedSeats.includes(seatNumber);

        seats.push(
          <BusSeat
            key={seatNumber}
            seatNumber={seatNumber}
            isSelected={isSeatSelected}
            onClick={handleSeatClick}
          />
        );
      }
    }

    return seats;
  };

  // Styling for the component
  const seatLayoutStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  };

  const selectedSeatsStyle = {
    marginTop: "20px",
  };

  const sidebarStyle = {
    
  };

  return (
    <>
      <div className="bus-seat-layout" style={seatLayoutStyle}>
        <div className="seats">{renderSeats()}</div>
        <div className="selected-seats"  style={selectedSeatsStyle}>
          <p>Selected Seats: {selectedSeats.join(', ')}</p>
          <button onClick={saveData}>Add Passenger Details</button>
        </div>
      </div>

      {showSidebar && (
        <div className="sidebar" style={sidebarStyle}>
          <h2>Passenger Details</h2>
            <label>
                Name :
                  <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
            </label>
            <label>Age :
              <input
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>

            <label>Gender :
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              
              </select>
            </label>

            <label>Phone Number :
              <input
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>

            <p>Selected Seat : <span>{selectedSeats.join(", ")}</span></p>

            <div className="buttons">
              <button className="submitData" onClick={submitData}>SUBMIT</button>
              <button className="cancelData" onClick={closeSidebar}>CANCEL</button>
            </div>

        </div>
      )}
      </>
  )
}

export default Seat