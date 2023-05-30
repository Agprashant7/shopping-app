import { InputField } from '../sacomponents/Input/Input';
import Bottle from '../../assets/source.svg'
import Cart from '../../assets/cart.svg'
const EmptyList=()=>{
    return(
        <div class='absolute max-[768px]:w-11/12 bg-[#FFF0DE] w-1/5 flex  justify-between flex-col h-screen'>
        <div class='mx-10 overflow-y-auto'>
        <div class='mt-10  h-32 rounded-2xl flex flex-row justify-evenly bg-[#80485B]'>
        <div>
            <img src={Bottle} alt='bottle'/>
            </div>
            <div class='mx-1 self-center break-words'>
                <p class='text-base text-white' >Didn’t find what you need?</p>
                <button class="rounded-lg p-2 px-5 mt-2 text-sm  bg-slate-50">Add Item</button>
            </div>
        </div>
      
        <div class=' mt-12 flex flex-col justify-evenly items-center'>
            <div class='grow h-64 '>
                <p class='text-base' >No Items</p>
            </div>
            <div class='shrink-4'>
                <img src={Cart} alt='bottle'/>
            </div>
            
        </div>
        {/* <div class='mt-11 relative '>
        
        </div> */}
      
        </div>
        <div class=' bg-white h-1/6 flex flex-row justify-center '>
          <InputField disabled={true}  />
          <button class="rounded-lg p-3.5 px-5 mt-2 text-sm text-white mr-2 absolute right-4  bg-[#C1C1C4]">Save</button>
        </div>
      
        </div>
    )
}

export default EmptyList