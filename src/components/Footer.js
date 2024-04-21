import Logo from "../assets/img/logo.png"

const Footer = () => {
  return (
    <div className=" grid grid-cols-3 w-full h-auto bg-black text-white">
      <div className="m-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7Y3H4BWeev-dzDtyaLTPdBMQ3_5ZbUXHvW1Bscmr_w&s"
          alt="logo"
          className="w-20  h-20 object-cover rounded-full shadow-md "
        />
        <h4 className="font-mono"> Food Villa</h4>
        <h6>supporthelp@Food.Villa</h6>
      </div>
      <div className="mt-5 ">
        <h1 className="font-serif">Comapnay</h1>
        <h3>
          <a href="./about">About</a>
        </h3>
        <h4>
          <a href="./contact">Contact us</a>
        </h4>
        <h4>help</h4>
      </div>

      <div className="mt-5 ">
        <h1 className="font-serif">Restaurants</h1>
        <h2>
          <a href="./restaurant/41969">Pizza Hut</a >
        </h2>
        <h2>Cake</h2>
        <h2>
          <a href="./restaurant/31803">McDonald's</a >
        </h2>
      </div>
    </div>
  );
};

export default Footer;
