import React, { useState } from "react";
import { SideBarButton } from "../utils/Constants";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { COLORS } from "../themes/Color";

const SideBar = () => {
  const [tab, setTab] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-between bg-white h-screen w-20 shadow-lg">
      <span className="w-10 h-10 rounded-3xl bg-black items-center justify-center flex m-6 cursor-pointer">
        <AiOutlineHeart size={20} color={COLORS.orange} />
      </span>
      <div className="bg-white flex flex-col items-center justify-between h-1/5 w-full">
        {SideBarButton.map((category) => (
          <button
            className="w-full items-center justify-center flex h-11 relative group"
            key={category.name}
            onClick={() => setTab(category.id)}
          >
            {tab === category.id && (
              <div className="w-1.5 h-full bg-amber-500 absolute left-0 rounded" />
            )}
            <span class="rounded shadow-sm">
              <category.icon size={20} color={COLORS.black} />
            </span>
            <span class="absolute left-16 scale-0 rounded bg-gray-800 px-2.5 py-1 text-xs text-white group-hover:scale-100">
              {category.name}
            </span>
          </button>
        ))}
      </div>
      <span className="w-10 h-10 rounded-3xl bg-amber-500 items-center justify-center flex m-6 relative cursor-pointer">
        <span className="absolute bottom-7 left-6 w-5 h-5 rounded-md items-center flex justify-center bg-red-500 text-xs text-white">
          {cartCount}
        </span>
        <AiOutlineShoppingCart size={20} color={COLORS.white} />
      </span>
    </div>
  );
};

export default SideBar;
