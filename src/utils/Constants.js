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
