import React from 'react'
import GalleryCollection from '../components/GalleryCollection/GalleryCollection'

const Home = React.lazy(() => import('../pages/home/Home'))

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/gallery/:directory',
        component: GalleryCollection
    }
]

export default routes