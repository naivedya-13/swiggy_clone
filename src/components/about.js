import React from "react";

const About = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{
        backgroundImage: `url('https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4')`,
        backgroundSize: "30%", // Adjust the percentage to make the image smaller or larger
      }}
    >
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Food Villa</h1>
        <p className="mb-4">
          Food Villa is not just a restaurant; it's a culinary experience. We
          strive to bring you the best flavors from around the world, all under
          one roof. Our chefs are passionate about creating delicious and
          innovative dishes that will tantalize your taste buds.
        </p>
        <p className="mb-4">
          Our mission is simple: to provide our customers with exceptional food
          and service. Whether you're dining in our cozy restaurant or ordering
          takeout, we want every experience with Food Villa to be memorable.
        </p>
        <p className="mb-4">
          We source the finest ingredients locally and globally to ensure that
          every dish is of the highest quality. From farm-fresh vegetables to
          premium meats and seafood, we spare no effort in bringing you the
          best.
        </p>
        <p>
          Thank you for choosing Food Villa. We look forward to serving you and
          creating lasting culinary memories together.
        </p>
      </div>
    </div>
  );
};

export default About;
