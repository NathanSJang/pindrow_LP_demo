import React from 'react'
import img1 from '../../../public/card_img_1.svg';

export default function CpCard1() {
    return (
        <div>
            <div className="cp-card">
                <img className="cp-card-img" src={img1} alt="img_1" />
                <div className="cp-card-title-container">
                    <p className="cp-card-title">TITLE</p>
                </div>
            </div>
        </div>
    )
}
