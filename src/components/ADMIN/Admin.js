import React from 'react'
import AdminAboutFooter from './aboutFooter/AdminAboutFooter'
import AdminContact from './contact/AdminContact'
import AdminProducts from './products/AdminProducts'
import AdminSlider from './slider/AdminSlider'

const Admin = () => {
    return (
        <div>
            <h1>Admin</h1>
            <AdminProducts />
            <AdminSlider />
            <AdminAboutFooter />
            <AdminContact />
        </div>
    )
}

export default Admin
