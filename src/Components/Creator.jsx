import React from "react";
import rocket from "../assets/rocket.svg";
import pencil from "../assets/pencil.svg";
import cup from "../assets/cup.svg";
import vector1 from "../assets/vector1.svg";
import vector2 from "../assets/vector2.svg";
import line from "../assets/line.svg";

const Creator = () => {
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full relative">
        <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
          <div className="flex flex-col items-center justify-center lg:gap-12 md:gap-10 gap-8">
            <div className="flex flex-col justify-center items-center text-center gap-2">
              <h1 className="font-bold lg:text-6xl md:text-5xl text-3xl ">
                become a creator
              </h1>
              <h1 className="font-bold lg:text-6xl md:text-5xl text-3xl ">
                and join us.
              </h1>
            </div>
            <div className="grid lg:grid-cols-2 lg:justify-between justify-center w-full items-center lg:gap-x-80 lg:gap-y-20 gap-5 relative z-[100]">
              <div className="flex flex-col justify-center items-center p-3 border-2 shadow-md hover:shadow-xl transition-all ease-in-out duration-300 gap-2 w-[20rem] rounded-[20px] ">
                <img src={rocket} alt="" />
                <p className="lg:text-2xl md:text-xl text-lg font-bold">
                  join our community.
                </p>
              </div>
              <div className="lg:flex hidden flex-col justify-center items-center text-center p-3">
                <img
                  src={vector1}
                  alt="img/vector.svg"
                  className="w-auto lg:inline-block hidden"
                />
              </div>
              <div className="lg:flex hidden flex-col justify-center items-center text-center p-3">
                <img
                  src={vector2}
                  alt="img/vector.svg"
                  className="w-auto lg:inline-block hidden"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-3 border-2 shadow-md hover:shadow-xl transition-all ease-in-out duration-300 gap-2 w-[20rem] rounded-[20px]">
                <img src={pencil} alt="" />
                <p className="lg:text-2xl md:text-xl text-lg font-bold">
                  apply to become a creator.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center p-3 border-2 shadow-md hover:shadow-xl transition-all ease-in-out duration-300 gap-2 w-[20rem] rounded-[20px]">
                <img src={cup} alt="" />
                <p className="lg:text-2xl md:text-xl text-lg font-bold">
                  earn incentives.
                </p>
              </div>
              <div className="lg:flex hidden flex-col justify-center items-center text-center p-3">
                <img
                  src={vector1}
                  alt="img/vector.svg"
                  className="w-auto lg:inline-block hidden"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 z-[100]">
              <div className="flex flex-col justify-center items-center text-center gap-1">
                <p className="lg:text-lg md:text-base text-sm text-[#525252]">
                  you share your knowledge with other,
                </p>
                <p className="lg:text-lg md:text-base text-sm text-[#525252]">
                  we provide you a platform and incentivise you.
                </p>
              </div>
              <button className="uppercase bg-[#6921EF] font-bold lg:text-2xl md:text-xl text-lg text-center text-white px-7 py-3 rounded-[12px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
                join us
              </button>
            </div>
            <div className="hidden lg:flex absolute w-auto justify-center items-center h-full">
              <img src={line} alt="" className="h-[50rem]" />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden absolute md:top-[8rem] z-[-100] top-[4rem] right-[1rem] md:right-[5rem] w-auto justify-center items-center">
          <img src={vector1} alt="" />
        </div>
        <div className="flex lg:hidden absolute md:left-[6rem] left-[1rem] w-auto justify-center items-center">
          <img src={vector2} alt="" />
        </div>
        <div className="flex lg:hidden absolute md:bottom-[10rem] left-[2rem] bottom-[7rem] md:left-[9rem] w-auto justify-center items-center">
          <img src={vector1} alt="" />
        </div>
      </section>
    </>
  );
};

export default Creator;
