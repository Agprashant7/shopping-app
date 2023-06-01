import React, { useEffect, useState } from "react";
import { InputField, InputSelect, TextArea } from "../sacomponents/Input/Input";
import { SHOPPING_LIST_CONSTANTS } from "../../utils/Constants";
const AddItems = ({ onSave, onCancel, choosePanel }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    note: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    valueExists(newItem);
  }, [newItem]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    if (valueExists(newItem)) {
      choosePanel();
    }
  };
  const ImageLabel =
    "<div><span>Image <a target='_blank' href='https://image-link-generator.netlify.app/' style='color: blue'>(Image Link Generator)</a></span></div>";

  const valueExists = (obj) => Object.keys(obj).every((key) => obj[key] !== "");
  return (
    <div className="max-[768px]:w-11/12 bg-[#faf9fe] w-1/5 flex flex-col justify-between h-screen py-10">
      <div class="mx-8 overflow-y-auto ">
        <span class="text-xl ml-1 text-black font-medium">
          {SHOPPING_LIST_CONSTANTS.ADD_NEW_ITEM}
        </span>
        <div className="my-6">
          <div className="my-8">
            <InputField
              label={"Name"}
              value={newItem.name}
              name={"name"}
              placeholder={"Enter a name"}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="my-8">
            <TextArea
              label={"Note (optional)"}
              value={newItem.note}
              name={"note"}
              placeholder={"Enter a note"}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="my-8">
            <InputField
              label={ImageLabel}
              value={newItem.image}
              name={"image"}
              placeholder={"Enter a url"}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="my-8">
            <InputSelect
              options={[
                "Select Category",
                "Fruit and vegitables",
                "Meat and Fish",
              ]}
              value={newItem.category}
              name={"category"}
              onChange={(e) => handleChange(e)}
              label={"Category"}
            />
          </div>
        </div>
      </div>
      <div class=" mt-10 h-1/6 flex flex-row justify-center items-center ">
        <button
          class="rounded-lg p-3.5 px-5 text-sm text-black shadow-sm"
          onClick={choosePanel}
        >
          Cancel
        </button>
        <button
          class="rounded-lg p-3.5 px-5 text-sm text-white disabled:bg-slate-400 bg-[#F9A109] shadow-md"
          disabled={!valueExists(newItem)}
          onClick={() => onSubmit()}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default AddItems;
