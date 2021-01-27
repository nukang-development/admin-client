import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'

export default function Add () {
    const history = useHistory()
    const[username, setuserName] = useState('')
    const[password, setpassword] = useState('')
  
    function fillUserName (e) {
        setuserName(e.target.value)
    }
    function fillpassword (e) {
        setpassword(e.target.value)
    }
   
    
    function submitNew(e){
        e.preventDefault()

        let payload = {
            username: username,
            password: password,
          
        }
    
    console.log(payload)
    console.log(localStorage.getItem("access_token"));
        axios({
            method: 'POST',
            url: 'http://54.255.251.4/admin/tukang',
            data: payload,
            headers: {access_token: localStorage.getItem("access_token")}
        })
        .then(data => {
            console.log(data, 'yg di add')
            history.push('/home')
        })
        .catch(err => console.log(err))

    }

    return(
        <>
        <Navbar isAdd={true} />
        <div className='container mt-5'>
            <form style={{padding: 50}} onSubmit={submitNew} encType="multipart/form-data">
                <div className="mb-3">
                    <label for="name" className="form-label">Username</label>
                    <input onChange={fillUserName} type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="name" className="form-label">Password</label>
                    <input onChange={fillpassword} type="password" className="form-control" id="name" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" className="btn btn-success mt-3"><i class='fas fa-plus-circle'></i> Add Tukang</button>
            </form>

        </div>
        </>
    )
}