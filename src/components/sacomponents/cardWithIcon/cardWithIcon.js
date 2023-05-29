import { BsPlusLg } from 'react-icons/bs';
const CardWithIcon=({title='Banana',onClick})=>{
    return (

   
        <div class='ml-4 py-3 px-4  bg-white w-64 rounded-xl shadow-lg flex items-center  justify-around flex-row' >
          <div class=' w-40 items-center justify-center break-words text-base'>
        <p>{title}</p>
          </div>
          <div>
          <BsPlusLg size={22} onClick={onClick}  class="stroke-1 text-[#C1C1C4] hover:stroke-2 hover:text-orange-300"/>
          </div>
    
        </div>
      );
}

export default CardWithIcon