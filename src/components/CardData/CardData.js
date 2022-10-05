import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const CardData = () => {
    const cardData = useLoaderData();
    return (
        <div>
            {
                cardData.map(card => <Card key={card.idMeal} card={card}></Card>)
            }
        </div>
    );
};

export default CardData;