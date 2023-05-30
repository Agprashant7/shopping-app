import React from "react";
import RenderItems from "./rightPanel/renderItems";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex flex-row w-screen">
      <div className="bg-[#faf9fe] w-4/5 px-20 py-8">{children}</div>
      <RenderItems />
    </div>
  );
};

export default DashBoardLayout;
