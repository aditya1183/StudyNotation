import React from "react";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subHeading,
  ctaBtn1,
  ctaBtn2,
  codeBlock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between`}>
      <div className="w-fit lg:w-[50%] flex flex-col gap-8">
        {heading}
        <div className="text-richblack-300 font-medium">{subHeading}</div>
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctaBtn1?.active} linkTo={ctaBtn1?.linkTo}>
            <div className="flex gap-2 text-center items-center">
              {ctaBtn1?.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctaBtn2?.active} linkTo={ctaBtn2?.linkTo}>
            {ctaBtn2?.btnText}
          </CTAButton>
        </div>
      </div>

      <div className="relative max-md:mt-6">
        <div
          className={`absolute code-border w-[75%] h-[90%] top-[-32px] left-[-32px] rounded-full opacity-[0.20000000298023224] blur-[34px] ${backgroundGradient}`}
        ></div>
        <div className="h-fit flex flex-row text-xs lg:text-sm w-[100%] py-4 lg:w-[500px] backdrop-blur-xl bg-transparentBg">
          <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
          </div>

          <div
            className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}
          >
            <TypeAnimation
              sequence={[codeBlock, 5000, ""]}
              repeat={Infinity}
              omitDeletionAnimation={true}
              style={{ whiteSpace: "pre-line", display: "block" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
