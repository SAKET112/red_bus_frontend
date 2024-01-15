import "./Login.scss"
import image from "../../assets/19199008.jpg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")


  //LOGGING IN USER
  const handleLogin =() => {

    const payload = {
      email,
      pass
    }

    fetch("https://tame-puce-stingray-tam.cyclic.app/api/user/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers : {
        "Content-type": "application/json"
      }
    })
    .then(res => res.json())
    .then(res => {
      if(res.msg == "LoggedIn"){
        localStorage.setItem("token", res.token)
        navigate('/')
        window.location.reload();
      }else{
        alert("Wrong Credentials")
      }
      
    })
    .catch(err => console.log(err))
    

  }

  //redirecting to home page


  return (
    <div className="loginContainer">
        <img src={image} alt="background image" />

        
        <div className="login">

          <h1>Login</h1>

            <label htmlFor="email">Email : 
                <input 
                  type="email"  
                  placeholder="Enter your Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
            </label>

            <label htmlFor="pass">Password :
              <input 
                type="password" 
                placeholder="Enter Password"
                value={pass}
                onChange={e => setPass(e.target.value)}
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