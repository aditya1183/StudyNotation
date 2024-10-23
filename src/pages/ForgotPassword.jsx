import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authAPI";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };
  return (
    <div className="text-white flex justify-center items-center translate-y-1/2">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="w-11/12 max-w-[500px] mx-auto">
          <h1 className="text-richblack-5 font-semibold font-inter text-3xl">
            {!emailSent ? "Reset Your Password" : "Check Your Email"}
          </h1>
          <p className="text-richblack-100 font-normal text-base mt-3">
            {!emailSent
              ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : `We have sent the reset email to ${email}`}
          </p>

          <form
            onSubmit={handleOnSubmit}
            className="mt-6 flex w-full flex-col gap-y-4"
          >
            {!emailSent && (
              <label className="w-full">
                <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
                  Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]"
                />
              </label>
            )}
            <button
              type="submit"
              className="mt-6 rounded-[8px] bg-yellow-50 text-richblack-900 p-3 font-medium text-base"
            >
              {!emailSent ? "Reset Password" : "Reset email"}
            </button>
          </form>

          <div>
            <Link to="/login" className="w-full flex items-center gap-2 font-medium text-base p-3 mt-3">
              <LiaLongArrowAltLeftSolid />
              <p className="font-medium text-base">Back to login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
