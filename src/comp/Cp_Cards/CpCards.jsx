import React from 'react'
import CpCard1 from './CpCard/CpCard1';
import CpCard2 from './CpCard/CpCard2';
import CpCard3 from './CpCard/CpCard3';
import { ReactComponent as Before } from '../../public/icon_before.svg';
import { ReactComponent as Next } from '../../public/icon_next.svg';

export default function CpCards() {
    return (
        <div className="cp-cards-container">
            <Before className="cp-before" />
            <CpCard1 />
            <CpCard2 />
            <CpCard3 />
            <Next className="cp-next" />
        </div>
    )
}
