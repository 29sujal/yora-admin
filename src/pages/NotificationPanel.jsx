import React from "react";
import frame from "../assets/frame.png";
import Shape from "../assets/Shape.png";
import group from "../assets/group.png";
import editIcon from "../assets/edit.png";      // Add your edit icon here
import deleteIcon from "../assets/delete.png";  // Add your delete icon here

const NotificationPanel = ({ onSendNowClick }) => {
  return (
    <section className="pt-[80px] px-4 py-6 flex flex-col lg:flex-row gap-8 overflow-x-hidden">
      {/* LEFT PANEL */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        {/* Notification TextArea */}
        <div>
          <p className="text-base font-semibold mb-2">Notification</p>
          <textarea
            placeholder="Type Here"
            className="w-full min-h-[144px] border border-gray-400 rounded-md p-4 resize-none"
          />
        </div>

        {/* Upload Image */}
        <div>
          <p className="text-base font-semibold mb-2">Notification image (optional)</p>
          <button className="w-[159px] h-10 bg-blue-600 text-white rounded-md text-sm font-medium mb-4">
            + Upload Image
          </button>
          <img src={frame} alt="upload" className="w-[69px] h-[64px]" />
        </div>

        {/* Deeplink */}
        <div>
          <p className="text-base mb-2">
            Deeplink (optional)
            <span className="text-gray-500 text-sm ml-1">eg yoraa/product/123</span>
          </p>
          <input
            type="text"
            placeholder="enter Deeplink eg yoraa/product/123"
            className="w-full max-w-[430px] h-12 border border-gray-400 rounded-md px-4"
          />
        </div>

        {/* Target Platform & Buttons */}
        <div>
          <p className="text-base font-semibold mb-2">Target platform</p>
          <input
            type="text"
            placeholder="android/ios"
            className="w-full max-w-[310px] h-12 border border-gray-400 rounded-md px-4 mb-4"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-[284px] h-[51px] rounded-full bg-gray-300 text-sm font-medium">
              save for later
            </button>
            <button
              onClick={onSendNowClick}
              className="w-full sm:w-[284px] h-[51px] rounded-full bg-black text-white text-sm font-medium"
            >
              send Now
            </button>
          </div>
        </div>

        {/* Stack Notification for Later */}
        <div>
          <p className="text-base font-semibold mb-4">Stack notification for later</p>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="w-full max-w-[400px] min-h-[66px] p-4 bg-gray-100 border border-gray-300 rounded-md flex justify-between items-start shadow"
              >
                <p className="text-sm leading-5">
                  Manage account and services linked to your Yoraa account
                </p>
                <div className="flex gap-1 items-center">
                  <img src={Shape} alt="info" className="w-5 h-5" />
                  <img src={editIcon} alt="edit" className="w-4 h-4 cursor-pointer" />
                  <img src={deleteIcon} alt="delete" className="w-4 h-4 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full lg:w-1/3 flex flex-col items-start">
        <div className="flex items-center justify-between mb-3 w-full max-w-[340px]">
          <p className="text-base font-semibold">Preview</p>
          <img src={Shape} alt="info" className="w-5 h-5" />
        </div>
        <div className="w-full max-w-[340px] h-[325px] border border-dashed border-gray-500 rounded-md flex items-center justify-center">
          <img src={group} alt="preview" className="w-20 h-20 opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default NotificationPanel;
