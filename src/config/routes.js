import React from 'react'
import GalleryCollection from '../components/GalleryCollection/GalleryCollection'

const Home = React.lazy(() => import('../pages/home/Home'))
const About  = React.lazy(() => import('../pages/about/about'))

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/gallery/:directory',
        component: GalleryCollection
    },
    {
        path: '/about',
        component: About
    }
]

export default routes