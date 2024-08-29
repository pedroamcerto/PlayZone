import React from "react";
import "./PlanOption.css"


function PlanOption({ options }) {
    return ( 
        <div className="options-container">
            {
                options.map((option, index) => (
                    <div key={index}>
                        <h4 className="option-title">{option.title}</h4>
                        <div>
                            <span className="option-label">{option.label}</span>

                            <div className="option-price-container">
                                {option.img ? (
                                    <img src={option.img} alt="Option Image" className="option-image" />
                                ) : (
                                    <>
                                        <small className="option-currency">
                                            {option.currencyLabel}
                                        </small>
                                        <span className="option-price">
                                            {option.price}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            }

        </div> 
    );
}

export default PlanOption;