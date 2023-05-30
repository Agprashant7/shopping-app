import React from "react";
import RenderItems from "./rightPanel/renderItems";
import { AiOutlineCalendar, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DashBoardLayout from "./DashBoardLayout";

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

  return (
    <DashBoardLayout>
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl text-gray-900 w-[30%] font-medium">
          Shopping History
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
                  className="flex flex-row bg-white shadow-md p-5 rounded-lg my-10 items-center justify-between cursor-pointer"
                  onClick={() => navigate(`/history/${data.id}`)}
                >
                  <div>
                    <p>{data.name}</p>
                  </div>
                  <div className="flex flex-row items-center w-3/12 justify-between">
                    <AiOutlineCalendar size={20} className="text-[#c1c1c4]" />
                    <p className="text-xs text-[#c1c1c4]">{data.date}</p>
                    <p
                      className={`text-xs border rounded p-1 ${
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
                    <AiOutlineRight size={20} className="text-amber-500" />
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
