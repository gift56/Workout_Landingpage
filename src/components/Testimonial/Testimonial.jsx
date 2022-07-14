import React, { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import './testimonial.css';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Testimonial = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    return (
        <div className="Testimonials">
            <div className="leftT">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{ color: "var(--orange)" }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="rightT">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />
                <div className="arrows">
                    <img src={leftArrow} alt="" />
                    <img src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial
