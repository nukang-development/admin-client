import React, {useEffect, useState} from 'react'
import TukangCard from '../components/TukangCard'
import Navbar from '../components/Navbar'
import axios from 'axios'





export default function Order () {

    const [orderList, setOrderList] = useState([
        
    ])

    

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://54.255.251.4/admin/order',
            headers: {access_token: localStorage.getItem("access_token")}
        })
        .then(({data}) => {
            setOrderList(data)
        })
    })

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row ">


                {
                    orderList.map((order, index) => {
                        return <TukangCard key={index} order={order} />
                    })
                }
                </div>
            </div>


        </>
    )
}