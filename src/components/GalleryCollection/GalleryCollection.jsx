import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GalleryContext from '../../context/GalleryContext/GalleryContext'
import Gallery from '../Gallery/GalleryItem'
import './GalleryCollection.css'

const GalleryCollection = () => {
    const { directory } = useParams()
    const { getImagesList, gallery = [] } = useContext(GalleryContext)

    useEffect(() => {
        getImagesList(directory)
    }, [])


    return (
        <div>
            <h1 className="gallery-title">{directory} Gallery</h1>
            <div className="gallery-collection">
                {
                    gallery.length
                        ? <>
                            {
                                gallery.map(image => {
                                    return (<Gallery key={gallery.name} data={image} />)
                                })
                            }
                        </>
                        : <h1>No images found</h1>
                }
            </div>
        </div>
    )
}

export default GalleryCollection
