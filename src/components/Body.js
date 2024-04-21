import React, { useState, useEffect } from "react";
import { restaurantList } from "./constant";
import RestaurantCard from "./RestaurantCard"; // Correct import statement
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useOnline from "../../utils/useOnline";

const Body = ({user}) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredrestaurants, setFilteredRestaurants] =
    useState(restaurantList);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }
  const isOnline = useOnline();

  if(!isOnline){
    return <p>Please check you internet connection!!</p>
  }

  if (!allRestaurants) return null;

  if (filteredrestaurants.length === 0) return <h1>No Restraunts Found...</h1>;
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-1 mt-2 bg-blue-300">
        <input
          type="text"
          className="focus:bg-green-100 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-2 m-2 bg-purple-800 text-white rounded-lg hover:bg-green-700"
          onClick={() => {
            const filteredData = filterData(searchText, allRestaurants);
            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredrestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard {...restaurant.info} user = {user} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
