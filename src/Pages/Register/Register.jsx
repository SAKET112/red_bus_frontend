import "./Register.scss"
import image from "../../assets/19199008.jpg"
import { useState } from "react"
import { Link } from "react-router-dom";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState();

  const handleRegister =(e) => {
    e.preventDefault();
  }

  return (
    <div className="registerContainer">
        <img src={image} alt="background image" />

        
        <div className="register">

          <h1>Register</h1>

          <label htmlFor="email">Name : 
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Enter your Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
            </label>

            <label htmlFor="email">Age : 
                <input 
                  type="number" 
                  name="age" 
                  id="age" 
                  placeholder="Enter your Age"
                  value={age}
                  onChange={e => setAge(e.target.value)}
                />
            </label>

            <label htmlFor="email">Email : 
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Enter your Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
            </label>

            <label htmlFor="pass">Password :
              <input 
                type="password" 
                name="pass" 
                id="pass" 
                placeholder="Enter Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
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