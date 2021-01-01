import React, { useEffect, useContext } from 'react'
import GalleryContext from '../../context/GalleryContext/GalleryContext'
import { getFirstImage } from '../../helpers/firebase'
import Category from '../Category/Category'
import './CategoryList.css'

const CategoryList = () => {

    const { getCategoryList, categories } = useContext(GalleryContext)
    useEffect(() => {
        getCategoryList()
        getFirstImage('Maternity')
    }, [])

    return (
        <div className="category-list">
            {
                categories.length
                    ? <>
                        {
                            categories.map(category => {
                                return (
                                    <Category key={category} data={category} />
                                )
                            })
                        }
                    </>
                    : <h1>No albums found</h1>
            }
        </div>
    )
}

export default CategoryList
