import { BsPlusLg } from "react-icons/bs";
const CardWithIcon = ({ title = "Banana", onClick, count }) => {
  return (
    <div
      class={`my-5 mr-6 py-2.5 px-4 
        "bg-white"
       w-56 rounded-xl shadow-lg flex items-center justify-around flex-row cursor-pointer`}
      onClick={onClick}
    >
      <div class=" w-36 items-center justify-center break-words ">
        <p
          className={`text-base font-normal "text-gray-800"
          `}
        >
          {title}
        </p>
      </div>
      <div>
        {!count ? (
          <BsPlusLg
            size={20}
            class="stroke-1 text-[#c1c1c4] hover:stroke-2 hover:text-orange-300"
          />
        ) : (
          <p className="text-amber-500 text-xs">{count} pcs</p>
        )}
      </div>
    </div>
  );
};

export default CardWithIcon;
