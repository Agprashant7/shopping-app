import React from "react";
import RenderItems from "./rightPanel/renderItems";
import AddItems from "./rightPanel/addItems";
import ItemDescription from "./rightPanel/itemDescription";

const DashBoardLayout = ({
  data,
  incrementOrDecrementCount,
  deleteItem,
  children,
  rightPanel=0,
  setRightPanel,
}) => {
  const DisplayRightPanel = () => {
    if (rightPanel == 0) {
      return (
        <RenderItems
          data={data}
          incrementOrDecrementCount={incrementOrDecrementCount}
          deleteItem={deleteItem}
          choosePanel={() => setRightPanel(1)}
        />
      );
    }
    if (rightPanel == 1) {
      return <AddItems choosePanel={() => setRightPanel(0)} />;
    }
    if (rightPanel == 2) {
      return <ItemDescription choosePanel={() => setRightPanel(0)} />;
    }
  };

  return (
    <div className="flex flex-row h-screen overflow-auto w-screen">
      <div className="bg-[#faf9fe] w-4/5 px-20 py-8 max-[768px]:px-4 max-[768px]:w-screen">{children}</div>
      <div className="max-[768px]:hidden w-1/5">
      <DisplayRightPanel />
      </div>
     
    </div>
  );
};

export default DashBoardLayout;
