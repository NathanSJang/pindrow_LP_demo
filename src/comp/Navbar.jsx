import React from 'react'
import { ReactComponent as Logo } from '../public/icon_white.svg';


export default function Navbar() {
    return (
        <div className="flex justify-between items-center nav-container">
            <div className="flex items-center">
                <Logo className="fill-current text-primary nav-logo"/>
                <p className="nav-logo-text">Drop</p>
            </div>
            <div className="flex items-center">
                <p className="nav-text">HOME</p>
                <p className="nav-text ml-nav-serch">TECH</p>
                <p className="nav-text ml-nav-serch">ET</p>
            </div>
        </div>
    )
}
