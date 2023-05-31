import Bottle from "../../assets/source.svg";
import { IoMdArrowBack } from "react-icons/io";
const ItemDescription = ({ onDelete, onAddToList, choosePanel }) => {
  return (
    <div className="max-[768px]:w-11/12 bg-white w-1/5 flex justify-between flex-col h-screen p-10">
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
            <p class="text-xl pt-1 text-black font-medium">Avocodo</p>
          </div>
          <div className="my-6">
            <p class="text-xs text-gray-500">Category</p>
            <p class="text-base pt-1 text-black font-medium">
              Fruits and Vegitables
            </p>
          </div>
          <div className="my-6">
            <p class="text-xs text-gray-500">note</p>
            <p class="text-base pt-1 text-black font-medium">
              Nutrient-dense foods are those that provide substantial amounts of
              vitamins, One-third of a medium avocado d choice.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-between items-center px-5">
        <button
          class="rounded-lg p-3.5 px-5 text-sm text-black font-medium"
          onClick={onDelete}
        >
          Delete
        </button>
        <button
          class="rounded-lg p-3.5 px-5 text-sm text-white bg-[#F9A109]"
          onClick={onAddToList}
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

export default ItemDescription;
