import { IMG_CDN_LINK } from "./constant";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  user,
}) => {
  return (
    <div className="w-60 h-70 p-2 m-2 shadow-lg bg-blue-200 hover:bg-blue-500 border border-gray-500 overflow-hidden">
      <img
        className="w-full h-32 object-cover"
        src={IMG_CDN_LINK + cloudinaryImageId}
        alt={name}
      />
      <h2 className="font-bold text-md">{name}</h2>
      <h3 className="font-bold text-sm">{cuisines.join(", ")}</h3>
      <h4 className="font-bold text-sm">{avgRating} Stars</h4>
     {/* <h4 className="font-bold text-sm">{user.name}</h4>*/}
    </div>
  );
};

export default RestaurantCard;
