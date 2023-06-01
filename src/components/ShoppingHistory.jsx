import React, { useState } from "react";
import RenderItems from "./rightPanel/renderItems";
import { AiOutlineCalendar, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DashBoardLayout from "./DashBoardLayout";
import { SHOPPING_LIST_CONSTANTS } from "../utils/Constants";

const shoppingHistory = [
  {
    id: 1,
    prequent: "Auguest 2020",
    items: [
      {
        id: 1,
        name: "Grocery List",
        date: "Mon 27.8.2020",
        status: "Completed",
      },
      {
        id: 2,
        name: "Banana",
        date: "Mon 24.8.2020",
        status: "Completed",
      },
    ],
  },
  {
    id: 2,
    prequent: "July 2020",
    items: [
      {
        id: 1,
        name: "Board Game week 2",
        date: "Mon 27.7.2020",
        status: "Completed",
      },
      {
        id: 2,
        name: "Grocery List",
        date: "Mon 24.7.2020",
        status: "Canceled",
      },
    ],
  },
];

const ShoppingHistory = () => {
  const navigate = useNavigate();
  const [rightPanel, setRightPanel] = useState("");

  return (
    <DashBoardLayout rightPanel={rightPanel} setRightPanel={setRightPanel}>
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl text-gray-900 w-[30%] font-medium">
          {SHOPPING_LIST_CONSTANTS.SHOPPING_HISTORY}
        </h1>
      </div>
      {shoppingHistory.map((item) => {
        return (
          <div key={item.id} className="py-6">
            <h6 className="text-base text-black font-medium ">
              {item.prequent}
            </h6>
            {item.items.map((data) => {
              return (
                <div
                  className="flex flex-row bg-white shadow-md p-6 rounded-lg my-10  max-[850px]:justify-between items-center justify-between cursor-pointer"
                  onClick={() => navigate(`/history/${data.id}`)}
                >
                  <div>
                    <p>{data.name}</p>
                  </div>
                  <div className="flex flex-row  max-[850px]:justify-center gap-3 items-center w-3/12 justify-between">
                    <div className="max-[850px]:hidden">
                    <AiOutlineCalendar size={20} className="text-[#c1c1c4]" />
                    </div>
                   
                    <p className="text-xs text-[#c1c1c4]">{data.date}</p>
                    <p
                      className={`text-xs border rounded p-1 px-0 ${
                        data.status === "Completed"
                          ? "text-[#56ccf2]"
                          : "text-red-600"
                      } ${
                        data.status === "Completed"
                          ? "border-[#56ccf2]"
                          : "border-red-600"
                      } `}
                    >
                      {data.status}
                    </p>
                    <div className="max-[850px]:hidden">
                    <AiOutlineRight size={20} className="text-amber-500" />
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </DashBoardLayout>
  );
};

export default ShoppingHistory;
