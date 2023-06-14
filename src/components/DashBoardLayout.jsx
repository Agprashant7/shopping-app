import React from "react";
import RenderItems from "./rightPanel/renderItems";
import AddItems from "./rightPanel/addItems";
import ItemDescription from "./rightPanel/itemDescription";
import EmptyList from './rightPanel/emptyList'
const DashBoardLayout = ({
  data,
  description,
  incrementOrDecrementCount,
  deleteItem,
  children,
  rightPanel = 4,
  setRightPanel,
  isShowRightDrawer,
  onAddToList
}) => {
  const DisplayRightPanel = () => {
    if (rightPanel == 0) {
      return (
        <RenderItems
          data={data}
          incrementOrDecrementCount={incrementOrDecrementCount}
          deleteItem={deleteItem}
          choosePanel={(val) => setRightPanel(val)}
        />
      );
    }
    if (rightPanel == 1) {
      return <AddItems choosePanel={() => setRightPanel(0)} />;
    }
    if (rightPanel == 2) {
      return <ItemDescription  description={description} onAddToList={onAddToList} choosePanel={() => setRightPanel(0)} />;
    }
    if (rightPanel == 4) {
      return <EmptyList choosePanel={() => setRightPanel(0)} />
    }
  };

  return (
    <div className="flex flex-row h-screen overflow-scroll w-screen">
      <div
        className={`bg-[#faf9fe] overflow-scroll ${
          isShowRightDrawer ? "w-4/5" : "w-full"
        } px-20 py-8 max-[768px]:px-4 max-[768px]:w-scree`}
      >
        {children}
      </div>
      {/* <div className="max-[768px]:hidden w-1/5">
      <DisplayRightPanel />
      </div> */}
      {isShowRightDrawer && (
        <div
          id="drawer-right"
          class="z-40 h-screen transition-transform bg-white w-1/5"
          tabindex="-1"
          aria-labelledby="drawer-right"
        >
          <DisplayRightPanel />
        </div>
      )}
    </div>
  );
};

export default DashBoardLayout;
