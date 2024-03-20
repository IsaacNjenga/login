import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';

function Signup(){

  const [signup,setSignUp] = useState(
    {
      username:'',
      password:'',
    }
  )
  const [success,setSuccess] = useState(false)
  const [usernameMessage, setUsernameMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) =>
  {
    setSignUp((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  function capitalizeFirstLetter(string)
  {
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  const handleSubmit = async () =>
  {
    try
    {
      await axios.post(`http://localhost:3001/login`, signup);
      setSignUp({
        username: '',
        password: ''
      })
        setSuccess(true)

        const capitalizedString = capitalizeFirstLetter(signup.username)

        setUsernameMessage(`Welcome @${capitalizedString}`)
    }
    catch(err)
    {
      console.log("Error signing up:",err)
      setSuccess(false)
      setUsernameMessage('');
    }
  }

  const handleClear = (e) =>
  {
    setSignUp({
      username: '',
      password: '',})
      setSuccess(false)
  }


  return (
    <div>
      Sign up!
        <form>
        Username:
        <input type="text" value={signup.username} onChange={handleChange} name="username" />
        <br />
        Password:
        <input type="password" value={signup.password} onChange={handleChange} name="password" />
        <br />
        <button type="button" onClick={handleSubmit}>Enter</button>
        
        <button type="button" onClick={handleClear}>Clear</button>
        {
          success && <div>
            <p style = {{color:'green'}}>Sign Up successful!</p>
            <p>{usernameMessage}</p>
          </div>
        }
          </form>
    </div>
  )
}

export default Signup