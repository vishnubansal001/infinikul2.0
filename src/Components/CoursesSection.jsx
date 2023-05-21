import React from "react";
import CourseCard from "../UI/CourseCard";
import cardpic from "../assets/cardpic.png";

const CoursesSection = () => {
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full relative">
        <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
          <div className="flex flex-col items-center justify-center lg:gap-12 md:gap-10 gap-8">
            <div className="flex flex-col justify-center items-center text-center gap-4 text-black">
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <h1 className="font-bold lg:text-6xl md:text-5xl text-3xl ">
                  learn and
                </h1>
                <h1 className="font-bold lg:text-6xl md:text-5xl text-3xl ">
                  earn with us.
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <p className="lg:text-2xl md:text-xl text-lg text-[#525252]">
                  enhance your skills and share your
                </p>
                <p className="lg:text-2xl md:text-xl text-lg text-[#525252]">
                  knowledge with the community.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-5 lg:mt-[-2rem]">
              <div className="flex flex-col justify-start items-start border-2 rounded-[40px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="relative">
                  <img
                    src={cardpic}
                    alt="img/cardpic.png"
                    className="w-auto h-auto"
                  />
                  <p className="absolute right-[2rem] top-[1rem] z-10 bg-white px-2 rounded-[8px] shadow-md">
                    4.5
                  </p>
                </div>
                <div className="flex flex-col justify-start items-start w-full p-2">
                  <div className="flex flex-col justify-start items-start gap-1 text-black">
                    <h1 className="lg:text-xl md:text-lg text-base font-bold">
                      the complete quantum
                    </h1>
                    <h1 className="lg:text-xl md:text-lg text-base font-bold">
                      mechanics
                    </h1>
                  </div>
                  <div className="flex flex-row justify-between w-full p-2 items-start gap-1 text-black">
                    <p className="lg:text-lg md:text-base text-sm">Anurag</p>
                    <p className="lg:text-lg md:text-base text-sm">500</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start border-2 rounded-[40px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out lg:mt-[10rem]">
                <div className="relative">
                  <img
                    src={cardpic}
                    alt="img/cardpic.png"
                    className="w-auto h-auto"
                  />
                  <p className="absolute right-[2rem] top-[1rem] z-10 bg-white px-2 rounded-[8px] shadow-md">
                    4.5
                  </p>
                </div>
                <div className="flex flex-col justify-start items-start w-full p-2">
                  <div className="flex flex-col justify-start items-start gap-1 text-black">
                    <h1 className="lg:text-xl md:text-lg text-base font-bold">
                      the complete quantum
                    </h1>
                    <h1 className="lg:text-xl md:text-lg text-base font-bold">
                      mechanics
                    </h1>
                  </div>
                  <div className="flex flex-row justify-between w-full p-2 items-start gap-1 text-black">
                    <p className="lg:text-lg md:text-base text-sm">Anurag</p>
                    <p className="lg:text-lg md:text-base text-sm">500</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start border-2 rounded-[40px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="relative">
                  <img
                    src={cardpic}
                    alt="img/cardpic.png"
                    className="w-auto h-auto"
                  />
                  <p className="absolute right-[2rem] top-[1rem] z-10 bg-white px-2 rounded-[8px] shadow-md">
                    4.5
                  </p>
                </div>
                <div className="flex flex-col justify-start items-start w-full p-2">
                  <div className="flex flex-col justify-start items-start gap-1 text-black">
                    <h1 className="lg:text-xl md:text-lg text-base font-bold">
                      the complete quantum
                    </h1>
                    <h1 className="lg:text-xl md:text-lg text-base font-bold">
                      mechanics
                    </h1>
                  </div>
                  <div className="flex flex-row justify-between w-full p-2 items-start gap-1 text-black">
                    <p className="lg:text-lg md:text-base text-sm">Anurag</p>
                    <p className="lg:text-lg md:text-base text-sm">500</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center text-center gap-1">
                <p className="lg:text-lg md:text-base text-sm text-[#525252]">
                  share your knowledge and get incentivised for doing
                </p>
                <p className="lg:text-lg md:text-base text-sm text-[#525252]">
                  that while at the same time learning skills yourself.
                </p>
              </div>
              <button className="uppercase bg-[#6921EF] font-bold lg:text-2xl md:text-xl text-lg text-center text-white px-7 py-3 rounded-[12px] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
                join us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesSection;
