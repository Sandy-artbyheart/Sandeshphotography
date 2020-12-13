import React, { useEffect } from 'react'
import CategoryList from '../../components/CategoryList/CategoryList'
import storage from '../../config/firebase'

const Home = () => {

    return (
        <div>
            <CategoryList />
        </div>
    )
}

export default Home
