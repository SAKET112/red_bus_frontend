import { useState } from 'react';
import './Register.css';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [age, setAge] = useState("");

    const handleRegister = (e) => {

      e.preventDefault()

      const payload = {
        name,
        email,
        pass,
        age
      }

      console.log(payload);

      fetch("https://aggressive-worm-coveralls.cyclic.app/api/user/register", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type" : "application/json"
        }
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))
        
    }

  return (
    <div className="registration-container">
      <div className="form-container">
        <form className="registration-form">
          <h2>Registration Form</h2>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder='Enter Your Name'
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder='Enter Your E-mail'
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder='Create a Password'
            id="password"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <label htmlFor="age">Age:</label>
          <input
            type="number"
            placeholder='Enter Your Age'
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <button onClick={handleRegister}>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register