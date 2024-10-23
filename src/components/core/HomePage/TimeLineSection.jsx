import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
  {
    logo: Logo1,
    heading: "Leadership",
    description: "Fully committed to the success company",
    dashedLine: true,
  },
  {
    logo: Logo2,
    heading: "Responsibility",
    description: "Students will always be our top priority",
    dashedLine: true,
  },
  {
    logo: Logo3,
    heading: "Flexibility",
    description: "The ability to switch is an important skills",
    dashedLine: true,
  },
  {
    logo: Logo4,
    heading: "Solve the problem",
    description: "Code your way to a solution",
    dashedLine: false,
  }
]
const TimeLineSection = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-14 items-center w-full mb-20'>
        <div className='w-full lg:w-[45%] flex flex-col'>
          {timeline.map((element, index) => {
            return (
              <div className='flex flex-row gap-6' key={index}>
                <div className='flex flex-col'>
                  <div className='w-[50px] h-[50px] bg-white items-center flex justify-center rounded-full shadow-[0px_0px_62px_0px_rgba(0,0,0,0.12)]'>
                    <img src={element.logo} alt='Timeline logo' />
                  </div>
                  {element.dashedLine ? <div className='border-l border-richblack-100 border-dashed items-center h-10 self-center my-4'></div> : ""}
                </div>
                <div>
                  <h2 className='font-semibold text-lg'>{element.heading}</h2>
                  <p className='text-base'>{element.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className='relative'>
          <div className='flex justify-center'>
            <img src={timelineImage} alt='Timeline' className=' shadow-white object-cover h-fit z-10' />
            <div className='w-[100%] h-[80%] items-center blur-[34px] bg-color1 absolute'></div>
          </div>

          <div className='absolute bg-caribbeangreen-700 flex max-sm:flex-col flex-row text-white uppercase max-sm:py-2 py-10 left-[50%] translate-x-[-50%] translate-y-[-50%] z-10'>
            <div className='px-10 max-sm:py-4 flex flex-row items-center gap-5 max-sm:border-b sm:border-r border-caribbeangreen-300'>
              <p className='text-3xl font-bold'>10</p>
              <p className='text-caribbeangreen-300 text-sm'>YEARS
                EXPERIENCES</p>
            </div>
            <div className='px-10 max-sm:py-4 flex flex-row items-center gap-5'>
              <p className='text-3xl font-bold'>250</p>
              <p className='text-caribbeangreen-300 text-sm'>TYPES OF
                COURSES</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TimeLineSection