import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "./constant";
import Shimmer from "./shimmer";
import useRestaurant from "../../utils/useRestaurant";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    // Fetch restaurant data or perform any other side effects
  }, [id]); // Include id in the dependency array if needed



  if (!restaurant) return <Shimmer />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="menuDiv">
        <img
          src={IMG_CDN_LINK + restaurant[2]?.card?.card?.info?.cloudinaryImageId}
          className="menuimg"
          alt=""
        />
        <h1>{restaurant?.name}</h1>
        <h2>{restaurant[2]?.card?.card?.info?.costForTwoMessage}</h2>
        <h3>Average Rating: {restaurant[2]?.card?.card?.info?.avgRating}</h3>
        {restaurant[2]?.card?.card?.info?.cuisines && (
          <h4>{restaurant[2]?.card?.card?.info?.cuisines.join(", ")}</h4>
        )}
        <h3>City: {restaurant[2]?.card?.card?.info?.city}</h3>

      </div>

      {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
        (item) => (
          <div key={item?.card?.info?.id} className="menu">
            <img src={IMG_CDN_LINK + item?.card?.info?.imageId} alt="" />
            <h3>{item?.card?.info?.name}</h3>
            <button className="p-2 m-5 bg-green-300" onClick={() => addFoodItem(item)}>
              Add Item
            </button>
             
            
          </div>
        )
      )}
    </div>
  );
};

export default RestrauntMenu;
