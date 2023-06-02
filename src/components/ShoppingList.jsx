import React, { useState } from "react";
import RenderItems from "./rightPanel/renderItems";
import { SearchInput } from "./sacomponents/Input/Input";
import CardWithIcon from "./sacomponents/cardWithIcon/cardWithIcon";
import DashBoardLayout from "./DashBoardLayout";
import { SHOPPING_LIST_CONSTANTS } from "../utils/Constants";
import appConfig from "./services/appConfig";
import { get } from "./services/api";


const ShoppingList = ({ isShowRightDrawer }) => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [rightPanel, setRightPanel] = useState(0);
  const [newShoppingItems,setShoppingItems]=useState();

  React.useEffect( ()=>{
    async function getItems(){
      const { error, response } = await get(
        `${appConfig.API_BASE_URL}`,
        `${"/items"}`
       
      );
      console.log('API ITEMS',response?.data?.data)
      setShoppingItems(response?.data?.data)
    }
    getItems()
  
  },[])
  const addItemToBasket = (type, data) => {
    const itemIndex = items.findIndex((item) => item.category === type);

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
      isShowRightDrawer={isShowRightDrawer}
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
      {newShoppingItems?
      newShoppingItems?.map((item) => {
        return (
          <div key={item.id} className="py-8">
            <p className="text-lg text-black font-medium ">{item.category}</p>
            <div className="flex flex-wrap py-5">
              {item?.items?.map((data) => {
                return (
                  <CardWithIcon
                    title={data.itemName}
                    onClick={() => addItemToBasket(item.category, data)}
                    onCardButtonClick={() => setRightPanel(2)}
                  />
                );
              })}
            </div>
          </div>
        );
      }):<></>}
    </DashBoardLayout>
  );
};

export default ShoppingList;
