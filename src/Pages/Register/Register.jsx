import "./Register.scss"
import image from "../../assets/19199008.jpg"
import { useState } from "react"
import { Link } from "react-router-dom";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [age, setAge] = useState("");

  const handleRegister = () => {

    const payload = {
      name,
      age,
      email,
      pass
    }

    fetch("https://tame-puce-stingray-tam.cyclic.app/api/user/register", {
            method: "POST",
            body : JSON.stringify(payload),
            headers : {
                "Content-type" : "application/json",
            }
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
  }

  return (
    <div className="registerContainer">
        <img src={image} alt="background image" />

        
        <div className="register">

          <h1>Register</h1>

          <label htmlFor="email">Name : 
                <input 
                  type="text" 
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
            </label>

            <label htmlFor="email">Age : 
                <input 
                  type="number"  
                  placeholder="Enter your Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
            </label>

            <label htmlFor="email">Email : 
                <input 
                  type="email" 
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            <label htmlFor="pass">Password :
              <input 
                type="password"  
                placeholder="Enter Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </label>

            <button onClick={handleRegister}>Register</button>

            <div className="login">
              <span>Already a User <Link to="/login"> Click here</Link> to Login</span>
            </div>

        </div>

    </div>
  )
}

export default Register