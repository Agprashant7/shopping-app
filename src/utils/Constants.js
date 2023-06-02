import { AiOutlineMenu, AiOutlineBarChart } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";

export const SideBarButton = [
  {
    id: 0,
    name: "Items",
    icon: AiOutlineMenu,
    routing: "/",
  },
  {
    id: 1,
    name: "History",
    icon: BsArrowRepeat,
    routing: "/history",
  },
  {
    id: 2,
    name: "Statistics",
    icon: AiOutlineBarChart,
    routing: "statistics",
  },
];

export const SidePannelBtn = [
  {
    id: 1,
    name: "Account",
    icon: MdAccountCircle,
    routing: "/account",
  },
  {
    id: 2,
    name: "Sign out",
    icon: GoSignOut,
    routing: "/signin",
  },
];

export const SHOPPING_LIST_CONSTANTS = {
  ALLOW_YOU_TAKE: "allows you take your shopping list wherever you go",
  SHOPPING_HISTORY: "Shopping History",
  TOP_CATEGORIES: "Top Categories",
  TOP_ITEMS: "Top Items",
  MONTHLY_SUMMARY: "Monthly Summary",
  DIDNT_FIND: "Didn’t find what you need?",
  ADD_ITEM: "Add Item",
  SHOPPING_LIST: "Shopping List",
  ADD_NEW_ITEM: "Add a new item",
};
