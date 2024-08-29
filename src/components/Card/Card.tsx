import React from 'react';
import './Card.css'

function Card(props) {
    return ( 
        <div className="card">
            <div className="card-content">
                <div className='card-header'>
                    <h1 className="card-title">
                        {props.title}
                    </h1>

                    <div className='card-img-container'>
                        <img src={props.img} alt={props.imgAlt} />
                    </div>
                </div>
                <div className='card-body'>
                    <h1 className='card-subtitle'>{props.subtitle}</h1>

                    <p className="card-description">{props.description}</p>
                </div>
            </div>
        </div>
    );
}
export default Card;