import React from 'react'
import { ImPen } from "react-icons/im";

import './Info.css'
import image from '../../media/pen.svg'

function Info() {
    return (
        <div className="info">
            <div className="info_about">
                <h3><span>H</span>and<span>R</span>eacting</h3>
                <p>
                    <ImPen className="penIcon"/>
                A hero can be anyone. Even a man doing something as simple and reassuring as 
                putting a coat around a young boy's shoulders to let him know that the world hadn't ended.
                A hero can be anyone. Even a man doing something as simple and reassuring as putting a coat around a
                young boy's shoulders to let him know that the world hadn't ended.
                    <ImPen className="penIcon"/>
                </p>
            </div>
            <div className="info_image">
                <img src={image} alt="pen" />
            </div>
        </div>
    )
}

export default Info
