import React from 'react';
import { plansData } from '../../data/plansData';
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

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans
