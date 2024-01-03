import "./Login.scss"
import image from "../../assets/19199008.jpg"
import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();

    

  }

  return (
    <div className="loginContainer">
        <img src={image} alt="background image" />

        
        <div className="login">

          <h1>Login</h1>

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

            <button onClick={handleLogin}>Login</button>

            <div className="register">
              <span>New User <Link to="/register"> Click here</Link> to register</span>
            </div>

        </div>

    </div>
  )
}

export default Login