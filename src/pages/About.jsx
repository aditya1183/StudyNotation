import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import BannerImg1 from "../assets/Images/aboutus1.webp";
import BannerImg2 from "../assets/Images/aboutus2.webp";
import BannerImg3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/About/Quote";
import FoundingStory from "../assets/Images/FoundingStory.png";
import StatsComponent from "../components/core/About/StatsComponent";
import LearnigGrid from "../components/core/About/LearnigGrid";
import ContactFormSection from "../components/core/About/ContactFormSection";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";

const About = () => {
  return (
    <div className="text-white">
      <section className="text-center pt-[100px] mx-auto w-11/12 max-w-maxContent">
        <div>
          <header className="w-[70%] text-richblack-5 font-semibold text-4xl mx-auto mb-12">
            <p className="text-richblack-200 font-medium text-base mb-12">
              About us
            </p>
            Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} />
            <p className="text-richblack-200 font-medium text-base mt-4">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="flex flex-col lg:flex-row lg:gap-x-3 gap-y-3 justify-between">
            <img src={BannerImg1} alt="Banner" />
            <div className="relative lg:flex justify-center hidden">
              <div className="absolute z-0 rounded-[350px] opacity-75 bg-color5 blur-xl w-[90%] h-1/2 -top-2" />
              <img src={BannerImg2} alt="Banner" className="relative z-10" />
            </div>
            <img className="lg:flex hidden" src={BannerImg3} alt="Banner" />
          </div>
        </div>
      </section>

      <section className="py-20 text-center font-semibold text-4xl text-richblack-100 mx-auto w-11/12 max-w-maxContent">
        <div>
          <Quote />
        </div>
      </section>

      <section className="py-20 mx-auto w-11/12 max-w-maxContent">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col lg:flex-row">
            <div className="p-8 lg:w-1/2 w-full">
              <h1 className="bg-color6 bg-clip-text text-transparent text-4xl font-semibold pb-6">
                Our Founding Story
              </h1>
              <p className="pb-4 text-base font-medium text-richblack-300">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="pb-4 text-base font-medium text-richblack-300">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            <div className="p-8 lg:w-1/2 w-full flex justify-end relative">
              <div className="absolute h-[50%] w-[70%] rounded-[350px] bg-color7 blur-xl opacity-20 left-0 top-0" />
              <img src={FoundingStory} alt="Founders" className="relative" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="p-8 lg:w-1/2 w-full">
              <h1 className="bg-color5 bg-clip-text text-transparent font-semibold text-4xl pb-6">
                Our Vision
              </h1>
              <p className="pb-4 text-base font-medium text-richblack-300">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="p-8 lg:w-1/2 w-full">
              <h1 className="bg-color2 bg-clip-text text-transparent font-semibold text-4xl pb-6">
                Our Mission
              </h1>
              <p className="pb-4 text-base font-medium text-richblack-300">
                our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponent />

      <section className="py-20 mx-auto flex items-center justify-center w-11/12 max-w-maxContent">
        <LearnigGrid />
      </section>

      <section className="mx-auto flex items-center justify-center w-11/12 max-w-maxContent mb-20">
        <ContactFormSection aboutUs />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
        <ReviewSlider />
      </div>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default About;
