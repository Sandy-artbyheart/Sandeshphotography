import React, { useReducer } from 'react'
import { getCategories, getCategoryImages } from '../../helpers/firebase'
import { ON_CATEGORY_FAILURE, ON_CATEGORY_SUCCESS, REQUEST_CATEGORY, REQUEST_IMAGES, ON_IMAGES_FAILURE, ON_IMAGES_SUCCESS } from './GalleryConstant'
import GalleryContext from './GalleryContext'
import galleryReducer from './GalleryReducer'

const GalleryProvider = (props) => {

    const initialState = {
        loadingCategories: false,
        categories: [],
        gallery: [],
        loadingGallery: false
    }

    const [state, dispatch] = useReducer(galleryReducer, initialState)

    const success = (data, type) => {
        return { type, payload: data }
    }

    const failure = (err, type) => {
        return { type, payload: err }
    }

    const request = (type) => {
        return { type }
    }

    const getCategoryList = async () => {
        dispatch(request(REQUEST_CATEGORY))
        try {
            const response = await getCategories()
            dispatch(success(response, ON_CATEGORY_SUCCESS))
        } catch (error) {
            dispatch(failure(error, ON_CATEGORY_FAILURE))
        }
    }

    const getImagesList = async (directory) => {
        dispatch(request(REQUEST_IMAGES))
        try {
            const response = await getCategoryImages(directory)
            dispatch(success(response, ON_IMAGES_SUCCESS))
        } catch (error) {
            dispatch(failure(error, ON_IMAGES_FAILURE))
        }
    }

    return (
        <GalleryContext.Provider
            value={{
                ...state,
                dispatch,
                getCategoryList,
                getImagesList
            }}
        >
            {props.children}
        </GalleryContext.Provider>
    )
}

export default GalleryProvider