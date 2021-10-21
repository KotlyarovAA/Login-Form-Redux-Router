
import React, { useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import './Login.css';
import {useSelector} from "react-redux"


function Login() {

  const storeUserName = useSelector(state => state.userData.login)
  const storePassword = useSelector(state => state.userData.password)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameDirty, setUsernameDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [usernameError, setUsernameError] = useState("This field can't be empty");
  const [passwordError, setPasswordError] = useState("This field can't be empty");
  const [valid, setValid] = useState(false)

  const history = useHistory();

  useEffect (() => {
    if (usernameError || passwordError) {
      setValid(false)
    } else {
      setValid(true)
    }
  }, [usernameError, passwordError])

  const userHandler = (e) => {
    setUsername(e.target.value)
    if(e.target.value !== storeUserName) {
      setUsernameError('User is incorrect')
    } else {
      setUsernameError('')
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(e.target.value !== storePassword) {
      setPasswordError('password is incorrect')
    } else {
      setPasswordError('')
    }
  }
    
  const onBlurHandler = (e) => {
      switch(e.target.name) {
      case "username": 
        setUsernameDirty(true)
        break
      case "password":
        setPasswordDirty(true)
        break
      default: 
       break
    }
  }

  return (
    <div className="container">
      <form className="form">
        <h1>Login Form</h1>
        {(usernameDirty && usernameError) && <div style={{color: "red"}}>{usernameError}</div>}
        <input onChange={(e) => userHandler(e)} onBlur={(e) => onBlurHandler(e)} name="username" type="text" placeholder="Enter your login name" value={username}/>
        {(passwordDirty && passwordError) && <div style={{color: "red"}}>{passwordError}</div>}
        <input onChange={(e) => passwordHandler(e)} onBlur={(e) => onBlurHandler(e)} name="password" type="password" placeholder="Enter your password" value={password}/>
        <button disabled={!valid} type="submit" onClick={() => history.push('/profile')}>Submit</button>
      </form>
    </div>
  );
}

export default Login;