import { InputField, InputSelect, TextArea } from "../sacomponents/Input/Input"
const AddItems=({onSave,onCancel})=>{
    return(
        <div class='absolute max-[768px]:w-11/12 bg-white w-1/5 flex  justify-start flex-col h-screen'>
        <div class='mx-8 overflow-y-auto '>      
            <span class='text-xl ml-1'> Add New Item</span>
            <div class=' mt-12 flex flex-col gap-6  '>
            <InputField label={'Name'} />
            <TextArea label={'Note'} />
            <InputField label={'Image'} />
            <InputSelect options={['Meat','Veggies','Snack']} label={'Category'} />
            </div>
        </div>
        <div class=' bg-white h-1/6 flex flex-row justify-center items-center '>
            <button class="rounded-lg p-3.5 px-5 mt-2 text-sm text-[#F9A109] mr-2  bg-white" onClick={onCancel}>Cancel</button>
            <button class="rounded-lg p-3.5 px-5 mt-2 text-sm text-white mr-2  bg-[#F9A109]" onClick={onSave}>Save</button>
        </div>
        </div>
    )
}
export default AddItems