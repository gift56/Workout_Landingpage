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
                <div className="hero-txt">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body
                            and live up your life to the fullest
                        </span>
                    </div>
                </div>
            </div>
            <div className="rightH">
                rightSide
            </div>
        </div>
    )
}

export default Hero
