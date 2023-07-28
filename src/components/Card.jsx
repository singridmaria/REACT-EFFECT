import React from 'react'

export const Card = (props) => {
  return (
   
    <div className="col">
    <div className="card h-100">
      <img src={props.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  )
}
