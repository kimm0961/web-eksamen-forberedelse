import React from 'react'
// Components
import Slider from '../shared/Slider'
import ProductsPage from './products/ProductsPage'
import SignupNewsletter from '../shared/SignupNewsletter'
import AboutPage from './about/AboutPage'
import ContactPage from './contact/ContactPage'

const MainPage = () => {
    return (
        <>
        <Slider />
        <ProductsPage />
        <SignupNewsletter />
        <AboutPage />
        <ContactPage />
        </>
    )
}

export default MainPage
