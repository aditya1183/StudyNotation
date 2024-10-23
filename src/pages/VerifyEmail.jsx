import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { Link, useNavigate } from "react-router-dom";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { GoHistory } from "react-icons/go";
import OTPInput from "react-otp-input";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const { signupData, loading } = useSelector((state) => state.auth);

    useEffect(() => {
      if (!signupData) {
        navigate("/signup");
      }
    });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;
    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };
  return (
    <div className="text-white flex justify-center items-center translate-y-1/2">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="w-11/12 max-w-[500px] mx-auto">
          <h1 className="text-richblack-5 font-semibold font-inter text-3xl">
            Verify email
          </h1>
          <p className="text-richblack-100 font-normal text-base mt-3">
            A verification code has been sent to you. Enter the code below
          </p>

          <form onSubmit={handleOnSubmit} className="mt-6 flex w-full flex-col">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  className="bg-richblack-800 text-richblack-5 w-full h-full rounded-md shadow-[0px_-1px_0px_0px_rgba(255,255,255,0.18)_inset;]"
                  placeholder="-"
                />
              )}
              containerStyle={{ justifyContent: "space-between" }}
              inputStyle={{ height: "48px", width: "58px", padding: "12px" }}
            />
            <button
              type="submit"
              className="mt-6 rounded-[8px] bg-yellow-50 text-richblack-900 p-3 font-medium text-base"
            >
              Verify email
            </button>
          </form>

          <div className="flex mt-3">
            <Link
              to="/login"
              className="w-1/2 flex items-center gap-2 font-medium text-base p-3"
            >
              <LiaLongArrowAltLeftSolid />
              <p className="font-medium text-base">Back to login</p>
            </Link>
            <button
              onClick={() => dispatch(sendOtp(signupData.email, navigate))}
              className="w-1/2 flex items-center gap-2 font-medium text-base p-3 justify-end bg-transparent text-blue-100"
            >
              <GoHistory />
              Resend it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
