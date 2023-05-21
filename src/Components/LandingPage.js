import React from "react";
import { NavBar } from "./NavBar";
import { GrFormNextLink } from "react-icons/gr";
import mainBg from "../assets/mainBg.png";

const LandingPage = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${mainBg})` }}
        className="bg-cover bg-center"
      >
        <header>
          <nav>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <button>login</button>
                <button>get started</button>
              </div>
            </div>
          </nav>
        </header>
        <section className="flex select-none items-center justify-center min-h-screen h-full relative">
          <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
            <div className="flex flex-col items-center justify-center lg:gap-12 md:gap-10 gap-8">
              <div className="flex flex-col justify-center items-center text-center text-white md:w-auto w-[90%] mx-auto gap-4">
                <div className="flex flex-col justify-center items-center text-center gap-3">
                  <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold leading-7">
                    unlock your potential with
                  </h1>
                  <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold leading-7">
                    our community.
                  </h1>
                </div>
                <p className="lg:text-2xl md:text-xl text-lg font-semibold">
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
