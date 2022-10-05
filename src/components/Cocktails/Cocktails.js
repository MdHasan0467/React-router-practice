import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cocktail from '../Cocktail/Cocktail';

const Cocktails = () => {
    const cocktails = useLoaderData()
    console.log(cocktails.drinks)
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2'>y
        
            {
                (cocktails.drinks).map(cocktail => <Cocktail key={cocktail.idDrink} cocktail={cocktail} ></Cocktail>)
            }
        </div>
    );
};

export default Cocktails;