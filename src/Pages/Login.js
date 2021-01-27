import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import gambar from '../assets/login.svg'

import axios from 'axios'

export default function Login () {
    const history = useHistory()
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    function insertemail(e){
        setemail(e.target.value)
    }
    function inserPassword (e) {
        setPassword(e.target.value)
    } 

    function submitLogin (e) {
        e.preventDefault()

        axios({
            method: "POST",
            url: 'http://54.255.251.4/admin/login',
            data: {email, password}
        })
        .then(({data}) => {

            localStorage.setItem('access_token', data.access_token)
            history.push('/home')
        })
        .catch(err => {
            console.log(err)
        })

    }

    return (
        <div className="container-fluid" style={{display: "flex", justifyContent:"space-evenly", alignItems: "center", marginTop: "10%", marginBottom: "5%"}} >
             <div>
                <img src={gambar} alt={'...'} style={{width: "400px", position: "relative"}}/>
            </div>
            <div style={{backgroundColor: '#f2efea', width: 400, borderRadius: 40}}>
            <form style={{padding: 50}}>
                <div className="form-group mb-3">
                    <label  for="email" className="form-label">Email</label>
                    <input onChange={insertemail} type="text" className="form-control" id="email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input onChange={inserPassword} type="password" className="form-control" id="password"/>
                </div>
                <div className="d-grid gap-2 mt-4">
                <button onClick={submitLogin} type="submit" className="btn btn-success"><i class='fas fa-sign-in-alt'></i> Login</button>
                </div>
            </form>
            </div>
        </div>
    )
}