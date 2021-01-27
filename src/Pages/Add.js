import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'




export default function Add () {
    const history = useHistory()
    const[username, setuserName] = useState('')
    const[password, setpassword] = useState('')
    // const[domisili, setDomisili] = useState('')
    // const[category, setCategory] = useState('')
    // const [kecilDesc, setKecilDesc] = useState('')
    // const [kecilPrice, setKecilPrice] = useState(0)
    // const [sedangDesc, setSedangDesc] = useState('')
    // const [sedangPrice, setSedangPrice] = useState(0)
    // const [besarDesc, setBesarDesc] = useState('')
    // const [besarPrice, setBesarPrice] = useState(0)

    // function fillName (e) {
    //     setName(e.target.value)
    // }
    function fillUserName (e) {
        setuserName(e.target.value)
    }
    function fillpassword (e) {
        setpassword(e.target.value)
    }
    // function fillDomisili (e) {
    //     setDomisili(e.target.value)
    // }
    // function fillCategory (e) {
    //     setCategory(e.target.value)
    // }

    // function inputPorto (e) {
    //     console.log('>>>>',e.target.value, '<<<<')
    // }
    // function fillKecilDesc (e) {
    //     setKecilDesc(e.target.value)
    // }
    // function fillKecilPrice (e) {
    //     setKecilPrice(e.target.value)
    // }
    // function fillSedangDesc (e) {
    //     setSedangDesc(e.target.value)
    // }
    // function fillSedangPrice (e) {
    //     setSedangPrice(e.target.value)
    // }
    // function fillBesarDesc (e) {
    //     setBesarDesc(e.target.value)
    // }
    // function fillBesarPrice (e) {
    //     setBesarPrice(e.target.value)
    // }
    
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
            url: 'http://localhost:3000/admin/tukang',
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