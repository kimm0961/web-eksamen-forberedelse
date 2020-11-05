import React from 'react'
// Components
import Slider from '../shared/Slider'
import ProductsPage from './products/ProductsPage'
import SignupNewsletter from '../shared/SignupNewsletter'
import AboutPage from './about/AboutPage'
import ContactPage from './contact/ContactPage'
import DesignRigPage from './designOwnRig/DesignRigPage'

const MainPage = () => {
    return (
        <>
        <Slider />
        <ProductsPage />
        <DesignRigPage/>
        <SignupNewsletter />
        <AboutPage />
        <ContactPage />
        </>
    )
}

export default MainPage
