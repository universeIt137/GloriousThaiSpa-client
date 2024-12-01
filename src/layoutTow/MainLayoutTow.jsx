import React from 'react'
import ClientNavbarTow from '../components/clientSide/clientNavbarTow/ClientNavbarTow'
import { Outlet } from 'react-router-dom'

const MainLayoutTow = () => {
    return (
        <div>
            <ClientNavbarTow></ClientNavbarTow>
            <Outlet />
        </div>
    )
}

export default MainLayoutTow
