import {
  AiOutlineMenu,
  AiOutlineBarChart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";

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

export const SHOPPING_LIST_CONSTANTS = {
  ALLOW_YOU_TAKE: "allows you take your shopping list wherever you go",
  SHOPPING_HISTORY: "Shopping History",
  TOP_CATEGORIES: "Top Categories",
  TOP_ITEMS: "Top Items",
  MONTHLY_SUMMARY: "Monthly Summary",
};
