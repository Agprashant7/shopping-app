import { BsPlusLg } from "react-icons/bs";
const CardWithIcon = ({
  title = "Banana",
  onClick,
  count,
  onCardButtonClick,
}) => {
  return (
    <div
      className={`my-5 mr-6 py-2.5 px-4 
        "bg-white"
       w-56 rounded-xl shadow-lg flex items-center justify-around flex-row cursor-pointer`}
    >
      <div
        className=" w-36 items-center justify-center break-words"
        onClick={onCardButtonClick}
      >
        <p
          className={`text-base font-medium "text-gray-800"
          `}
        >
          {title}
        </p>
      </div>
      <div>
        {!count ? (
          <BsPlusLg
            size={20}
            className="stroke-1 text-[#c1c1c4] hover:stroke-2 hover:text-orange-300"
            onClick={onClick}
          />
        ) : (
          <p className="text-amber-500 text-xs">{count} pcs</p>
        )}
      </div>
    </div>
  );
};

export default CardWithIcon;
