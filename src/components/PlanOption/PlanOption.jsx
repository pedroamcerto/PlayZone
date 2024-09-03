import React from "react";
import "./PlanOption.css"
import setaImg from '../../assets/images/chevron-right.svg'


function PlanOption({ options }) {
    return ( 
        <div className="options-container">
            {
                options.map((option, index) => (
                    <>
                        <h4 className="option-title">{option.title}</h4>
                        {option.img ? (
                            <div className="option-image-container">
                                    <img src={option.img} alt="Option Image" className="option-image" />
                            </div>
                        ) : (
                            <div key={index} className="options-body">
                                <div className="option-price-container">
                                    <div className="price-title">
                                        <span className="option-label">{option.label}</span>
                                        <span className="option-price">
                                            <small>
                                                {option.currencyLabel}
                                            </small>
                                            {option.price}
                                        </span>
                                    </div>
                                    <img src={setaImg} alt="" /> 
                                </div>
                            </div>
                        )}
                    </>
                )
            )}

        </div> 
    );
}

export default PlanOption;