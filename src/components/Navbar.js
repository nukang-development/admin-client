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
    <nav className="shadow navbar navbar-light" style={{backgroundColor: "#16a085", paddingBottom: 5}}>
      <div className="container-fluid">
        <h1 className="navbar-brand" style={{color: "#ffda79",marginLeft: "5%", fontSize: 30}}> <img src="https://i.imgur.com/m6fCmmW.png" style={{height:50}}></img>  Nukang CMS</h1>
        <form className="d-flex">
          {
              props.isAdd ? <button onClick={toHome} className="btn btn-outline-dark me-5" type="submit"><i class='fas fa-home'></i> Dashboard</button> :
              <button onClick={toAdd} className="btn btn-outline-dark btn-sm me-5" type="submit"><i class='fas fa-plus-circle'></i> Create</button>
          }
          
        </form>
      </div>
    </nav>
  )
}