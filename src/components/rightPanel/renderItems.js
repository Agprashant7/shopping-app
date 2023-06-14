import Bottle from "../../assets/source.svg";
import { MdEdit } from "react-icons/md";
import ButtonIncOrDec from "../sacomponents/ButtonIncorDec";
import { InputField } from "../sacomponents/Input/Input";
import Cart from "../../assets/cart.svg";
import { SHOPPING_LIST_CONSTANTS } from "../../utils/Constants";
import React, { useState } from "react";
import CustomModal from "../sacomponents/customModal/customModal";
import { post } from "../services/api";
import appConfig from "../services/appConfig";

const RenderItems = ({
  data,
  incrementOrDecrementCount,
  deleteItem,
  choosePanel,
}) => {
  const [isEditItem, setIsEditItem] = React.useState(false);
  const [completeModal, setCompleteModal] = React.useState(false);
  const [cancelModal, setCancelModal] = React.useState(false);
  const [item,setItem]=React.useState(data)
  const [listName, setListName] = React.useState(
    localStorage.getItem("listName")
  );
  const [status, setStatus] = React.useState("Completed");
  const onEditListName = () => {
    localStorage.removeItem("listName");
    localStorage.setItem("listName", listName);
    setIsEditItem(false);
  };
  React.useEffect(() => {}, [listName]);
  React.useEffect(() => {}, [item]);
  const closeModal = () => {
    setCompleteModal(false);
    setCancelModal(false);
  };
  const onSubmit = async () => {
    closeModal();

    const dataObj = {
      historyName:
        localStorage.getItem("listName") ||
        SHOPPING_LIST_CONSTANTS.SHOPPING_LIST,
      historyItems: item,
      status: status,
    };
    console.log("DATA", dataObj);
    const { error, response } = await post(
      `${appConfig.API_BASE_URL}`,
      `${"/addHistroyItems"}`,
      dataObj
    );
    console.log("error", error);
    console.log("response", response);
    localStorage.removeItem("listName");
    // choosePanel(0)
    setItem([])
  };
  const onCancel = async () => {
    setStatus("Cancelled");
    onSubmit();
  };

  return (
    <div className="w-full h-screen">
      <div className="bg-[#FFF0DE] h-5/6 flex flex-col items-center overflow-y-auto">
        <div className="h-28 w-4/5 rounded-2xl bg-[#80485B] my-10 flex flex-row justify-around items-center">
          <div className="mb-3">
            <img src={Bottle} alt="bottle" />
          </div>
          <div className="w-36">
            <p className="text-sm text-white font-medium">
              {SHOPPING_LIST_CONSTANTS.DIDNT_FIND}
            </p>
            <button
              className="rounded-lg py-2 px-5 mt-2 text-xs bg-slate-50 font-normal"
              onClick={() => choosePanel(1)}
            >
              {SHOPPING_LIST_CONSTANTS.ADD_ITEM}
            </button>
          </div>
        </div>

        {item?.length === 0 && (
          <div className="flex items-center flex-col justify-center mt-40">
            <div className="grow h-52 mt-10">
              <p className="text-lg font-medium text-black">No Items</p>
            </div>
            <div className="shrink-4">
              <img src={Cart} alt="bottle" />
            </div>
          </div>
        )}
        {item?.length > 0 && (
          <div className="flex w-4/5 items-center justify-between">
            <div className="text-xl text-black font-medium">
              <p>{listName || SHOPPING_LIST_CONSTANTS.SHOPPING_LIST}</p>
            </div>
            <div className="cursor-pointer" onClick={() => setIsEditItem(true)}>
              <MdEdit size={20} />
            </div>
          </div>
        )}
        <div className="w-4/5">
          {item &&
            item?.map((value, valueIndex) => {
              return (
                <div className="mt-5 mb-3">
                  <p className="text-xs font-medium text-gray-500">
                    {value.category}
                  </p>
                  {value.items.map((item, itemIndex) => {
                    return (
                      <div className="flex flex-row justify-between items-center py-3">
                        <div className="text-base font-normal">
                          {item.itemName}
                        </div>
                        <ButtonIncOrDec
                          count={item.count}
                          isExpand={item.count > 1}
                          incrementOrDecrementCount={() =>
                            incrementOrDecrementCount(valueIndex, itemIndex)
                          }
                          onPlusClick={() =>
                            incrementOrDecrementCount(valueIndex, itemIndex)
                          }
                          onMinusClick={() =>
                            incrementOrDecrementCount(
                              valueIndex,
                              itemIndex,
                              true
                            )
                          }
                          onDeleteClick={() =>
                            deleteItem(valueIndex, itemIndex)
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
      {item?.length > 0 ? (
        <div className="h-1/6 flex items-center justify-center">
          {!item || isEditItem ? (
            <>
              <div className="flex">
                <input
                  type="text"
                  className="border-2 rounded-l-lg px-4 py-3.5 text-gray-700 text-sm border-amber-500 focus:outline-none"
                  placeholder="Enter a name"
                  value={listName}
                  onChange={(e) => setListName(e.target.value)}
                />
                <button
                  disabled={item?.length === 0 ? true : false}
                  onClick={onEditListName}
                  className="bg-amber-400 text-white text-sm font-medium rounded-r-lg px-6 py-3.5"
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center">
              <button
                onClick={() => setCancelModal(true)}
                className="bg-white text-[#34333A] text-sm font-medium rounded-r-lg px-6 py-3.5"
              >
                Cancel
              </button>
              <button
                onClick={() => setCompleteModal(true)}
                className="bg-[#56CCF2]  text-white text-sm font-medium rounded-lg px-4 py-3.5"
              >
                Complete
              </button>
            </div>
          )}
          {completeModal ? (
            <CustomModal
              onSubmit={onSubmit}
              onClose={closeModal}
              description={SHOPPING_LIST_CONSTANTS.COMPLETE_LIST_DESCRIPTION}
            />
          ) : (
            <></>
          )}
          {cancelModal ? (
            <CustomModal
              onSubmit={onCancel}
              onClose={closeModal}
              description={SHOPPING_LIST_CONSTANTS.CANCEL_LIST_DESCRIPTION}
            />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="h-1/6 flex items-center justify-center">
          <div className="flex">
            <input
              type="text"
              className="border-2 rounded-l-lg px-4 py-3.5 disabled:border-gray-400 text-gray-700 text-sm border-amber-500 focus:outline-none"
              placeholder="Enter a name"
              // value={listName}
              disabled={item?.length === 0 ? true : false}
              // onChange={(e) => setListName(e.target.value)}
            />
            <button
              disabled={item?.length === 0 ? true : false}
              onClick={onEditListName}
              className="bg-amber-400 disabled:bg-slate-400 text-white text-sm font-medium rounded-r-lg px-6 py-3.5"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RenderItems;
