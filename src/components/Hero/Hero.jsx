import React from 'react'
import Header from '../Header/Header';
import './hero.css';
import hero_img from '../../assets/hero_image.png';
import hero_img_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className='hero' id='home'>
            <div className="blur blurH"></div>
            <div className="leftH">
                <Header />
                <div className="theBest-ad">
                    <motion.div
                        initial={{ left: mobile ? '160px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
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
                        <span>
                            <NumberCounter end={140} start={100} delay='4' preFix='+' />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={978} start={800} delay='4' preFix='+' />
                        </span>
                        <span>memebers joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} start={0} delay='4' preFix='+' />
                        </span>
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
                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="heartRate">
                    <img src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                <img src={hero_img} alt="" className='heroImg' />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '23rem' }}
                    transition={transition}
                    src={hero_img_back} alt="" className='heroImg-back' />
                <motion.div
                    initial={{ right: '34rem' }}
                    whileInView={{ right: '38rem' }}
                    transition={transition}
                    className="calories">
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
