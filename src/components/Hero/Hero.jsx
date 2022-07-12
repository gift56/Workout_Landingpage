import React from 'react'
import Header from '../Header/Header';
import './hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="leftH">
                <Header />
                <div className="theBest-ad">
                    <div></div>
                    <span>The best fitness club in the town</span>
                </div>
            </div>
            <div className="rightH">
                rightSide
            </div>
        </div>
    )
}

export default Hero
