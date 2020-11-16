import React from 'react';
import './card.style.css'

export const Card = props => {
    return (
        <div className='card-container'>
            <img className='card-image' src={props.member.img} alt={props.member.id}></img>
            <h1 className='card-name'>{props.member.name}</h1>
            <p className='card-birthday'>{props.member.birthday}</p>
        </div>
    )
} 