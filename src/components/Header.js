import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// const LoggedIn =()=>{
//   return true;
// }

const Title = () => {
  return (
    <a href="./">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7Y3H4BWeev-dzDtyaLTPdBMQ3_5ZbUXHvW1Bscmr_w&s"
        alt="img"
        className=" w-30 p-1  object-cover h-20  sm:hidden "
        data-testid="logo"
      />

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7Y3H4BWeev-dzDtyaLTPdBMQ3_5ZbUXHvW1Bscmr_w&s"
        alt="img"
        className="w-20 p-1 mr-[82rem] object-cover h-20 rounded-full sm:mr-[3rem]" // Apply on small screens and up
        data-testid="logo"
      />
    </a>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  //  const {user }= useContext(UserContext)
  return (
    <div className="flex justify-end shadow-md border-emerald-100 w-full h-20 items-center">
      <Title />

      <div className="lg:hidden">
        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-white focus:outline-none"
        >
          &#x2630;
        </button>
      </div>

      <div className="hidden lg:block">
        <ul className=" flex py-10 text-xl ">
          <li className="px-2 ">
            {" "}
            <Link to="./">Home </Link>
          </li>

          <li className="px-2">
            {" "}
            <Link to="./about">About </Link>
          </li>

          <li className="px-2 text-nowrap">
            <Link to="./contact">Contact Us</Link>
          </li>

          <li className="px-2">
            <Link to="./Instamart">Instamart</Link>
          </li>

          <li className="px-2 text-nowrap">
            <Link to="./cart" data-testid="cart">
              Cart {cartItems.length} 
            </Link>
          </li>
        </ul>
      </div>

      {/* mobile_Phone */}

      {showMenu && (
        <div className=" absolute top-16 right-0 bg-blue-400 w-auto text-white lg:hidden rounded-md ">
          <ul className="flex flex-col py-1 text-xl ">
            <li className="px-2">
              <Link to="./">Home</Link>
            </li>
            <hr />
            <li className="px-2">
              <Link to="./about">About</Link>
            </li>
            <hr />
            <li className="px-2">
              <Link to="./contact">Contact Us</Link>
            </li>
            <hr />
            <li className="px-2">
              <Link to="./Instamart">Instamart</Link>
            </li>
            <hr />
            <li className="px-2 text-nowrap">
              <Link to="./cart" data-testid="cart">
                Cart {cartItems.length} items
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* {user.name} */}
      {isLoggedIn ? (
        <button
          onClick={() => setIsLoggedIn(false)}
          className=" bg-blue-300 rounded-md text-nowrap p-1 cursor-pointer font-semibold"
        >
          LogOut
        </button>
      ) : (
        <button
          onClick={() => setIsLoggedIn(true)}
          className="bg-blue-400 text-nowrap hover:bg-blue-600 text-white rounded-md py-2 px-4 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Log In
        </button>
      )}

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden bg-blue-400 text-nowrap hover:bg-blue-600 text-white rounded-md py-2 px-4 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 m-2"
      >
        {showMenu ? "Close" : "Menu"}
      </button>
    </div>
  );
};

export default Header;
