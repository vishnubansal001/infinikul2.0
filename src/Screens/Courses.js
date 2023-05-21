import React, { useState } from "react";
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
import { ReactComponent as MenuIcon } from "../assets/menu-icon.svg";
import { ReactComponent as MenuIconClose } from "../assets/menu-icon-close.svg";


const SideBar = ({ isOpen, setSideBarOpen }) => {
    const mainAnchorClassName =
        "font-bold flex flex-row gap-2 items-center p-2 rounded-r-2xl bg-white mr-10" +
        " ";

    return (
        <div className={`absolute md:relative z-20 w-[80%] rounded-r-3xl md:rounded-none md:z-10 md:w-full h-full bg-white shadow-[1px_0_15px_1px_rgba(0,0,0,0.1)] flex-col md:flex ${isOpen ? "flex " : "hidden"}`}>
            <div className="mt-5 md:hidden flex flex-row items-center " >
                <button className="md:hidden w-14 h-14  grid place-items-center outline-none rounded-full" onClick={() => setSideBarOpen(init => !init)}>
                    <MenuIconClose />
                </button>
                <button className="w-14 h-14 bg-gray-300 outline-none rounded-full overflow-hidden ml-auto mr-10">
                    {/* <img src="" alt="" /> */}
                </button>
            </div>
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
const TopBar = ({ setSideBarOpen }) => {
    const notiCount = 10;
    return (
        <div className="col-span-2 w-full h-full grid grid-cols-3 content-center items-center shadow-lg z-20  ">
            <button className="md:hidden w-14 h-14  grid place-items-center outline-none rounded-full " onClick={() => setSideBarOpen(init => !init)}>
                <MenuIcon />
            </button>
            <a href="/" className="justify-self-start md:ml-10">
                <LogoIcon />
            </a>
            <div className="justify-self-center relative h-fit hidden md:block ">
                <input
                    type="text"
                    name="search"
                    placeholder="search"
                    className="rounded-2xl w-[23em] outline-none border-2 border-[#d9d9d9] p-2 pl-12 drop-shadow-xl focus:border-[#6921ef] transition-all duration-300 ease-in-out"
                />
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <div className="justify-self-end flex gap-3 items-center md:mr-10">
                <button
                    className={`w-14 h-14 relative grid place-items-center outline-none rounded-full overflow-hidden`}
                >
                    {(notiCount > 0) && <span className={`w-[1.5rem] h-[0.94rem] font-bold absolute right-2 top-2 text-center text-sm bg-white rounded-full`} >{notiCount > 9 ? "9+" : notiCount.toString()}</span>}
                    <BellIcon />
                </button>
                <button className="w-14 h-14 bg-gray-300 outline-none rounded-full overflow-hidden hidden md:block">
                    {/* <img src="" alt="" /> */}
                </button>
                <button className="w-14 h-14 outline-none rounded-full overflow-hidden grid place-items-center md:hidden">
                    <SearchIcon />
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

const Courses = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    return (
        <div
            className={
                "h-screen w-full select-none grid grid-rows-[100px_calc(100vh_-_100px)] grid-cols-[auto]  md:grid-cols-[296px_calc(100vw_-_296px)]"
            }
        >
            <TopBar setSideBarOpen={setSideBarOpen} />
            <SideBar isOpen={isSideBarOpen} setSideBarOpen={setSideBarOpen} />
            <div className="bg-[#fcfcfc] p-5 md:p-0 md:pl-20 overflow-y-auto">
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

export default Courses;
