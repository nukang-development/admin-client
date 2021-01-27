import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'





export default function TukangCard (props) {
    const {tukang} = props
    const {order} = props

    function deleteTukang(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete Tukang!'
          })
          .then((result) => {
            if (result.isConfirmed) {
             return  axios({
                method: 'delete',
                url: 'http://localhost:3000/admin/tukang/'+id,
                headers: {access_token: localStorage.getItem("access_token")}
             })
            }
          })        
        .then(_ => {
            props.refetch()
        })
        .catch(err => console.log(err))
    }
    console.log(order);
    if(tukang){
        return(
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row">
                    <div className="col-4">
                        <img style={{width: '150px', height: '150px', paddingTop: 20, paddingInline:20, paddingBottom: 20}} className="" src={tukang.avatar_img} alt="..."/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <div className= 'row'>
                                <h6 style={{ paddingRight: 0, width: "100px"}} className="col"> Name:</h6>
                                <h6 className="col-8 ps-4">{tukang.name}</h6>
                            </div>
                            <div className= 'row'>
                                <h6 style={{ paddingRight: 0, width: "100px"}} className="col"> Category:</h6>
                                <p className="card-text col-8 ps-4">{tukang.category}</p>
                            </div>
                            <div className= 'row'>
                                <h6 style={{ paddingRight: 0, width: "100px"}} className="col"> Username:</h6>
                                <p className="col-8 ps-4">{tukang.username}</p>
                            </div>
                            <div className= 'row'>
                                <h6 style={{ paddingRight: 0, width: "100px"}} className="col"> location:</h6>
                                <p className="col-8 ps-4">{tukang.location}</p>
                            </div>
                        <button onClick={() => deleteTukang(tukang._id)} className='btn btn-danger'><i class='far fa-trash-alt'></i> Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            
            )
    } else {
        return (
            <div className="card me-3 shadow" style={{maxWidth: "350px", borderRadius: 25, backgroundColor: '#dddddd'}}>
                <div className="row">
                    <div className="col">
                        <div className="card-body">
                            <div className= 'row'>
                                <h6 style={{ paddingRight: 0, width: "100px"}} className="col"> Customer:</h6>
                                <p className="col-8 ps-4 " style={{fontFamily: 'monospace', fontSize: 15}} >{order.userName}</p>
                            </div>
                            <div className= 'row'>
                                <h6 style={{ paddingRight: 0, width: "100px"}} className="col"> Tukang:</h6>
                                <p className="col-8 ps-4" style={{fontFamily: 'monospace', fontSize: 15}}>{order.tukangName}</p>
                            </div>
                            <div className= 'row'>
                                <h6 style={{ paddingRight: 0, width: "100px"}} className="col"> Contact:</h6>
                                <p className="col-8 ps-4" style={{fontFamily: 'monospace', fontSize: 15}}>{order.contact}</p>
                            </div>
                            <div >
                                <h6 style={{ paddingRight: 0, width: "100px"}} className="col"> Address:</h6>
                                <p className="col-8 ps-4" style={{fontFamily: 'monospace', fontSize: 15}}>{order.address}</p>
                            </div>
                            <div className= 'row'>
                                <h6 style={{ paddingRight: 0, width: "100px"}} className="col"> Status:</h6>
                                <p className="col-8 ps-4" style={{fontFamily: 'monospace', fontSize: 15}}>{order.status}</p>
                            </div>
                            <div >
                                <h6 style={{ paddingRight: 0, width: "100px"}} className="col"> Comment:</h6>
                                <p className="col-8 ps-4" style={{fontFamily: 'monospace', fontSize: 15}}>{order.comment}</p>
                            </div>
                            <div className= 'row'>
                                <h6 style={{ paddingRight: 0, width: "100px"}} className="col"> Schedule:</h6>
                                <p className="col-8 ps-4">{order.schedule}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}