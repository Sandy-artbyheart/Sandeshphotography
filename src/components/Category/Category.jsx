import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategoryImages } from '../../helpers/firebase'
import './Category.css'

const Category = (props) => {
    const { data } = props
    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        getCategoryImages(data.name).then(images => {
            images.forEach(image => {
                image.getDownloadURL().then(url => {
                    setImageUrl(url)
                })
            })
        })
    }, [])

    return (
        <div className="category-item">
            <div
                className="category-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="category-actions">
                <h1>{data.name}</h1>
                <Link to={`gallery/${data.name}`} className="more-photos">MORE PHOTOS</Link>
            </div>
        </div>
    )
}

export default Category
