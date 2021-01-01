import React from 'react'

const Service = (props) => {
    return (
        <div className="service">
            <img src={props.image} alt="" />
            <div className="service-title">{props.title}</div>
        </div>
    )
}

export default Service
