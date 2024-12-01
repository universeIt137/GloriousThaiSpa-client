import React from 'react'
import ClientNavbarTow from '../components/clientSide/clientNavbarTow/ClientNavbarTow'
import { Outlet } from 'react-router-dom'
import Footer from '../components/clientSide/footer/Footer'
import FloatingBtn from '../components/clientSide/floatingBtn/FloatingBtn'
import MobileNavbar from '../components/clientSide/clientNavbar/mobileNavbar'

const MainLayoutTow = () => {
    return (
        <div>
            <ClientNavbarTow></ClientNavbarTow>
            <MobileNavbar ></MobileNavbar>


            <Outlet></Outlet>
            <Footer></Footer>
            <FloatingBtn ></FloatingBtn>
        </div>
    )
}

export default MainLayoutTow
