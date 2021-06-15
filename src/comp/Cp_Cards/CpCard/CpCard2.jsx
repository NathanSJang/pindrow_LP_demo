import React from 'react'
import img2 from "../../../public/card_img_2.svg";

export default function CpCard2() {
    return (
        <div>
            <div className="cp-card">
                <img className="cp-card-img" src={img2} alt="test" />
                <div className="cp-card-title-container">
                    <p className="cp-card-title">TITLE</p>
                </div>
            </div>
        </div>
    )
}
