import { useState } from 'react';
import './Login.css';
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const navigate = useNavigate();

  const handleLogin =(e) => {

    e.preventDefault()

    const payload = {
      email,
      pass
    }

    fetch("https://aggressive-worm-coveralls.cyclic.app/api/user/login", {
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

  

  return (
    <div className="registration-container">
      <div className="form-container">
        <form className="registration-form" onSubmit={handleLogin}>
          <h2>Login Form</h2>
          <label htmlFor="name">E-mail:</label>
          <input
            type="email"
            placeholder='Enter E-mail'
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder='Enter a password'
            id="password"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login