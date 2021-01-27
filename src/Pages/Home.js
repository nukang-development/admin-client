import React, {useEffect, useState} from 'react'
import TukangCard from '../components/TukangCard'
import Navbar from '../components/Navbar'
import axios from 'axios'

export default function Home () {

    const [tukangs, setTukangs] = useState([])

    useEffect(() => {
        console.log('render')
        axios({
            method: 'GET',
            url: 'http://54.255.251.4/admin/all-tukang',
            headers: {access_token: localStorage.getItem("access_token")}
        })
        .then(({data}) => {
            setTukangs(data)
        })
        .catch(err => console.log(err))
    },[])

    function refetch () {
        axios({
            method: 'GET',
            url: 'http://54.255.251.4/admin/all-tukang',
            headers: {access_token: localStorage.getItem("access_token")}
        })
        .then(({data}) => {
            setTukangs(data)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row ">

                {
                    tukangs.map((tukang, index) => {
                        return <TukangCard key={index} tukang={tukang} refetch={refetch} />
                    })
                }
                </div>
            </div>


        </>
    )
}