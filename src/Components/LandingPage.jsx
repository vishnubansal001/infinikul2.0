import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { GrFormNextLink } from "react-icons/gr";
import mainBg from "../assets/mainBg.png";
import logo from "../assets/logo2.png";

const LandingPage = () => {
  const [navState, setNaveState] = useState(false);
  const [popupState, setPopupState] = useState(false);
  const onTriggerPopup = () => setPopupState(!popupState);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNaveState(true);
    } else {
      setNaveState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${mainBg})` }}
        className="bg-cover bg-center"
      >
        <header
          className={`lg:flex justify-center items-center py-4 hidden px-4 fixed w-full z-[1000] ${
            !navState ? "bg-transparent" : "bg-[#6721EF]"
          }`}
        >
          <nav className="flex w-full px-4 justify-between gap-2 items-center">
            <div className="flex justify-between w-full items-center pr-2">
              <div>
                <img src={logo} alt="" className="w-[10rem] h-auto" />
              </div>
              <div className="flex flex-row justify-center items-center gap-4">
                <button className="uppercase bg-transparent border-4 border-white font-bold lg:text-xl md:text-lg text-base text-center text-white px-5 py-1 rounded-[12px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
                  login
                </button>
                <button className="uppercase text-[#6921EF] font-bold lg:text-xl md:text-lg text-base text-center bg-white px-5 py-2 rounded-[12px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
                  Courses
                </button>
                <button className="uppercase text-[#6921EF] font-bold lg:text-xl md:text-lg text-base text-center bg-white px-5 py-2 rounded-[12px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
                  get started
                </button>
              </div>
            </div>
          </nav>
        </header>
        <header className="relative">
          <nav
            className={`lg:hidden flex w-full z-[1000] ${
              !navState ? "bg-transparent" : "bg-[#6721EF]"
            }`}
          >
            <div className="w-[90%] mx-auto z-[1000]">
              <div className="flex justify-between items-center">
                <div>
                  <img
                    src={logo}
                    alt="img/logo.png"
                    className="w-[10rem] h-auto"
                  />
                </div>
                <div onClick={onTriggerPopup}>
                  <svg
                    className="w-[45px] h-[45px] sm:w-[40px] sm:h-[40px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 7H11C11.2652 7 11.5196 7.10536 11.7071 7.29289C11.8946 7.48043 12 7.73478 12 8C12 8.26522 11.8946 8.51957 11.7071 8.70711C11.5196 8.89464 11.2652 9 11 9H6C5.73478 9 5.48043 8.89464 5.29289 8.70711C5.10536 8.51957 5 8.26522 5 8C5 7.73478 5.10536 7.48043 5.29289 7.29289C5.48043 7.10536 5.73478 7 6 7V7ZM13 15H18C18.2652 15 18.5196 15.1054 18.7071 15.2929C18.8946 15.4804 19 15.7348 19 16C19 16.2652 18.8946 16.5196 18.7071 16.7071C18.5196 16.8946 18.2652 17 18 17H13C12.7348 17 12.4804 16.8946 12.2929 16.7071C12.1054 16.5196 12 16.2652 12 16C12 15.7348 12.1054 15.4804 12.2929 15.2929C12.4804 15.1054 12.7348 15 13 15ZM6 11H18C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </nav>
          <div
            className={`fixed top-0  w-screen flex flex-col py-6 px-6 bg-white z-[2000] items-center justify-center transition-transform duration-500 rounded-b-[60px] ${
              popupState ? "showpopup" : "noshowpopup"
            }`}
          >
            <div
              onClick={onTriggerPopup}
              className="flex item-center justify-end text-black font-extrabold p-4 w-full"
            >
              <div className="p-5 rounded-full border blob2 border-black cursor-pointer">
                X
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-center items-center gap-4">
                <button className="uppercase bg-transparent border-4 border-[#6721EF] font-bold lg:text-xl md:text-lg text-base text-center text-[#6721EF] w-[100%] px-5 py-1 rounded-[12px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
                  login
                </button>
                <button className="uppercase bg-[#6921EF] font-bold lg:text-xl md:text-lg text-base text-center text-white px-5 py-2 rounded-[12px] shadow-md w-[100%] hover:shadow-xl transition-all duration-300 ease-in-out">
                  Courses
                </button>
                <button className="uppercase bg-[#6921EF] font-bold lg:text-xl md:text-lg text-base text-center text-white px-5 py-2 rounded-[12px] shadow-md w-[100%] hover:shadow-xl transition-all duration-300 ease-in-out">
                  get started
                </button>
              </div>
            </div>
          </div>
        </header>
        <section className="flex select-none items-center justify-center min-h-screen h-full w-full relative">
          <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
            <div className="flex flex-col items-center justify-center lg:gap-12 md:gap-10 gap-8">
              <div className="flex flex-col justify-center items-center text-center text-white md:w-auto w-[90%] mx-auto gap-4">
                <div className="flex flex-col justify-center items-center text-center gap-3">
                  <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold leading-10">
                    unlock your potential with
                  </h1>
                  <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold leading-10">
                    our community.
                  </h1>
                </div>
                <p className="lg:text-2xl md:text-lg text-base font-semibold">
                  connect, learn, archieve, and earn with our community.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <button className="uppercase text-[#6921EF] font-bold lg:text-2xl md:text-xl text-lg text-center bg-white px-7 py-3 rounded-[12px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out ">
                  join us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
