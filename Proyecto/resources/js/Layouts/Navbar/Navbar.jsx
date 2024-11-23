import React from 'react'


import DesktopNavbar from './DesktopNavbar'
import MovileNavbar from './MovileNavbar/MovileNavbar'

export default function Navbar({ auth }) {

    const navigation = [

        {
            name: 'Ofertas',
            href: 'offers'
        },
        
        
        {
            name: 'Contáctanos',
            href: 'conocenos'
        },
        {
            name: '¿Quiénes somos?',
            href: 'welcome'
        },
        

    ]
    return (
        <>
            <MovileNavbar navigation={navigation} />
            <DesktopNavbar navigation={navigation} />
        </>
    )

}
