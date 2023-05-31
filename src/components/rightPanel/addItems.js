import React, { useState } from "react";
import { InputField, InputSelect, TextArea } from "../sacomponents/Input/Input";
const AddItems = ({ onSave, onCancel, choosePanel }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    note: "",
    image: "",
    category: "",
  });
  
    React.useEffect(()=>{
        valueExists(newItem)
    },[newItem])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
  
    if(valueExists(newItem)){
        console.log("****************", newItem);
    }
      choosePanel(0)
    
  };
  const ImageLabel="<div><span>Image <a target='_blank' href='https://image-link-generator.netlify.app/' style='color: blue'>(Image Link Generator)</a></span></div>"
  
  
 const valueExists = (obj) => Object.keys(obj).every((key) => obj[key] !== '');
  return (
    <div class=" max-[768px]:w-11/12 bg-white w-1/5 flex  justify-start flex-col h-screen">
      <div class="mx-8 mt-10 overflow-y-auto ">
        <span class="text-xl ml-1"> Add New Item</span>
        <div class=" mt-12 flex flex-col gap-6  ">
          <InputField
            label={"Name"}
            value={newItem.name}
            name={"name"}
            onChange={(e) => handleChange(e)}
          />
          <TextArea
            label={"Note"}
            value={newItem.note}
            name={"note"}
            onChange={(e) => handleChange(e)}
          />
          <InputField
            label={ImageLabel}
            value={newItem.image}
            name={"image"}
            onChange={(e) => handleChange(e)}
          />

          <InputSelect
            options={["Select Category", "Veggies", "Snack"]}
            value={newItem.category}
            name={"category"}
            onChange={(e) => handleChange(e)}
            label={"Category"}
          />
        </div>
      </div>
      <div class=" mt-10 bg-white h-1/6 flex flex-row justify-center items-center ">
        <button
          class="rounded-lg p-3.5 px-5 mt-2 text-sm text-[#F9A109] mr-2  bg-white"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          class="rounded-lg p-3.5 px-5 mt-2 text-sm text-white mr-2 disabled:bg-slate-400  bg-[#F9A109]"
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
