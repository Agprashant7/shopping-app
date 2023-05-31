import Bottle from "../../assets/source.svg";
import { MdEdit } from "react-icons/md";
import ButtonIncOrDec from "../sacomponents/ButtonIncorDec";
import { InputField } from "../sacomponents/Input/Input";

const RenderItems = ({
  data,
  incrementOrDecrementCount,
  deleteItem,
  choosePanel,
}) => {
  return (
    <div className="w-1/5 h-screen">
      <div className="bg-[#FFF0DE] h-5/6 flex flex-col items-center overflow-y-auto">
        <div className="h-28 w-4/5 rounded-2xl bg-[#80485B] my-10 flex flex-row justify-around items-center">
          <div className="mb-3">
            <img src={Bottle} alt="bottle" />
          </div>
          <div className="w-36">
            <p className="text-sm text-white font-medium">
              Didn’t find what you need?
            </p>
            <button className="rounded-lg py-2 px-5 mt-2 text-xs bg-slate-50 font-normal"onClick={choosePanel} >
              Add Item
            </button>
          </div>
        </div>

        <div className="flex w-4/5 items-center justify-between">
          <div className="text-xl text-black font-medium">
            <p>Shopping List</p>
          </div>
          <div className="cursor-pointer">
            <MdEdit size={20} />
          </div>
        </div>

        <div className="w-4/5">
          {data &&
            data.map((value, valueIndex) => {
              return (
                <div className="mt-5 mb-3">
                  <p className="text-xs font-medium text-gray-500">
                    {value.type}
                  </p>
                  {value.items.map((item, itemIndex) => {
                    return (
                      <div className="flex flex-row justify-between items-center py-3">
                        <div className="text-base font-normal">{item.name}</div>
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
      <div className="h-1/6 flex items-center justify-center">
        <div className="flex flex-row justify-center items-center">
          <InputField />
          <button className="rounded-lg p-3.5 px-5 mt-2 text-sm text-white mr-2 absolute right-4 bg-[#F9A109] font-medium">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenderItems;
