import { ON_CATEGORY_FAILURE, ON_CATEGORY_SUCCESS, ON_IMAGES_FAILURE, ON_IMAGES_SUCCESS, REQUEST_CATEGORY, REQUEST_IMAGES } from "./GalleryConstant"

const galleryReducer = (state, action) => {
    switch (action.type) {
        case REQUEST_CATEGORY:
            return { ...state, loadingCategories: true }
        case ON_CATEGORY_SUCCESS:
            return {
                ...state,
                loadingCategories: false,
                categories: action.payload
            }
        case ON_CATEGORY_FAILURE:
            return {
                ...state,
                loadingCategories: false
            }
        case REQUEST_IMAGES:
            return { ...state, loadingGallery: true }
        case ON_IMAGES_SUCCESS:
            return { ...state, gallery: action.payload }
        case ON_IMAGES_FAILURE:
            return { ...state, loadingGallery: false }
        default:
            return { ...state }
    }
}

export default galleryReducer