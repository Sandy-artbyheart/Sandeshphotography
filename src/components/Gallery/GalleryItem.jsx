import React, { useContext, useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import GalleryContext from '../../context/GalleryContext/GalleryContext'
import CustomModal from '../Modal/Modal'
import './GalleryItem.css'

const Gallery = (props) => {
    const [imageUrl, setImageUrl] = useState('')
    const [showModal, setModalShow] = useState(false)
    const { gallery } = useContext(GalleryContext)
    const [carouselImages, setCarouselImages] = useState([])

    useEffect(() => {
        props.data.getDownloadURL().then(url => {
            setImageUrl(prevState => url)
        })
            .catch(err => {
                window.alert('Failed to load images')
            })
    }, [props.data])

    useEffect(() => {
        setCarouselImages([])
        gallery.forEach(image => {
            image.getDownloadURL().then(url => {
                setCarouselImages(prevState => [...prevState, url])
            })
        })
    }, [gallery])

    return (
        <>
            <div onClick={() => { setModalShow(true) }} className="gallery-item" style={{
                backgroundImage: `url(${imageUrl})`
            }}>
            </div>
            <CustomModal
                show={showModal}
                onHide={() => setModalShow(false)}
            >
                <Carousel>
                    {carouselImages.map(image => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </CustomModal>
        </>
    )
}

export default Gallery
