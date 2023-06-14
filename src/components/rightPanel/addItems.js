import React, { useEffect, useState } from "react";
import { InputField, InputSelect, TextArea } from "../sacomponents/Input/Input";
import { SHOPPING_LIST_CONSTANTS } from "../../utils/Constants";
import appConfig from "../services/appConfig";
import { post } from "../services/api";
import { useNavigate } from "react-router-dom";
const AddItems = ({ onSave, onCancel, choosePanel }) => {
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState({
    itemName: "",
    note: "",
    imageLink: "",
    category: "",
  });
  const [apiMsg,setApiMsg]=useState()

  useEffect(() => {
    valueExists(newItem);
  }, [newItem]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [event.target.name]: event.target.value });
  };

  const onSubmit = async e => {
    // e.preventDefault();
    if (valueExists(newItem)) {
      const { error, response } = await post(
        `${appConfig.API_BASE_URL}`,
        `${"/addItems"}`,
        newItem
      );
      console.log("error",error)
      console.log("response",response)
      // choosePanel();
      if(response){
        setApiMsg("Item Added Successfully")
        setNewItem({  itemName: "",
        note: "",
        imageLink: "",
        category: "",})
        setApiMsg("")
        choosePanel(0)
      }
      if(error){
        setApiMsg("Something Went Wrong...try again")
      }
    }
    
  };
  const ImageLabel =
    "<div><span>Image <a target='_blank' href='https://image-link-generator.netlify.app/' style='color: blue'>(Image Link Generator)</a></span></div>";

  const valueExists = (obj) => Object.keys(obj).every((key) => obj[key] !== "");
  return (
    <div className="max-[768px]:w-11/12 bg-[#faf9fe]  flex flex-col justify-between h-screen py-10">
    
      <div class="mx-8 overflow-y-auto ">
        <span class="text-xl ml-1 text-black font-medium">
          {SHOPPING_LIST_CONSTANTS.ADD_NEW_ITEM}
        </span>
        
        <div className="my-6">
          <div className="my-8">
            <InputField
              label={"Name"}
              value={newItem.itemName}
              name={"itemName"}
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
              value={newItem.imageLink}
              name={"imageLink"}
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
          <p className="">{apiMsg}</p>
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
