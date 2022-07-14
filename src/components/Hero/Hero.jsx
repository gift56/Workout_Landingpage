import React from 'react'
import Header from '../Header/Header';
import './hero.css';
import hero_img from '../../assets/hero_image.png';
import hero_img_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    return (
        <div className='hero'>
            <div className="blur blurH"></div>
            <div className="leftH">
                <Header />
                <div className="theBest-ad">
                    <motion.div
                        initial={{ left: '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={transition}
                    ></motion.div>
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
                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>memebers joined</span>
                    </div>
                    <div>
                        <span>+ 50</span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <div className="rightH">
                <button className="btn">Join Now</button>
                <div className="heartRate">
                    <img src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>
                <img src={hero_img} alt="" className='heroImg' />
                <img src={hero_img_back} alt="" className='heroImg-back' />
                <div className="calories">
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
