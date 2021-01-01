import React from 'react'
import Portrait from '../../assets/portrait.svg'
import Maternity from '../../assets/maternity.svg'
import Wedding from '../../assets/couple.svg'
import Service from './Service'
import './services.css'

const ServicesCollection = () => {
    const services = [
        { title: 'Wedding', image: Wedding },
        { title: 'Maternity', image: Maternity },
        { title: 'Portrait', image: Portrait },
    ]
    return (
        <>
            <h1 className="service-title">Our services</h1>
            <div className="service-collection">
                {
                    services.map(service => {
                        return <Service {...service} />
                    })
                }
            </div>
        </>
    )
}

export default ServicesCollection
