import React from "react";
import { Link } from "react-scroll";

const Navber = () => {
  const title = ["Home","About","Services","Protfolio","Contact"]
  return (
    <>
      <div className="fixed flex w-full p-4 items-center bg-base-300 shadow-md ">
        <div className=" flex-1 ml-5">
          <div className="dropdown">
            logo
          </div>
        </div>
        <div className=" flex-1 ">
          <div className="flex justify-between">
            {title.map((item, index) => (
              <div key={index} className=" flex-1  flex justify-center items-center cursor-pointer ">
                <Link to={item} smooth={true} duration={700} >{item}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex-1 mr-5">
          <div className="flex justify-end">
          <a >Botton</a>
          </div>
        </div>
        

      </div>
    </>
  );
};

export default Navber;



