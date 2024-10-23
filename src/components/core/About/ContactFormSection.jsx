import React from "react";
import ContactUsForm from "../../common/ContactUsForm";

const ContactFormSection = ({ aboutUs }) => {
  return (
    <div>
      <h1
        className={`mb-3 ${
          aboutUs ? "text-center" : "text-start"
        } text-4xl font-semibold text-richblack-5`}
      >
        {aboutUs
          ? "Get in Touch"
          : "Got a Idea? We’ve got the skills. Let’s team up"}
      </h1>
      <p
        className={`mb-8 text-richblack-300 font-medium text-base ${
          aboutUs ? "text-center" : "text-start"
        }`}
      >
        {aboutUs
          ? "We’d love to here for you, Please fill out this form."
          : "Tall us more about yourself and what you’re got in mind."}
      </p>
      <ContactUsForm />
    </div>
  );
};

export default ContactFormSection;
