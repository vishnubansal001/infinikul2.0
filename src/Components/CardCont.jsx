import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import { ReactComponent as ChevronRight } from "../assets/chevron-right.svg";

const CardCont = ({ courseCategory, courses }) => {
    const mainRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    /**
     * 1  - to right
     * -1 - to left
     */
    const btnScroll = (side = 1) => {
        if (mainRef.current) {
            mainRef.current.scrollBy({
                left: mainRef.current.offsetWidth * side,
                behavior: "smooth",
            });
            setTimeout(() => {
                setScrollLeft(mainRef.current.scrollLeft);
            }, 500);
        }
    };

    return (
        <div className="pt-4 relative">
            <div className="py-3 text-2xl font-semibold">{courseCategory}</div>
            <div
                className="flex flex-row gap-5 overflow-scroll md:overflow-hidden pb-4"
                ref={(node) => {
                    mainRef.current = node;
                    if (node) setMaxScroll(node.scrollWidth - node.offsetWidth);
                    else setMaxScroll(0);
                }}
            >
                <button
                    className={`absolute top-1/2 left-2 w-10 h-10 p-1 rounded-xl bg-white place-items-center z-10 hidden md:grid`}
                    style={{
                        display: scrollLeft - 20 > 0 ? "" : "none",
                    }}
                    onClick={() => btnScroll(-1)}
                >
                    <ChevronRight className="-rotate-180" />
                </button>
                {courses.map((course, i) => (
                    <Card
                        courseCreator={course.courseCreator}
                        courseName={course.courseName}
                        preview={course.preview}
                        price={course.price}
                        rating={course.rating}
                        courseLink={course.courseLink}
                        key={course.courseName + "-" + i}
                    />
                ))}
                <button
                    className="absolute top-1/2 right-2 w-10 h-10 p-1 rounded-xl bg-white place-items-center z-10 hidden md:grid"
                    style={{
                        display: scrollLeft + 20 < maxScroll ? "" : "none",
                    }}
                    onClick={() => btnScroll(1)}
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

export default CardCont;
