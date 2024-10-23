import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponent = () => {
  return (
    <section className="py-20 px-32 bg-richblack-800 border-b border-richblack-700">
      <div>
        <div className="gap-10 justify-center place-items-center grid grid-cols-2 md:grid-cols-4 text-center">
            {Stats.map((data, index) => {
                return (
                    <div key={index} className="w-[25%] text-center flex flex-col gap-3">
                        <h1 className="font-bold text-3xl text-richblack-5">
                            {data.count}
                        </h1>
                        <h2 className="text-richblack-500 font-semibold text-base font-inter">
                            {data.label}
                        </h2>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
};

export default StatsComponent;
