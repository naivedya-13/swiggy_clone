import React, { useEffect, useState } from "react";

const useRestaurant = (id) => {
  const [restraunt, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo(id); // Pass id to getRestaurantInfo
  }, [id]); // Trigger useEffect whenever id changes

  async function getRestaurantInfo(id) {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);

    const json = await data.json();
    console.log(json);
    setRestaurant(json.data.cards);
  }

  return restraunt;
};

export default useRestaurant;
