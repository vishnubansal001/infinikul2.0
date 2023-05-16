import React from 'react';
import cardpic from '../assets/cardpic.png';

const Card = ({ title, author, price, imageUrl }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
      <img className="object-cover w-full h-48" src={cardpic} alt="Card" />
      <div className="p-6">
        <h3 className="text-2xl font-bold ">{title}</h3>
        <div className="flex justify-between h-2">
          <p className="text-gray-700">{author}</p>
          <p className="text-gray-700">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
