import React from 'react'
import instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from './Button'
import { FaArrowRight } from 'react-icons/fa'

const Instructor = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row gap-20 items-center'>
                <div className='w-full lg:w-[50%]'>
                    <img src={instructor} alt='Instructor' className='shadow-videoGrey2Sm lg:shadow-videoGrey2' />
                </div>
                <div className='w-full lg:w-[50%] flex flex-col gap-4'>
                    <div className='text-4xl font-semibold w-[50%]'>
                        Become an
                        <HighlightText text={"instructor"} />
                    </div>

                    <p className='font-medium text-base w-[90%] text-richblack-300'>
                        Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                    </p>

                    <div className='w-fit mt-10'>
                        <CTAButton active linkTo={"/signup"}>
                            <div className='flex flex-row gap-3 items-center'>
                                Start Teaching Today
                                <FaArrowRight />
                            </div>
                        </CTAButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Instructor