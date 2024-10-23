import React from "react";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 py-8 lg:px-36 lg:py-14 bg-richblack-800">
      <div className="flex flex-row justify-between">
        {/* {Section 1} */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between w-[45%]">
          <div className="flex flex-col gap-3">
            <img className="h-auto w-auto" src={Logo} alt="logo" />
            <div className="text-richblack-100 font-medium font-inter text-xl">
              Company
            </div>
            <div className="flex flex-col gap-2 text-richblack-400 font-normal font-inter text-sm">
              <Link to={"/login"}>About</Link>
              <Link to={"/login"}>Careers</Link>
              <Link to={"/login"}>Affiliates</Link>
            </div>
            <div></div>
          </div>

          <div className="flex flex-col gap-3 ">
            <div className="text-richblack-100 font-medium font-inter text-xl">
              Resources
            </div>
            <div className="flex flex-col gap-2 text-richblack-400 font-normal font-inter text-sm mb-9">
              <Link to={"/login"}>Articles</Link>
              <Link to={"/login"}>Blog</Link>
              <Link to={"/login"}>Chart Sheet</Link>
              <Link to={"/login"}>Code challenges</Link>
              <Link to={"/login"}>Docs</Link>
              <Link to={"/login"}>Projects</Link>
              <Link to={"/login"}>Videos</Link>
              <Link to={"/login"}>Workspaces</Link>
            </div>

            <div className="text-richblack-100 font-medium font-inter text-xl">
              Support
            </div>
            <div className="flex flex-col gap-2 text-richblack-400 font-normal font-inter text-sm mb-8">
              <Link to={"/login"}>Help Center</Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 ">
            <div className="text-richblack-100 font-medium font-inter text-xl">
              Plans
            </div>
            <div className="flex flex-col gap-2 text-richblack-400 font-normal font-inter text-sm mb-9">
              <Link to={"/login"}>Paid memberships</Link>
              <Link to={"/login"}>For students</Link>
              <Link to={"/login"}>Business solutions</Link>
            </div>

            <div className="text-richblack-100 font-medium font-inter text-xl">
              Community
            </div>
            <div className="flex flex-col gap-2 text-richblack-400 font-normal font-inter text-sm mb-8">
              <Link to={"/login"}>Forums</Link>
              <Link to={"/login"}>Chapters</Link>
              <Link to={"/login"}>Events</Link>
            </div>
          </div>
        </div>
        {/* {Section 2} */}
        <div className="hidden lg:flex border border-richblack-700"></div>
        {/* {Section 3} */}
        <div className="w-[45%]">
          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            <div className="flex flex-col gap-3">
              <div className="text-richblack-100 font-medium font-inter text-xl">
                Subjects
              </div>
              <div className="flex flex-col gap-2 text-richblack-400 font-normal font-inter text-sm">
                <Link to={"/login"}>AI</Link>
                <Link to={"/login"}>Cloud Computing</Link>
                <Link to={"/login"}>Code Foundations</Link>
                <Link to={"/login"}>Computer Science</Link>
                <Link to={"/login"}>Cybersecurity</Link>
                <Link to={"/login"}>Data Analytics</Link>
                <Link to={"/login"}>Data Science</Link>
                <Link to={"/login"}>Data Visualization</Link>
                <Link to={"/login"}>Developer Tools</Link>
                <Link to={"/login"}>DevOps</Link>
                <Link to={"/login"}>Game Development</Link>
                <Link to={"/login"}>IT</Link>
                <Link to={"/login"}>Machine Learning</Link>
                <Link to={"/login"}> Math</Link>
                <Link to={"/login"}> Mobile Development</Link>
                <Link to={"/login"}> Web Design</Link>
                <Link to={"/login"}> Web Development</Link>
              </div>
            </div>

            <div className="flex flex-col gap-3 ">
              <div className="text-richblack-100 font-medium font-inter text-xl">
                Languages
              </div>
              <div className="flex flex-col gap-2 text-richblack-400 font-normal font-inter text-sm mb-9">
                <Link to={"/login"}>Bash</Link>
                <Link to={"/login"}>C</Link>
                <Link to={"/login"}>C++</Link>
                <Link to={"/login"}>C#</Link>
                <Link to={"/login"}>Go</Link>
                <Link to={"/login"}>HTML & CSS</Link>
                <Link to={"/login"}>Java</Link>
                <Link to={"/login"}>JavaScript</Link>
                <Link to={"/login"}>Kotlin</Link>
                <Link to={"/login"}>PHP</Link>
                <Link to={"/login"}>Python</Link>
                <Link to={"/login"}>R</Link>
                <Link to={"/login"}>Ruby</Link>
                <Link to={"/login"}>SQL</Link>
                <Link to={"/login"}>Swift</Link>
              </div>
            </div>

            <div className="flex flex-col gap-3 ">
              <div className="text-richblack-100 font-medium font-inter text-xl">
                Career Building
              </div>
              <div className="flex flex-col gap-2 text-richblack-400 font-normal font-inter text-sm mb-9">
                <Link to={"/login"}>Paid memberships</Link>
                <Link to={"/login"}>For students</Link>
                <Link to={"/login"}>Business solutions</Link>
              </div>

              <div className="text-richblack-100 font-medium font-inter text-xl">
                Community
              </div>
              <div className="flex flex-col gap-2 text-richblack-400 font-normal font-inter text-sm mb-8">
                <Link to={"/login"}>Career paths</Link>
                <Link to={"/login"}>Career services</Link>
                <Link to={"/login"}>Interview prep</Link>
                <Link to={"/login"}>Professional certification</Link>
                <Link to={"/login"}>-</Link>
                <Link to={"/login"}>Full Catalog</Link>
                <Link to={"/login"}>Beta Content</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-richblack-700 my-8"></div>
      <div className="flex flex-col lg:flex-row justify-between gap-4 items-center">
        <div className="font-inter font-medium text-sm text-richblack-300 flex flex-row gap-2">
          <Link to={"/login"}>Privacy Policy</Link>
          <div className="border border-richblack-700"></div>
          <Link to={"/login"}>Cookie Policy</Link>
          <div className="border border-richblack-700"></div>
          <Link to={"/login"}>Terms</Link>
        </div>
        <div className="font-inter font-medium text-sm text-richblack-300">
          Made with <span className="text-pink-200">♥</span> CodeHelp © 2023
          Studynotion
        </div>
      </div>
    </footer>
  );
};

export default Footer;
