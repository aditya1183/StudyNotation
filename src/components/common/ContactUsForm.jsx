import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiConnectors";
import { contactusEndpoint } from "../../services/apis";
import CountryCode from "../../data/countrycode.json";
import toast from "react-hot-toast";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    try {
      setLoading(true);
      const response = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      if (response?.status === 200) {
        toast.success("Message sent sccessfully!!")
      }
      setLoading(false);
    } catch (error) {
      console.log("Error:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);
  return (
    <>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <form onSubmit={handleSubmit(submitContactForm)}>
          <div className="flex flex-col gap-8">
            <div className="flex justify-between gap-5">
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="firstname"
                  className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter first name"
                  {...register("firstname", { required: true })}
                  className="w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]"
                />
                {errors.firstname && <span>Please enter your name</span>}
              </div>

              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="lastname"
                  className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Enter last name"
                  {...register("lastname")}
                  className="w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className="w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]"
              />
              {errors.email && <span>Please enter your email</span>}
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phoneNo"
                className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]"
              >
                Phone Number
              </label>
              <div className="flex flex-row gap-5">
                <select
                  name="dropdown"
                  id="dropdown"
                  {...register("countryCode", { required: true })}
                  className="bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem] w-[20%]"
                >
                  {CountryCode.map((element, index) => {
                    return (
                      <option key={index} value={element.code}>
                        {element.code} - {element.country}
                      </option>
                    );
                  })}
                </select>

                <input
                  type="number"
                  name="phoneNo"
                  id="phoneNo"
                  cols="30"
                  rows="7"
                  placeholder="12345 67890"
                  {...register("phoneNo", {
                    required: {
                      value: true,
                      message: "Please enter phone number",
                    },
                    maxLength: { value: 10, message: "Invalid phone number" },
                    minLength: { value: 8, message: "Invalid phone number" },
                  })}
                  className="bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem] w-full"
                />
              </div>
              {errors.phoneNo && <span>{errors.phoneNo.message}</span>}
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]"
              >
                Message
              </label>
              <textarea
                type="message"
                name="message"
                id="message"
                cols="30"
                rows="7"
                placeholder="Enter your message"
                {...register("message", { required: true })}
                className="w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem]"
              />
              {errors.email && <span>Please enter your message</span>}
            </div>

            <button
              type="submit"
              className="text-center text-base px-6 py-3 rounded-md font-bold bg-yellow-50 text-black shadow-button1"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ContactUsForm;
