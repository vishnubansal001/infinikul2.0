import React, { useState } from "react";
import signupcenter from "../assets/singupcenter.svg";
import signupbg from "../assets/signupbg.png";
import logo from "../assets/Logo.svg";

const SignUp = () => {
  const [btn, setBtn] = useState(false);

  const onclick = () => {
    setBtn(!btn);
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${signupbg})` }}
        className="bg-cover bg-center bg-no-repeat flex select-none items-center justify-center min-h-screen h-full relative"
      >
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col-reverse md:flex-row w-full lg:gap-12 md:gap-10 gap-8">
            <div className="md:w-[50%] w-full flex flex-col justify-between items-start p-10 h-screen bg-white md:rounded-r-[20px] md:rounded-tl-none rounded-t-[20px] lg:gap-10 gap-5">
              <div>
                <img src={logo} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-5 w-full">
                <div className="flex flex-col justify-center w-[90%] items-start gap-3">
                  <h1 className="font-bold lg:text-5xl text-[#272727] md:text-4xl text-3xl">
                    Join Us !
                  </h1>
                  <p className="font-normal lg:text-lg md:text-base text-sm text-[#525252] cursor-text">
                    become the part of an evergrowing students community.
                  </p>
                </div>
                <form
                  action=""
                  className="flex flex-col gap-5 md:justify-start md:items-start justify-center items-start md:w-[90%] w-full"
                >
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="name"
                    className="outline-none border-2 border-[#8D8D8D] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[90%]"
                  />
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="email"
                    className="outline-none border-2 border-[#8D8D8D] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[90%]"
                  />
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="password"
                    className="outline-none border-2 border-[#8D8D8D] shadow-md focus:shadow-xl transition-all duration-300 ease-in-out rounded-[12px] p-3 w-[90%]"
                  />
                  <div className="flex flex-row items-center justify-start gap-2">
                    <input
                      type="checkbox"
                      name="check"
                      id="check"
                      checked={btn}
                      className={`mt-1 rounded-md text-[#8D8D8D] border-[#8D8D8D]`}
                    />
                    <label
                      htmlFor="#check"
                      className="lg:text-lg md:text-base text-[#8D8D8D]"
                      onClick={onclick}
                    >
                      remember me
                    </label>
                  </div>
                </form>
                <button className="md:w-[90%] w-full uppercase text-white font-bold lg:text-lg md:text-base text-sm py-3 bg-[#6921EF] rounded-[20px] shadow-md hover:shadow-lg cursor-pointer text-center transition-all duration-300 ease-in-out">
                  sign up {"->"}
                </button>
                <p className="flex flex-row gap-2 text-[#525252] lg:text-base text-sm">
                  already have an account?
                  <a href="/" className="text-[#6921EF] underline">
                    Sign In
                  </a>
                </p>
              </div>
              <div className="text-center w-full">
                <p className="md:text-base text-sm text-[#525252]">
                  &copy; infinikul
                </p>
              </div>
            </div>
            <div className="md:w-[50%] w-[90%] md:h-screen h-[50vh] flex justify-center items-center mx-auto rounded-l-[20px]">
              <img src={signupcenter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;