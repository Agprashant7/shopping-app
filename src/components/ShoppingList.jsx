import React, { useState } from "react";
import RenderItems from "./rightPanel/renderItems";
import { SearchInput } from "./sacomponents/Input/Input";
import CardWithIcon from "./sacomponents/cardWithIcon/cardWithIcon";
import DashBoardLayout from "./DashBoardLayout";

const shoppingItems = [
  {
    id: 1,
    type: "Fruit and vegitables",
    items: [
      {
        id: 1,
        name: "Avocado",
      },
      {
        id: 2,
        name: "Banana",
      },
      {
        id: 3,
        name: "Bunch of carrots 5pcs",
      },
      {
        id: 4,
        name: "Chicken 1kg",
      },
      {
        id: 5,
        name: "pre cooked corn 450g",
      },
      {
        id: 6,
        name: "Mandorin Nadorcatt",
      },
      {
        id: 7,
        name: "Water melon",
      },
    ],
  },
  {
    id: 2,
    type: "Meat and Fish",
    items: [
      {
        id: 1,
        name: "Beef leg piece",
      },
      {
        id: 2,
        name: "Pork",
      },
      {
        id: 3,
        name: "Salmon",
      },
      {
        id: 4,
        name: "Tuna",
      },
      {
        id: 5,
        name: "Lamb",
      },
      {
        id: 6,
        name: "Shrimp",
      },
    ],
  },
];

const ShoppingList = () => {
  const [search, setSearch] = useState("");

  return (
    <DashBoardLayout>
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl text-gray-900 w-[30%]">
          <span className="text-amber-500">Shoppingify</span> allows you take
          your shopping list wherever you go
        </h1>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {shoppingItems.map((item) => {
        return (
          <div key={item.id} className="py-8">
            <h6 className="text-lg text-black font-medium ">{item.type}</h6>
            <div className="flex flex-wrap py-5">
              {item.items.map((data) => {
                return <CardWithIcon title={data.name} />;
              })}
            </div>
          </div>
        );
      })}
    </DashBoardLayout>
  );
};

export default ShoppingList;

{
  /* <div className="flex flex-row w-screen">
      <div className="bg-[#faf9fe] w-4/5 px-20 py-8">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl text-gray-900 w-[30%]">
            <span className="text-amber-500">Shoppingify</span> allows you take
            your shopping list wherever you go
          </h1>
          <SearchInput />
        </div>
        {shoppingItems.map((item) => {
          return (
            <div key={item.id} className="py-8">
              <h6 className="text-lg text-black font-medium ">{item.type}</h6>
              <div className="flex flex-wrap py-5">
                {item.items.map((data) => {
                  return <CardWithIcon title={data.name} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <RenderItems />
    </div> */
}
