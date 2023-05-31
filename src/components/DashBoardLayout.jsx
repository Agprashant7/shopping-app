import React from "react";
import RenderItems from "./rightPanel/renderItems";
import AddItems from "./rightPanel/addItems";
import ItemDescription from "./rightPanel/itemDescription";

const DashBoardLayout = ({
  data,
  incrementOrDecrementCount,
  deleteItem,
  children,
}) => {
  const [rightPanel, setRightPanel] = React.useState(0);

  const DisplayRightPanel = () => {
    if (rightPanel == 0) {
      return (
        <RenderItems
          data={data}
          incrementOrDecrementCount={incrementOrDecrementCount}
          deleteItem={deleteItem}
          choosePanel={choosePanel}
        />
      );
    }
    if (rightPanel == 1) {
      return <AddItems choosePanel={choosePanel} />;
    }
    if (rightPanel == 2) {
      return <ItemDescription choosePanel={choosePanel} />;
    }
  };
  const choosePanel = (number) => {
    setRightPanel(number);
  };

  return (
    <div className="flex flex-row w-screen">
      <div className="bg-[#faf9fe] w-4/5 px-20 py-8">{children}</div>
      <DisplayRightPanel />
    </div>
  );
};

export default DashBoardLayout;
