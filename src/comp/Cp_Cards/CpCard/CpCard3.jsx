import React from 'react'
import img3 from '../../../public/card_img_3.svg';

export default function CpCard3() {
    return (
        <div>
            <div className="cp-card">
                <img className="cp-card-img" src={img3} alt="img_3" />
                <div className="cp-card-title-container">
                    <p className="cp-card-title">TITLE</p>
                </div>
            </div>
        </div>
    )
}
