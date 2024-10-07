import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../'
import ScrollToTop from "../ScrollToTop/ScrollToTop.jsx"


function Layout() {

    return (
        <>
            <ScrollToTop />
            <Navbar />
            <div className='bg-white'>
                <Outlet />
            </div>
            <Footer />


        </>
    )
}

export default Layout