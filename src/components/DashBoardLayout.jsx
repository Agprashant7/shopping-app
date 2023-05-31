import React from "react";
import RenderItems from "./rightPanel/renderItems";

const DashBoardLayout = ({
  data,
  incrementOrDecrementCount,
  deleteItem,
  children,
}) => {
  return (
    <div className="flex flex-row w-screen">
      <div className="bg-[#faf9fe] w-4/5 px-20 py-8">{children}</div>
      <RenderItems
        data={data}
        incrementOrDecrementCount={incrementOrDecrementCount}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default DashBoardLayout;
