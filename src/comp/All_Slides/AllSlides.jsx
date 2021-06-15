import React from 'react'
import Card from './comp/Card';
import ContentText from './comp/ContentText';
import { ReactComponent as Slide } from '../../public/icon_slide.svg';



export default function AllSides() {
    return (
        <div className="grid grid-cols-2 all-slide-container">
            <ContentText />
            <Card />
            <Slide className="all-icon-slide"/>
        </div>
    )
}
