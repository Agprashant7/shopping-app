import React, { useState } from "react";
import DashBoardLayout from "./DashBoardLayout";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/ai";
import CardWithIcon from "./sacomponents/cardWithIcon/cardWithIcon";
import { get } from "./services/api";
import appConfig from "./services/appConfig";
import Loading from "./Loading";



const HistoryForPerticularId = ({ isShowRightDrawer }) => {
  const navigate = useNavigate();
  const [rightPanel, setRightPanel] = useState("");
  const [shoppingHistory, setShoppingHistory] = useState(null);
  const historyId = useParams();
  React.useEffect(() => {
    async function getHistoryItems() {
      const { error, response } = await get(
        `${appConfig.API_BASE_URL}`,
        `${"/getHistroyItemById/" + historyId.id}`
      );

      console.log("response", response.data.data[0]);
      setShoppingHistory(response.data.data[0]);
    }
    getHistoryItems();
  }, []);

  return (
    <DashBoardLayout
      rightPanel={rightPanel}
      setRightPanel={setRightPanel}
      isShowRightDrawer={isShowRightDrawer}
    >
      {shoppingHistory ? (
        <>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowRoundBack size={20} className="text-amber-500" />
            <p className="pl-2 text-amber-500 text-sm">back</p>
          </div>
          <div className="py-5">
            <h1 className="text-2xl text-gray-900 w-[30%] font-medium max-[768px]:w-full">
              {shoppingHistory.historyName}
            </h1>
            <div className="flex flex-row items-center py-3">
              <AiOutlineCalendar size={20} className="text-[#c1c1c4]" />
              <p className="text-xs text-[#c1c1c4] pl-3">Mon 27.8.2020</p>
            </div>
          </div>
          {shoppingHistory?.historyItems?.map((item) => {
            return (
              <div key={item._id} className="py-8">
                <h6 className="text-lg text-black font-medium ">{item.category}</h6>
                <div className="flex flex-wrap justify-start max-[700px]:justify-center py-5">
                  {item.items.map((data) => {
                    return <CardWithIcon title={data.itemName} count={2} />;
                  })}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <Loading />
      )}
    </DashBoardLayout>
  );
};

export default HistoryForPerticularId;
