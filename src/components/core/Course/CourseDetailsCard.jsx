import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_TYPE } from "../../../utils/constants";
import { addToCart } from "../../../slices/cartSlice";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { FaShareSquare } from "react-icons/fa"

const CourseDetailsCard = ({
  course,
  setConfirmationModal,
  handleBuyCourse,
}) => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    thumbnail: ThumbnailImage,
    price: CurrentPrice,
    // _id: courseId,
  } = course;

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor, you cant buy a course");
      return;
    }

    if (token) {
      dispatch(addToCart(course));
      return;
    }
    setConfirmationModal({
      text1: "you are not logged in",
      text2: "Please login to add to cart",
      btn1text: "login",
      btn2Text: "cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  const handleShare = () => {
    copy(window.location.href);
    toast.success("Link Copied to Clipboard");
  };
  return (
    <div className="flex flex-col gap-4 rounded-md bg-richblack-700 p-4 text-richblack-5">
      <img
        src={ThumbnailImage}
        alt={course?.courseName}
        className="max-h-[220px] min-h-[180px]  w-[400px] overflow-hidden rounded-2xl object-cover md:max-w-full"
      />
      <div className="p-4 flex flex-col gap-y-4">
        <div className="text-richblack-5 text-3xl font-bold">
          Rs. {CurrentPrice}
        </div>
        <div className="flex flex-col gap-y-6">
          <button
            className="bg-yellow-50 w-full text-richblack-900 py-3 rounded-lg"
            onClick={
              user && course?.studentsEnrolled.includes(user?._id)
                ? () => navigate("/dashboard/enrolled-courses")
                : handleBuyCourse
            }
          >
            {user && course?.studentsEnrolled.includes(user?._id)
              ? "Go to Course "
              : "Buy Now"}
          </button>

          {!course?.studentsEnrolled.includes(user?._id) && (
            <button
              onClick={handleAddToCart}
              className="bg-richblack-800 text-richblack-5 w-full py-3 rounded-lg"
            >
              Add to Cart
            </button>
          )}
        </div>
        <div className="flex justify-center text-richblack-25">
          <p>30-Day Money-Back Guarantee</p>
        </div>
        <div>
          <p className="text-richblack-5">This Course Includes:</p>
          <div className="flex flex-col gap-y-1 text-caribbeangreen-100">
            {course?.instructions?.map((item, index) => (
              <p className="flex gap-2" key={index}>
                · <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div>
          <button
            className="mx-auto flex items-center gap-2 p-6 text-yellow-100"
            onClick={handleShare}
          >
            <FaShareSquare size={15} /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsCard;
