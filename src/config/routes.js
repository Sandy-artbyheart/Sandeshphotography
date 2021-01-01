import React from 'react'
import GalleryCollection from '../components/GalleryCollection/GalleryCollection'
import ServicesCollection from '../components/Services/ServicesCollection'

const Home = React.lazy(() => import('../pages/home/Home'))
const About = React.lazy(() => import('../pages/about/about'))

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
    },
    {
        path: '/services',
        component: ServicesCollection
    }
]

export default routes