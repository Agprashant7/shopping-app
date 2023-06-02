import React, { useEffect, useRef, useState } from "react";
import { SideBarButton, SidePannelBtn } from "../utils/Constants";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { COLORS } from "../themes/Color";
import { useNavigate } from "react-router-dom";

const SideBar = ({ setIsShowRightDrawer, isShowRightDrawer }) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsIconClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const SidePannel = () => {
    return (
      <div
        className="absolute w-32 top-6 left-[68px] bg-white shadow-xl rounded-lg p-1.5"
        ref={ref}
      >
        {SidePannelBtn.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-row items-center justify-around p-2.5 rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => {
                navigate(item.routing);
                setIsIconClicked(false);
                if (item.routing === "/signin") {
                  localStorage.removeItem("userLogin");
                }
              }}
            >
              <span>{<item.icon color={COLORS.orange} />}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center justify-between bg-white h-screen w-20 shadow-lg">
      <span
        className="w-10 h-10 rounded-3xl bg-black items-center justify-center flex m-6 cursor-pointer"
        onClick={() => setIsIconClicked(!isIconClicked)}
      >
        <AiFillHeart size={20} color={COLORS.orange} />
      </span>
      <div className="bg-white flex flex-col items-center justify-between h-1/5 w-full">
        {SideBarButton.map((category) => (
          <button
            className="w-full items-center justify-center flex h-11 relative group"
            key={category.name}
            onClick={() => {
              setTab(category.id);
              navigate(category.routing);
            }}
          >
            {tab === category.id && (
              <div className="w-1.5 h-full bg-amber-500 absolute left-0 rounded" />
            )}
            <span className="rounded shadow-sm">
              <category.icon size={20} color={COLORS.black} />
            </span>
            <span className="absolute left-16 scale-0 rounded bg-gray-800 px-2.5 py-1 text-xs text-white group-hover:scale-100">
              {category.name}
            </span>
          </button>
        ))}
      </div>
      <span
        className="w-10 h-10 rounded-3xl bg-amber-500 items-center justify-center flex m-6 relative cursor-pointer"
        onClick={() => setIsShowRightDrawer(!isShowRightDrawer)}
        data-drawer-target="drawer-right"
        data-drawer-show="drawer-right"
        data-drawer-placement="right"
        aria-controls="drawer-right"
      >
        <span className="absolute bottom-7 left-6 w-5 h-5 rounded-md items-center flex justify-center bg-red-500 text-xs text-white">
          {cartCount}
        </span>
        <AiOutlineShoppingCart size={20} color={COLORS.white} />
      </span>
      {isIconClicked && <SidePannel />}
    </div>
  );
};

export default SideBar;
