import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import ExploreMoreNow from "../components/core/HomePage/ExploreMoreNow";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguage from "../components/core/HomePage/LearningLanguage";
import Instructor from "../components/core/HomePage/Instructor";
// import ReviewSlider from "../components/common/ReviewSlider";
import Footer from "../components/common/Footer"

function Home() {
  return (
    <>
      {/* // section first start */}
      <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
        <Link to={"/signup"}>
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-medium text-base text-richblack-200 transition-all duration-200 hover:scale-95 w-fit shadow-button3">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future With
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className="mt-4 w-[75%] text-center text-lg font-medium text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active linkTo={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton linkTo={"/login"}>Book a Demo</CTAButton>
        </div>

        <div className="mx-3 my-12 shadow-videoGreySm lg:shadow-videoGrey relative">
          <div className="items-center h-72 w-full absolute rounded-[992px] opacity-[0.4000000059604645] bg-color1 blur-[30px]"></div>
          <video muted loop autoPlay className="z-10 relative">
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        <div>
          <CodeBlocks
            position={"lg:flex-row flex-col"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential "} />
                with our online courses.
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctaBtn1={{
              btnText: "Try it Yourself",
              linkTo: "/signup",
              active: true,
            }}
            ctaBtn2={{ btnText: "Learn More", linkTo: "/login", active: false }}
            codeBlock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            codeColor={"text-yellow-25"}
            backgroundGradient={"bg-color3"}
          />
        </div>

        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse flex-col"}
            heading={
              <div className="text-4xl font-semibold">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subHeading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctaBtn1={{
              btnText: "Continue Lesson",
              linkTo: "/signup",
              active: true,
            }}
            ctaBtn2={{ btnText: "Learn More", linkTo: "/login", active: false }}
            codeBlock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            codeColor={"text-yellow-25"}
            backgroundGradient={"bg-color2"}
          />
        </div>

        <ExploreMoreNow />
      </div>

      {/* section one end here  */}

      {/* section  2  */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage-bg h-[125px] lg:h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto justify-between">
            <div className="lg:h-[200px]"></div>
            <div className="flex flex-row gap-7 text-white">
              <CTAButton active linkTo={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton linkTo={"/signup"}>Learn More</CTAButton>
            </div>
          </div>
        </div>

        <div className="w-11/12 max-w-maxContent mx-auto flex flex-col items-center justify-between gap-7 mt-12 lg:mt-24 mb-20">
          <div className="flex flex-col lg:flex-row gap-5 mb-12">
            <div className="text-4xl font-semibold w-[100%] lg:w-[50%]">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col gap-10 items-start w-[100%] lg:w-[50%]">
              <div className="text-base">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active linkTo={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>

          <TimeLineSection />

          <LearningLanguage />
        </div>
      </div>
      {/* section 2 end here  */}

      {/* section 3  */}


      <div className="w-11/12 max-w-maxContent mx-auto flex flex-col items-center justify-between gap-8 mt-12 lg:mt-24 mb-20 bg-richblack-900 text-white">
        <Instructor />

        <h2 className="text-4xl  text-center font-semibold mt-20">
          Reviews from other learners
        </h2>
        {/* <ReviewSlider /> */}
      </div>
      <Footer/>
    </>
  );
}

export default Home;
