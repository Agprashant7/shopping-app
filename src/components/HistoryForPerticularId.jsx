import React, { useState } from "react";
import DashBoardLayout from "./DashBoardLayout";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/ai";
import CardWithIcon from "./sacomponents/cardWithIcon/cardWithIcon";

const shoppingItems = [
  {
    id: 1,
    type: "Fruit and vegitables",
    items: [
      {
        id: 1,
        name: "Avocado",
      },
      {
        id: 2,
        name: "Banana",
      },
      {
        id: 3,
        name: "Bunch of carrots 5pcs",
      },
    ],
  },
  {
    id: 2,
    type: "Meat and Fish",
    items: [
      {
        id: 1,
        name: "Beef leg piece",
      },
      {
        id: 2,
        name: "Pork",
      },
      {
        id: 3,
        name: "Salmon",
      },
      {
        id: 4,
        name: "Tuna",
      },
    ],
  },
];

const HistoryForPerticularId = ({ isShowRightDrawer }) => {
  const navigate = useNavigate();
  const [rightPanel, setRightPanel] = useState("");

  return (
    <DashBoardLayout
      rightPanel={rightPanel}
      setRightPanel={setRightPanel}
      isShowRightDrawer={isShowRightDrawer}
    >
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowRoundBack size={20} className="text-amber-500" />
        <p className="pl-2 text-amber-500 text-sm">back</p>
      </div>
      <div className="py-5">
        <h1 className="text-2xl text-gray-900 w-[30%] font-medium max-[768px]:w-full">
          Eero's farewell party
        </h1>
        <div className="flex flex-row items-center py-3">
          <AiOutlineCalendar size={20} className="text-[#c1c1c4]" />
          <p className="text-xs text-[#c1c1c4] pl-3">Mon 27.8.2020</p>
        </div>
      </div>
      {shoppingItems.map((item) => {
        return (
          <div key={item.id} className="py-8">
            <h6 className="text-lg text-black font-medium ">{item.type}</h6>
            <div className="flex flex-wrap justify-start max-[700px]:justify-center py-5">
              {item.items.map((data) => {
                return <CardWithIcon title={data.name} count={2} />;
              })}
            </div>
          </div>
        );
      })}
    </DashBoardLayout>
  );
};

export default HistoryForPerticularId;
