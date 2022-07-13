import React from 'react';
import './programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
    return (
        <div className="programs" id="programs">
            <div className="programsHeader">
                <span className='stroke-text'>Explore our </span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            <div className="programsCatergories">
                {programsData.map((program) => (
                    <div className="catergory">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="joinNow">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs
