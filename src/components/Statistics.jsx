import React, { useState } from "react";
import DashBoardLayout from "./DashBoardLayout";
import Chart from "./sacomponents/charts/charts";
import { SHOPPING_LIST_CONSTANTS } from "../utils/Constants";

const Statistics = () => {
  const [rightPanel, setRightPanel] = useState("");

  const sampleItems = [
    { name: "Banana", value: 28 },
    { name: "Milk", value: 12 },
    { name: "Eggs", value: 6 },
  ];
  const sampleCategories = [
    { name: "Fruits", value: 50 },
    { name: "Dairy", value: 20 },
    { name: "Meat", value: 14 },
  ];
  return (
    <DashBoardLayout rightPanel={rightPanel} setRightPanel={setRightPanel}>
      <div class="flex mx-12 flex-row  justify-between h-1/3">
        <div class=" mr-20  w-1/2 h-full">
          <p class="text-2xl mb-5">{SHOPPING_LIST_CONSTANTS.TOP_ITEMS}</p>
          {sampleItems.map((item, i) => {
            return (
              <>
                <div class="flex my-4 flex-row justify-between">
                  <p>{item.name}</p>
                  <p>{item.value + "%"}</p>
                </div>
                <div class="w-full bg-gray-200 rounded-lg h-1.5 dark:bg-gray-700">
                  <div
                    class="bg-[#F9A109] h-1.5 rounded-full"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </>
            );
          })}
        </div>
        <div class="  h-full w-1/2">
          <div class="  h-full">
            <p class="text-2xl mb-5">
              {SHOPPING_LIST_CONSTANTS.TOP_CATEGORIES}
            </p>
            {sampleCategories.map((item, i) => {
              return (
                <>
                  <div class="flex my-4 flex-row justify-between">
                    <p>{item.name}</p>
                    <p>{item.value + "%"}</p>
                  </div>
                  <div class="w-full bg-gray-200 rounded-lg h-1.5 dark:bg-gray-700">
                    <div
                      class="bg-[#56CCF2] h-1.5 rounded-full"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div class="mx-12 w-full h-1/2">
        <p class="text-2xl">{SHOPPING_LIST_CONSTANTS.MONTHLY_SUMMARY}</p>
        <div class=" mt-10 justify-center">
          <Chart />
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default Statistics;
