import React from "react";
import image from "../Images/img_hero.jpeg";
const Home = () => {
  return (
    <div className="bg-[#EDEDED]">
      <div className=" flex flex-row p-5 mt-6">
        <div className="">
          <p>- Free 30 DAYS TRIAL</p>
          <h1 className="">
            The best way to showcase
            <br />
            your project.
          </h1>
          <p>Here you can put a short description about your project.</p>

          <button class="bg-[#3164F3] hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Try for free
          </button>
          <button className="text-black font-semibold py-2 px-2 rounded border-">
            See How it works
          </button>
        </div>

        <div className="h-160 w-80 rounded-full mr-8">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
