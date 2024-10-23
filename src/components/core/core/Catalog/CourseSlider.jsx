import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper/modules";
import CourseCard from "./CourseCard";

const CourseSlider = ({ Courses }) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={25}
          modules={[FreeMode, Pagination]}
          className="max-h-[30rem]"
          breakpoints={{
            1024: { slidesPerView: 3 },
          }}
        >
          {Courses?.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  );
};

export default CourseSlider;
