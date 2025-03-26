import React from "react";
import img from "../main/img/img.jpg";

const Main = () => {
  return (
    <div className="">
      <section id="Home" className=" h-screen flex justify-center ">
        <div className="">
          <div className="p-30 border flex flex-col items-center">
            <img
              src={img}
              alt=""
              className="w-70 h-85 rounded-full shadow-2xl "
            />
            <span className="mt-5 font-bold text-4xl bg-gradient-to-l from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">
              I'm Padiphon Homchai,
            </span>
            <span className="font-bold text-2xl">
              "junior frontend developer"
            </span>
            <p className="mt-5 text-primary-content  w-250">
              "I have experience in IT Support and am transitioning into
              Frontend Development with a passion for creating beautiful and
              user-friendly websites. I specialize in HTML, CSS, JavaScript, and
              frameworks like React.js and Tailwind CSS, ready to contribute
              skills and dedication to enhancing user experiences."
            </p>
            <div className="flex justify-between  gap-15 mt-10">
              <div className=" cursor-pointer bg-gradient-to-l from-[#DF8908] to-[#B415FF] p-4 px-10 rounded-3xl hover:border-2">
              <a>Connect with me</a>
              </div>
              <div className="cursor-pointer border-2 p-4 px-16 rounded-3xl hover:border-[#B415FF]">
              <a>Myresume</a>
              </div>
            </div>
          </div>
          
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
