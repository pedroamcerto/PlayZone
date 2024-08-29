import React from 'react';
import PlanOption from '../PlanOption/PlanOption';
import "./PlanCard.css"

function PlanCard({ data }) {
    return (
        <div className="planCards-container">
            {data.map((planCard, index) => (
                <div key={index} className="planCard">
                    <div className="title-container" style={{backgroundColor: planCard.headerColor}}>
                        <h3>{planCard.title}</h3>
                    </div>
                    <div className="plan-card-body">
                        <PlanOption options={planCard.options}></PlanOption>
                        <button 
                            className="plan-button" 
                            style={{ backgroundColor: planCard.buttonColor, color: planCard.buttonLabelColor, border: planCard.buttonBorder }}
                        >
                            {planCard.buttonLabel}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PlanCard;