import React, { useState } from "react";
import RenderItems from "./rightPanel/renderItems";
import { SearchInput } from "./sacomponents/Input/Input";
import CardWithIcon from "./sacomponents/cardWithIcon/cardWithIcon";
import DashBoardLayout from "./DashBoardLayout";
import { SHOPPING_LIST_CONSTANTS } from "../utils/Constants";

const shoppingItems = [
  {
    id: 1,
    type: "Fruit and vegitables",
    items: [
      {
        id: 1,
        name: "Avocado",
        count: 0,
      },
      {
        id: 2,
        name: "Banana",
        count: 0,
      },
      {
        id: 3,
        name: "Bunch of carrots 5pcs",
        count: 0,
      },
      {
        id: 4,
        name: "Chicken 1kg",
        count: 0,
      },
      {
        id: 5,
        name: "pre cooked corn 450g",
        count: 0,
      },
      {
        id: 6,
        name: "Mandorin Nadorcatt",
        count: 0,
      },
      {
        id: 7,
        name: "Water melon",
        count: 0,
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
        count: 0,
      },
      {
        id: 2,
        name: "Pork",
        count: 0,
      },
      {
        id: 3,
        name: "Salmon",
        count: 0,
      },
      {
        id: 4,
        name: "Tuna",
        count: 0,
      },
      {
        id: 5,
        name: "Lamb",
        count: 0,
      },
      {
        id: 6,
        name: "Shrimp",
        count: 0,
      },
    ],
  },
];

const ShoppingList = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [rightPanel, setRightPanel] = useState(0);

  const addItemToBasket = (type, data) => {
    const itemIndex = items.findIndex((item) => item.type === type);

    if (itemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        items: [...updatedItems[itemIndex].items, { ...data, count: 1 }],
      };
      setItems(updatedItems);
    } else {
      setItems([
        ...items,
        {
          type: type,
          items: [{ ...data, count: 1 }],
        },
      ]);
    }
  };

  const incrementOrDecrementCount = (
    categoryIndex,
    itemIndex,
    isDec = false
  ) => {
    const updatedItems = [...items];
    if (!isDec) {
      updatedItems[categoryIndex].items[itemIndex].count += 1;
      setItems(updatedItems);
    } else {
      if (updatedItems[categoryIndex].items[itemIndex].count > 0) {
        updatedItems[categoryIndex].items[itemIndex].count -= 1;
        setItems(updatedItems);
      }
    }
  };

  const deleteItem = (categoryIndex, itemIndex) => {
    const updatedItems = [...items];
    updatedItems[categoryIndex].items.splice(itemIndex, 1);

    const allItemsDeleted = updatedItems[categoryIndex].items.length === 0;

    if (allItemsDeleted) {
      updatedItems.splice(categoryIndex, 1);
    }
    setItems(updatedItems);
  };

  return (
    <DashBoardLayout
      data={items}
      incrementOrDecrementCount={incrementOrDecrementCount}
      deleteItem={deleteItem}
      rightPanel={rightPanel}
      setRightPanel={setRightPanel}
    >
      <div className="flex flex-row justify-between">
        <p className="text-2xl text-black w-[30%] max-[768px]:w-[100%]  font-medium">
          <span className="text-amber-500">Shoppingify </span>
          {SHOPPING_LIST_CONSTANTS.ALLOW_YOU_TAKE}
        </p>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {shoppingItems.map((item) => {
        return (
          <div key={item.id} className="py-8">
            <p className="text-lg text-black font-medium ">{item.type}</p>
            <div className="flex flex-wrap py-5">
              {item.items.map((data) => {
                return (
                  <CardWithIcon
                    title={data.name}
                    onClick={() => addItemToBasket(item.type, data)}
                    onCardButtonClick={() => setRightPanel(2)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </DashBoardLayout>
  );
};

export default ShoppingList;
