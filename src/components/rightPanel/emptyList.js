import { InputField } from "../sacomponents/Input/Input";
import Bottle from "../../assets/source.svg";
import Cart from "../../assets/cart.svg";
import React from "react";
const EmptyList = ({choosePanel}) => {
  const [listName,setListName]=React.useState()
  const onCreateList=()=>{
    localStorage.setItem('listName',listName)
   choosePanel(0)
  }
  return (
    <div class=" max-[768px]:w-11/12 bg-[#FFF0DE] w-full flex  justify-between flex-col h-screen">
      <div class="mx-10 overflow-y-auto">
        <div class="mt-10  h-32 rounded-2xl flex flex-row justify-evenly bg-[#80485B]">
          <div>
            <img src={Bottle} alt="bottle" />
          </div>
          <div class="mx-1 self-center break-words">
            <p class="text-base text-white">Didn’t find what you need?</p>
            <button  onClick={choosePanel(2)} class="rounded-lg p-2 px-5 mt-2 text-sm  bg-slate-50">
              Add Item
            </button>
          </div>
        </div>

        <div class=" mt-12 flex flex-col justify-evenly items-center">
          <div class="grow h-64 ">
            <p class="text-base">No Items</p>
          </div>
          <div class="shrink-4">
            <img src={Cart} alt="bottle" />
          </div>
         
        </div>
       
      </div>
      <div className="h-1/6 flex items-center justify-center">
        <div className="flex">
          <input
            type="text"
            className="border-2 rounded-l-lg px-4 py-3.5 text-gray-700 text-sm border-[#56CCF2] focus:outline-none"
            placeholder="Enter a name"
            name='listName'
            value={listName}
            onChange={(e)=>setListName(e.target.value)}
          />
          <button disabled={!listName} onClick={onCreateList} className="bg-[#56CCF2]  text-white text-sm font-medium rounded-r-lg px-4 py-3.5">
            Create List
          </button>
        </div>
        </div>
    </div>
  );
};

export default EmptyList;
