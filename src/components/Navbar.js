import React  from 'react'
import {useHistory} from 'react-router-dom'



export default function Navbar (props) {
    const history = useHistory()

    function toAdd (e) {
        e.preventDefault()
            history.push('/add')
    }
    function toHome (e) {
        e.preventDefault()
        history.push('/home')
    }

    return (
        <nav className="shadow navbar navbar-light" style={{backgroundColor: "#cbbcb1"}}>
                <div className="container-fluid">
                    <h1 className="navbar-brand">Admin Panel</h1>
                    <form className="d-flex">
                        {
                            props.isAdd ? <button onClick={toHome} className="btn btn-dark" type="submit">Back</button> :
                            <button onClick={toAdd} className="btn btn-outline-dark" type="submit">Add Tukang</button>
                        }
                    
                    </form>
                </div>
            </nav>
    )
}