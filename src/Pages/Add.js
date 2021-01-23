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
        <div className='container mt-5'>
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Nama</label>
                    <input onChange={fillName} type="text" class="form-control" id="name" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="domisili" class="form-label">Domisili</label>
                    <input onChange={fillDomisili} type="text" class="form-control" id="domisili"/>
                </div>
                <div class="mb-3">
                    <label for="category" class="form-label">Category</label>
                    <input onChange={fillCategory} type="text" class="form-control" id="category"/>
                </div>
                <button onClick={submitNew} type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
        </>
    )
}