import RenderSteps from "./RenderSteps";

export default function AddCourse() {
  return (
    <>
      <div className="flex flex-col max-md:gap-4 md:flex-row w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col w-full">
          <div>
            <RenderSteps />
          </div>
        </div>
        <div className="md:w-2/5 bg-richblack-800 text-white h-max p-6 flex flex-col gap-5 rounded-md border-richblack-700 border-[1px]">
          <p className="text-lg font-semibold font-inter">⚡️ Code Upload Tips</p>
          <ul className="list-disc px-4 text-sm font-medium flex flex-col gap-2 font-inter">
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>
              Add Topics in the Course Builder section to create lessons,
              quizzes, and assignments.
            </li>
            <li>
              Information from the Additional Data section shows up on the
              course single page.
            </li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled students at once.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
