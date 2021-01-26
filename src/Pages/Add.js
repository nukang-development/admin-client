import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Add () {
    const history = useHistory()
    const[name, setName] = useState('')
    const[domisili, setDomisili] = useState('')
    const[category, setCategory] = useState('')

    function fillName (e) {
        setName(e.target.value)
    }
    function fillDomisili (e) {
        setDomisili(e.target.value)
    }
    function fillCategory (e) {
        setCategory(e.target.value)
    }
    function submitNew(e) {
        e.preventDefault()
        console.log(name, domisili,category)
        history.push('/home')
    }

    return(
        <>
        <Navbar isAdd={true} />
        <div className='container shadow' style={{ marginTop: "5%", marginBottom: "5%", width: "50%"}}>
            <form style={{padding: 50}}>
                <div className="mb-3">
                    <label for="name" className="form-label">Nama</label>
                    <input onChange={fillName} type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="domisili" className="form-label">Domisili</label>
                    <input onChange={fillDomisili} type="text" className="form-control" id="domisili"/>
                </div>
                <div className="mb-3">
                    <label for="category" className="form-label">Category</label>
                    <select onChange={fillCategory} id="category" className="form-select">
                        <option disabled>-Choose Category-</option>
                        <option value='bangunan'>Tukang Bangunan</option>
                        <option value='listrik' >Tukang Listrik</option>
                        <option value='kebun'>Tukang Kebun</option>
                        <option value='lain'>Tukang Lain-lain</option>
                    </select>
                </div>
                <button onClick={submitNew} type="submit" className="btn btn-success mt-3"><i class='fas fa-plus-circle'></i> Add Tukang</button>
            </form>

        </div>
        </>
    )
}