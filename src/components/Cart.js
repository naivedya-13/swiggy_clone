import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart =()=>{
    dispatch(clearCart());
  }

  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button className="bg-green-100 p-2 m-2" onClick={()=>handleClearCart()}>clear Cart</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {cartItems.map((item) => (
    <FoodItem key={item.card.info.id} {...item} />
  ))}
</div>

    </div>
  );
};

export default Cart;
