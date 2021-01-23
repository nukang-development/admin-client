import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

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
        <div className="container shadow" style={{backgroundColor: '#f2efea', marginTop: '15%', width: 500, borderRadius: 40}}>
            <form style={{padding: 50}}>
                <div className="mb-3">
                    <label  for="username" className="form-label">Username</label>
                    <input onChange={insertUsername} type="text" className="form-control" id="username" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input onChange={inserPassword} type="password" className="form-control" id="password"/>
                </div>
                <button onClick={submitLogin} type="submit" className="btn btn-warning">Submit</button>
            </form>
        </div>
    )
}