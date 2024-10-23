import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../services/operations/authAPI";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

const UpdatePassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const location = useLocation();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { loading } = useSelector((state) => state.auth);

  const { password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };
  return (
    <div className="text-white flex justify-center items-center translate-y-1/2">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="w-11/12 max-w-[500px] mx-auto">
          <h1 className="text-richblack-5 font-semibold font-inter text-3xl">
            Choose new password
          </h1>
          <p className="text-richblack-100 font-normal text-base mt-3">
            Almost done. Enter your new password and youre all set.
          </p>

          <form
            onSubmit={handleOnSubmit}
            className="mt-6 flex w-full flex-col gap-y-4"
          >
            <label className="w-full relative">
              <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                New password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter your new passowrd"
                className="w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] cursor-pointer z-10"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
            <label className="w-full relative">
              <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                Confirm new password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm your new passowrd"
                className="w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]"
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] cursor-pointer z-10"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
            <button
              type="submit"
              className="mt-6 rounded-[8px] bg-yellow-50 text-richblack-900 p-3 font-medium text-base"
            >
              Reset Password
            </button>
          </form>

          <div>
            <Link
              to="/login"
              className="w-full flex items-center gap-2 font-medium text-base p-3 mt-3"
            >
              <LiaLongArrowAltLeftSolid />
              <p className="font-medium text-base">Back to login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
