import Bottle from '../../assets/source.svg'
import { IoMdArrowBack } from 'react-icons/io';
const ItemDescription=({onDelete,onAddToList})=>{
    return(
        <div class='absolute max-[768px]:w-11/12 bg-white w-1/5 flex  justify-between flex-col h-screen'>
        <div class='mx-8 overflow-y-auto '>
            <div class='flex flex-row justify-start items-center'>
            <IoMdArrowBack color='#F9A109'/>
            <span class='text-[#F9A109] text-xs ml-1'> Back</span>
            </div>  
        <div class='mt-10  h-44 rounded-2xl flex flex-row justify-evenly bg-slate-500'> 
        <   img src={Bottle} alt='bottle'/>
        </div>

        <div class=' mt-12  '>
            <div >
                <p class='text-xs text-[#C1C1C4]'>name</p>
                <p class='text-xl mt-1 text-[#000000]'>Avocodo</p>
            </div>
            <div class='mt-10' >
                <p class='text-xs text-[#C1C1C4]'>Category</p>
                <p class='text-base mt-1 text-[#000000]'>Fruits</p>
            </div>
            <div class='mt-10' >
                <p class='text-xs text-[#C1C1C4]'>note</p>
                <p class='text-base mt-1 text-[#000000]'>Nutrient-dense foods are those that provide substantial amounts of vitamins, One-third of a medium avocado d choice. </p>
            </div>
        <div>
          </div>
      
        </div>

        </div>
        <div class=' bg-white h-1/6 flex flex-row justify-center items-center '>
         <button class="rounded-lg p-3.5 px-5 mt-2 text-sm text-[#F9A109] mr-2  bg-white" onClick={onDelete}>Delete</button>
          <button class="rounded-lg p-3.5 px-5 mt-2 text-sm text-white mr-2  bg-[#F9A109]" onClick={onAddToList}>Add to list</button>
        </div>
      
        </div>
    )
}

export default ItemDescription;