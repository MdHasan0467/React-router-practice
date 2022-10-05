import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const CardData = () => {
    const cardData = useLoaderData();
    console.log(cardData.meals);
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2'>
        
            {
                (cardData.meals).map(card => <Card key={card.idMeal} card={card}></Card>)
            }
        </div>
    );
};

export default CardData;