import React, { useState } from "react";
import RenderItems from "./rightPanel/renderItems";
import { AiOutlineCalendar, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DashBoardLayout from "./DashBoardLayout";
import { SHOPPING_LIST_CONSTANTS } from "../utils/Constants";
import appConfig from "./services/appConfig";
import { get } from "./services/api";
import { format } from "date-fns";
import Loading from "./Loading";

const ShoppingHistory = ({ isShowRightDrawer }) => {
  const navigate = useNavigate();
  const [rightPanel, setRightPanel] = useState("");
  const [shoppingHistory, setShoppingHistory] = useState("");
  React.useEffect(() => {
    async function getHistoryItems() {
      const { error, response } = await get(
        `${appConfig.API_BASE_URL}`,
        `${"/getHistroyItems"}`
      );
      console.log("error", error);
      console.log("response", response.data.data);
      setShoppingHistory(response.data.data);
    }
    getHistoryItems();
  }, []);
  
  return (
    <DashBoardLayout
      rightPanel={rightPanel}
      setRightPanel={setRightPanel}
      isShowRightDrawer={isShowRightDrawer}
    >
      <div className="flex flex-row justify-between h-fit">
        <h1 className="text-2xl text-gray-900 w-[30%] font-medium">
          {SHOPPING_LIST_CONSTANTS.SHOPPING_HISTORY}
        </h1>
      </div>
      {shoppingHistory ? (
        <>
          {shoppingHistory?.map((item) => {
            return (
              <div key={item?.historyId} className="py-1">
                <h6 className="text-base text-black font-medium ">
                  {/* {format(new Date(item?.date), 'MM/dd/yyyy')}    */}
                </h6>

                <div
                  className="flex flex-row bg-white shadow-md p-6 rounded-lg my-10  max-[850px]:justify-between items-center justify-between cursor-pointer"
                  onClick={() => navigate(`/history/${item?.historyId}`)}
                >
                  <div>
                    <p>{item?.historyName}</p>
                  </div>
                  <div className="flex flex-row  max-[850px]:justify-center gap-3 items-center w-3/12 justify-between">
                    <div className="max-[850px]:hidden">
                      <AiOutlineCalendar size={20} className="text-[#c1c1c4]" />
                    </div>

                    <p className="text-xs text-[#c1c1c4]">
                      {" "}
                      {format(new Date(item?.date), "EEE MM-dd-yyyy")}{" "}
                    </p>
                    <p
                      className={`text-xs border rounded p-1 px-0 ${
                        item.status === "Completed"
                          ? "text-[#56ccf2]"
                          : "text-red-600"
                      } ${
                        item.status === "Completed"
                          ? "border-[#56ccf2]"
                          : "border-red-600"
                      } `}
                    >
                      {item.status}
                    </p>
                    <div className="max-[850px]:hidden">
                      <AiOutlineRight size={20} className="text-amber-500" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
      <Loading/>
      )}
    </DashBoardLayout>
  );
};

export default ShoppingHistory;
