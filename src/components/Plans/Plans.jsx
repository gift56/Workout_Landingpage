import React from 'react';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png'
import './plans.css';

const Plans = () => {
    return (
        <div className="plansContainer">
            <div className="programsHeader">
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>
            <div className="plans">
                {plansData.map((plans, index) => (
                    <div className="plan" key={index}>
                        {plans.icon}
                        <span>{plans.name}</span>
                        <span>$ {plans.price}</span>
                        <div className="plansFeatures">
                            {plans.features.map((feature, index) => (
                                <div className="feature" key={index}>
                                    <img src={whiteTick} alt="" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits -></span>
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans
