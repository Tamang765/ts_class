import React from "react";
import "./App.css";

import Login from "./component/Login";
import FakeApiCall from "./section/fakeapi/FakeApiCall";
import ProfileCard from "./component/ProfileCard";
import PropsCheck from "./component/PropsCheck";
import { Themecontext } from "./component/context/Context";
import { userContext } from "./component/context/userContext";

function App() {
  const [name, setName] = React.useState("Ramesh");

  const [address, setAddress] = React.useState("Swyambu");

  const isAuthorized = true;

  const data = React.useContext(Themecontext);



  if (!isAuthorized) {
    return <Login />;
  }

  /////

  //get context data



  //destructure

  const { themeColor, setThemeColor } = data;

  return (
    <div
      className={`${
        themeColor === "dark" ? "bg-gray-900 text-white" : "bg-white"
      } border-2 w-fit  text-center  `}
    >
      <button
        className="border-2 p-1"
        onClick={() => setThemeColor(themeColor === "dark" ? "light" : "dark")}
      >
        Change Theme
      </button>
      <PropsCheck setName={setName} />
      {/* <ProfileCard /> */}
      {/* <FakeApiCall name={"hello"} /> */}
      {/* {
          cardData.map((data, index)=>
            <div key={index}>
              <Card name={data.name} address={data.address} setName={setName}
              imageSrc={data.imageSrc} />
            </div>
          )
        } */}
      {/* <FetchingData/>
      <br />
      <br />
      <br /> */}
    </div>
  );
}

export default App;
