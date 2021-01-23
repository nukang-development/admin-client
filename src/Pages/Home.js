import React, {useState} from 'react'
import TukangCard from '../components/TukangCard'
import Navbar from '../components/Navbar'





export default function Home () {

    const [tukangs] = useState([
        {
            name: 'C.Ronaldo',
            domisili: 'Real Hacktiv',
            category: 'Tukang Bangunan',
            photo: 'https://cdn.pixabay.com/photo/2017/09/14/12/19/building-2748840_960_720.jpg'
        },
        {
            name: 'L.Messi',
            domisili: 'Hacktivlona',
            category: 'Tukang Listrik',
            photo: 'https://cdn.pixabay.com/photo/2017/09/16/14/33/electrician-2755679_960_720.jpg'
        },
        {
            name: 'Bambang Pamungkas',
            domisili: 'Jakarta',
            category: 'Tukang Repairing',
            photo: 'https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg'
        }
    ])


    return (
        <>
            <Navbar />
            <div className="container mt-5">

                {
                    tukangs.map((tukang, index) => {
                        return <TukangCard key={index} tukang={tukang} />
                    })
                }
            </div>


        </>
    )
}