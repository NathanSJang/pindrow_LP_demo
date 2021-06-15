import React from 'react'
import Card from './comp/Card';
import ContentText from './comp/ContentText';
import { ReactComponent as Slide } from '../../public/icon_slide.svg';

export default function EtGameSlide() {
    return (
        <div className="grid grid-cols-2 et-slide-container">
            <Card />
            <ContentText className="et-text-container" />
            <Slide className="all-icon-slide" />
        </div>
    )
}
