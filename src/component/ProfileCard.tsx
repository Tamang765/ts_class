import React from "react";
import FakeApiCall from "../section/fakeapi/FakeApiCall";
import { Themecontext } from "./context/Context";
import { userContext } from "./context/userContext";

const ProfileCard = ({ name }: { name: string }) => {
  const data = React.useContext(Themecontext);
  const userData = React.useContext(userContext);

  console.log(userData);
  return (
    <>
      <div
        className={`${
          data.themeColor === "dark" ? "bg-gray-900 text-white" : "bg-white"
        } border-2 w-fit  text-center  `}
      >
        <div className="bg-blue-400 min-h-24 relative ">
          <img
            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="person"
            className="mx-auto  w-1/4 object-cover aspect-square rounded-full absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2"
          />
        </div>
        <div className="space-y-3 mt-6 p-8">
          {/* <span className="text-lg font-semibold">{name}</span> */}
          <span className="text-lg font-semibold">Frontend - Developer</span>
          <p>Job Seeker</p>
          <div className="flex justify-center items-start gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="linkedin"
              className="w-6 h-6"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="github"
              className="w-6 h-6"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="github"
              className="w-6 h-6"
            />
          </div>
          <button className="border-2 w-fit p-2 rounded-3xl">Message</button>
        </div>
      </div>
      <FakeApiCall name={name} />
    </>
  );
};

export default ProfileCard;
