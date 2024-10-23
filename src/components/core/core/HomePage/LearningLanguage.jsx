import React from 'react'
import HighlightText from './HighlightText'
import knowYourProgress from "../../../assets/Images/Know_your_progress.png"
import compareWithOthers from "../../../assets/Images/Compare_with_others.png"
import planYourLessons from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from './Button'

const LearningLanguage = () => {
  return (
    <>
      <div className='mt-12 lg:mt-20 flex flex-col gap-5'>
        <div className='text-4xl font-semibold text-center'>
          Your swiss knife <HighlightText text={"for learning any language"} />
        </div>

        <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[80%]'>
          Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center mt-5'>
          <img src={knowYourProgress} alt='Know your progress' className='object-contain lg:-mr-32' />
          <img src={compareWithOthers} alt='Know your progress' className='object-contain' />
          <img src={planYourLessons} alt='Know your progress' className='object-contain lg:-ml-36' />
        </div>

        <div className='flex flex-row items-center justify-center mx-auto'>
          <CTAButton active linkTo={'/signup'}>
            Learn More
          </CTAButton>
        </div>
      </div>
    </>
  )
}

export default LearningLanguage