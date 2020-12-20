import React, { useEffect, useState } from 'react'
import './GalleryItem.css'

const Gallery = (props) => {
    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        props.data.getDownloadURL().then(url => {
            setImageUrl(prevState => url)
        })
            .catch(err => {
                window.alert('Failed to load images')
            })
    }, [props.data])

    return (
        <div className="gallery-item" style={{
            backgroundImage: `url(${imageUrl})`
        }}>
        </div>
    )
}

export default Gallery
