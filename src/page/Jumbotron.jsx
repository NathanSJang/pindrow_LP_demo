import React from 'react'
import Navbar from '../comp/Navbar';
import { ReactComponent as Logo } from '../public/icon_white.svg';
import { ReactComponent as Down } from '../public/icon_down.svg';
import { ReactComponent as Stop } from '../public/icon_stop.svg';


export default function Jumbotron() {
    return (
        <>
        <Navbar />
        <div className="jt-container">
            <Logo className="jt-logo"/>
            <div className="jt-text-container">
                <p className="jt-text">Name Your Price</p>
            </div>
            <button className="jt-btn">SIGN UP</button>
            <Down className="jt-down" />
            <Stop className="jt-stop" />
        </div>
        </>
    )
}

