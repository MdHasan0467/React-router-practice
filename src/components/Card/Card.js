import React from 'react';

const Card = ({card}) => {
    const {strMeal,strCategory,strArea,strMealThumb} = card
    return (
        <div>
        <img src={strMealThumb} alt="" />
            <h1>title: {strMeal} </h1>
            <p>Category: {strCategory}</p>
            <p>Country: {strArea}</p>
        </div>
    );
};

export default Card;