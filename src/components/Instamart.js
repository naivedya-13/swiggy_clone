import React, { useState } from "react";

const Section = ({ id, title, description, visibleId, setVisibleId }) => {
  const isVisible = id === visibleId;
  return (
    <div className="border border-black p-2 m-2">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl">{title}</h3>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setVisibleId(isVisible ? null : id)}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      {isVisible && <p className="text-sm mt-2">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleId, setVisibleId] = useState(null);

  return (
    <div>
      <h3 className="text-3xl p-2 m-2 font-bold">Instamart</h3>
      <Section
        id={1}
        title={"About Instamart"}
        description={
          "Instamart is your ultimate online destination for all your grocery needs. With a wide selection of products, convenient delivery options, and exceptional customer service, we are committed to making your shopping experience effortless and enjoyable."
        }
        visibleId={visibleId}
        setVisibleId={setVisibleId}
      />
      <Section
        id={2}
        title={"Our Team"}
        description={
          "At Instamart, our team is the heart and soul of our business. Comprising dedicated individuals with a passion for customer service and quality, we strive to exceed your expectations and ensure that your shopping experience is nothing short of exceptional."
        }
        visibleId={visibleId}
        setVisibleId={setVisibleId}
      />
      <Section
        id={3}
        title={"Our Products"}
        description={
          "We take pride in offering a wide range of high-quality products to meet your everyday needs. From fresh produce to pantry staples and everything in between, we are your one-stop shop for all your grocery essentials."
        }
        visibleId={visibleId}
        setVisibleId={setVisibleId}
      />
      <Section
        id={4}
        title={"Join Our Team"}
        description={
          "Are you passionate about food and customer service? Join us at Instamart and become a part of our dynamic team. With opportunities for growth and development, we offer a rewarding work environment where you can thrive."
        }
        visibleId={visibleId}
        setVisibleId={setVisibleId}
      />
      <Section
        id={5}
        title={"Customer Service"}
        description={
          "At Instamart, customer satisfaction is our top priority. Our dedicated customer service team is here to assist you with any questions or concerns you may have. We are committed to providing you with the best shopping experience possible."
        }
        visibleId={visibleId}
        setVisibleId={setVisibleId}
      />
    </div>
  );
};

export default Instamart;
