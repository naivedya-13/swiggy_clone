import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../utils/cartSlice';
import { IMG_CDN_LINK } from './constant';

const FoodItem = ({ card }) => {
  const dispatch = useDispatch();

  const handleRemoveCart = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="w-60 h-70 p-2 m-2 shadow-lg bg-blue-200 hover:bg-blue-500 border border-gray-500 overflow-hidden">
      <img src={IMG_CDN_LINK + card?.info?.imageId} alt={card?.info?.name} />
      <h2>{card?.info?.name}</h2>
      <h2>Rupees: {card?.info?.price / 100}</h2>
      <button className="bg-red-100 p-2 mt-2" onClick={() => handleRemoveCart(card)}>
        Remove
      </button>
    </div>
  );
};

export default FoodItem;
