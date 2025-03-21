import React from "react";
import img from '../main/img/img.jpg'


const Main = () => {
  return (
    <div className="pt-20">
      <section id="Home" className=" h-screen flex justify-center ">
        <div className="">
            <img src={img} alt="" className="w-[250px] rounded-full pt-16  " />
            <span>I'm Padiphon Homchai</span>
            <span className="block">"junior front end developer"</span>
        </div>
      </section>

      <section id="About" className="bg-red-500 h-screen ">
        <h1>Test</h1>
      </section>

      <section id="Services" className="bg-gray-500 h-screen">
        <h1>test</h1>
      </section>

      <section id="Protfolio" className="bg-pink-500 h-screen">
        <h1>test</h1>
      </section>

      <section id="Contact" className="bg-green-400 h-screen">
        <h1>test</h1>
      </section>
    </div>
  );
};

export default Main;
