import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import gambar from '../assets/login.svg'

export default function Login () {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function insertUsername(e){
      setUsername(e.target.value)
  }

  function inserPassword (e) {
      setPassword(e.target.value)
  } 

  function submitLogin (e) {
      e.preventDefault()
      console.log(username, password)
      history.push('/home')
  }

  return (
    <div className="container-fluid" style={{display: "flex", justifyContent:"space-evenly", alignItems: "center", marginTop: "10%", marginBottom: "5%"}} >
      <div>
        <img src={gambar} style={{width: "400px", position: "relative"}}/>
      </div>
      <div style={{backgroundColor: '#f2efea', width: 400, borderRadius: 40}}>
        <form style={{padding: 50}}>
          <div className="form-group mb-3">
            <label for="username">Username</label>
            <input onChange={insertUsername} placeholder="input username" type="text" className="form-control" id="username" aria-describedby="emailHelp"/>
          </div>
          <div className="form-group mb-3">
            <label for="password">Password</label>
            <input onChange={inserPassword} placeholder="input password" type="password" className="form-control" id="password"/>
          </div>
          <div className="d-grid gap-2 mt-4">
            <button onClick={submitLogin} type="submit" className="btn btn-success"><i class='fas fa-sign-in-alt'></i> Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}