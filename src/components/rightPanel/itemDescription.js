import Bottle from "../../assets/source.svg";
import { IoMdArrowBack } from "react-icons/io";
import React from "react";
import { del, post } from "../services/api";
import appConfig from "../services/appConfig";
const ItemDescription = ({  onAddToList, choosePanel,description }) => {

const deleteItem= async()=>{
  const { error, response } = await del(
    `${appConfig.API_BASE_URL}`,
    `${"/deleteItem/"+description.itemId+'/'+description.category}`,
    
  );
  console.log("error",error)
  console.log("response",response)
  if(response){
    choosePanel(0)
  }
}
  return (
    <div className="max-[768px]:w-11/12 bg-white w-full flex justify-between flex-col h-screen p-10">
      <div>
        <div
          class="flex flex-row justify-start items-center cursor-pointer"
          onClick={choosePanel}
        >
          <IoMdArrowBack color="#F9A109" />
          <span class="text-[#F9A109] text-xs ml-1 font-medium"> Back</span>
        </div>

        <div class="mt-10 h-48 rounded-2xl flex flex-row justify-evenly bg-slate-500">
          <img src={Bottle} alt="bottle" />
        </div>

        <div class="my-10">
          <div className="my-6">
            <p class="text-xs text-gray-500 font-medium">name</p>
            <p class="text-xl pt-1 text-black font-medium">{description.itemName}</p>
          </div>
          <div className="my-6">
            <p class="text-xs text-gray-500">Category</p>
            <p class="text-base pt-1 text-black font-medium">
              {description.category}
            </p>
          </div>
          <div className="">
            <p class="text-xs">note</p>
            <p class="text-base pt-1 text-black font-medium">
             {description.note}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-between items-center px-5">
        <button
          class="rounded-lg p-3.5 px-5 text-sm text-black font-medium"
          onClick={()=>deleteItem()}
        >
          Delete
        </button>
        <button
          class="rounded-lg p-3.5 px-5 text-sm text-white bg-[#F9A109]"
          onClick={()=>onAddToList(description)}
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

export default ItemDescription;
