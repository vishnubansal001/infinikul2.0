import React from 'react';
import CourseCard from '../UI/CourseCard';

const CoursesSection = () => {
  return (
    <div className="grid grid-rows-2 mt-12 bg-cover">
      <div>
        <h1 className="text-[70px] font-extrabold mt-6">learn and <br />
          earn with us.
        </h1>
        <h1 className="text-[25px] font-bold text-gray-600">
          enhance your skills and share your <br />
          knowledge with the community.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-12">
        <div>
          <CourseCard title="Course 1" author="Author 1" price="29" />
        </div>

        <div className="mt-5">
          <CourseCard title="Course 2" author="Author 2" price="29" />
        </div>

        <div>
          <CourseCard title="Course 3" author="Author 3" price="29" />
        </div>
      </div>

      <div className="lg:mt-12 text-[20px] text-gray-400">
        share your knowledge and get incentivized for doing <br />
        that while at the same time learning skills yourself.
      </div>

      <div>
        <button className="bg-[#4343b1] w-[200px] h-[54px] text-[20px] text-white font-bold rounded-3xl mt-12">join us</button>
      </div>
    </div>
  );
};

export default CoursesSection;
