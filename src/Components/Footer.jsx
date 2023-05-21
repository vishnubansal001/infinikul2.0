import React from "react";
import logo from "../assets/logo2.png";
import insta from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";
import message from "../assets/message.svg";

const Footer = () => {
  return (
    <>
      <footer className="flex select-none items-center justify-center h-full relative bg-[#272727]">
        <div className="flex items-center justify-center mx-auto p-6">
          <div className="flex flex-col items-center justify-center lg:gap-8 md:gap-6 gap-4">
            <img
              src={logo}
              alt="img/logo.png"
              className="lg:w-[15rem] md:w-[12rem] w-[8rem]"
            />
            <div className="flex flex-col justify-center items-center text-center gap-1 text-white">
              <h1 className="lg:text-2xl md:text-xl text-lg font-bold ">
                a community made of, by
              </h1>
              <h1 className="lg:text-2xl md:text-xl text-lg font-bold ">
                and for students.
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 w-full">
              <p className="text-white font-bold lg:text-lg md:text-base text-sm">
                get in touch
              </p>
              <div className="flex md:flex-row flex-col justify-center items-center gap-2 w-full">
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="phone number"
                  min={1000000000}
                  minLength={10}
                  maxLength={10}
                  max={9999999999}
                  className="bg-white outline-none w-full rounded-[12px] px-4 py-3"
                />
                <button className="bg-[#6921EF] text-white font-bold lg:text-lg md:text-base text-sm py-2 rounded-[12px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out px-4">
                  done
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 w-full">
              <p className="text-white font-bold lg:text-lg md:text-base text-sm">
                contact us
              </p>
              <div className="flex flex-row  justify-center items-center gap-4">
                <img
                  className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                  src={insta}
                  alt="img/insta.svg"
                />
                <img
                  className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                  src={linkedin}
                  alt="img/linkedin.svg"
                />
                <img
                  className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                  src={message}
                  alt="img/message.svg"
                />
              </div>
            </div>
            <p className="text-white md:text-base lg:text-base text-sm">
              &copy; infinikul
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
