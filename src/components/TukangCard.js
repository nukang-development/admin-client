import React from 'react'

export default function TukangCard (props) {
  const {tukang} = props

  return(
    <div className="card mb-3 ms-4 shadow" style={{maxWidth: "540px"}}>
      <div className="row">
        <div className="col-4">
            <img style={{width: '150px', height: '150px', paddingTop: 20, paddingInline:20, paddingBottom: 20}} className="rounded-circle" src={tukang.photo} alt="..."/>
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{tukang.name}</h5>
            <p className="card-text">{tukang.category}</p>
            <p className="card-text"><small className="text-muted">{tukang.domisili}</small></p>
            <button className='btn btn-danger'><i class='far fa-trash-alt'></i> Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}