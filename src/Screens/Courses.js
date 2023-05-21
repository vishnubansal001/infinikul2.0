import React from "react";
// import TopBar from "./TopBar";
// import SideBar from "./SideBar";
import CardCont from "../Components/CardCont";


import rocket from "../assets/rocket-dynamic-gradient.svg";
import { ReactComponent as DashboardIcon } from "../assets/dashboard_icon.svg";
import { ReactComponent as CoursesIcon } from "../assets/coursesIcon.svg";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as LogoIcon } from "../assets/logoFull.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as BellIcon } from "../assets/bell.svg";


const mainAnchorClassName =
    "font-bold flex flex-row gap-2 items-center p-2 rounded-r-2xl bg-white mr-10" +
    " ";

const SideBar = () => {
    return (
        <div className="w-full h-full shadow-[1px_0_15px_1px_rgba(0,0,0,0.1)] z-10 flex flex-col">
            <div className="flex flex-col gap-3 mt-10">
                <a
                    href="#"
                    className={mainAnchorClassName + " hover:drop-shadow-xl"}
                >
                    <DashboardIcon />
                    dashboard.
                </a>
                <a href="#" className={mainAnchorClassName + "drop-shadow-xl "}>
                    <CoursesIcon />
                    courses.
                </a>
            </div>
            <div className="w-9/12 m-auto p-5 bg-[#6921ef] rounded-3xl mb-10">
                <p
                    className="text-white text-2xl font-bold pb-10 bg-no-repeat bg-right-bottom"
                    style={{
                        backgroundImage: `url(${rocket})`,
                    }}
                >
                    apply as a <br />
                    creator.
                </p>
                <a href="#" className="text-[#6921ef] text-xs w-full py-3 uppercase bg-white rounded-2xl font-bold flex items-center justify-center gap-2">
                    get started <ArrowRight />
                </a>
            </div>
        </div>
    );
};
const TopBar = () => {
    const notiCount = 10;
    return (
        <div className="col-span-2 w-full h-full grid grid-cols-3 content-center items-center shadow-lg z-20 ">
            <a href="/" className="justify-self-start ml-10">
                <LogoIcon />
            </a>
            <div className="justify-self-center relative h-fit">
                <input
                    type="text"
                    name="search"
                    placeholder="search"
                    className="rounded-2xl w-[23em] outline-none border-2 border-[#d9d9d9] p-2 pl-12 drop-shadow-xl focus:border-[#6921ef] transition-all duration-300 ease-in-out"
                />
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <div className="justify-self-end flex gap-3 items-center mr-10">
                <button
                    className={`w-14 h-14 relative grid place-items-center outline-none rounded-full overflow-hidden`}
                >
                    {(notiCount > 0 )&& <span className={`w-[1.5rem] h-[0.94rem] font-bold absolute right-2 top-2 text-center text-sm bg-white rounded-full`} >{  notiCount > 9 ? "9+" : notiCount.toString()}</span>}
                    <BellIcon />
                </button>
                <button className="w-14 h-14 bg-gray-300 outline-none rounded-full overflow-hidden">
                    {/* <img src="" alt="" /> */}
                </button>
            </div>
        </div>
    );
};

const DATA = [
    {
        category: "🚀physics",
        courses: [
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
        ],
    },
    {
        category: "🚀physics",
        courses: [
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
        ],
    },
    {
        category: "🚀physics",
        courses: [
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
            {
                preview: null,
                courseName: "the complete quantum mechanics",
                courseCreator: "Anurag",
                rating: 4.5,
                price: 500,
                courseLink: "#",
            },
        ],
    },
];

const Hero = () => {
    return (
        <div
            className={
                "h-screen w-full select-none grid"
                // + "grid-rows-[100px_calc(100vh - 100px)] grid-cols-[296px_calc(100vw - 296px)]"
            }
            style={{
                display: "grid",
                gridTemplateRows: "100px calc(100vh - 100px)",
                gridTemplateColumns: "296px calc(100vw - 296px)",
            }}
        >
            <TopBar />
            <SideBar />
            <div className="bg-[#fcfcfc] pl-20 overflow-y-auto">
                <h1 className="font-bold text-[2em] pt-5">hey, Mayank !</h1>
                {DATA.map((data, i) => (
                    <CardCont
                        courseCategory={data.category}
                        courses={data.courses}
                        key={data.category + "-" + i}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
