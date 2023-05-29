
import Bottle from '../../assets/source.svg'
import { MdEdit } from 'react-icons/md';
const RenderItems=()=>{
  
  const sampleData=[{type:'Fruits',items:[{name:'Banana',count:2},{name:'Apple',count:0}]},
  {type:'Veggies',items:[{name:'Tomoato',count:2},{name:'Spinach',count:0}]}
]
    return(
        <div class='absolute max-[768px]:w-11/12 bg-[#FFF0DE] w-1/5 flex  justify-between flex-col h-screen'>
  <div class='mx-12 overflow-y-auto'>
  <div class='mt-10  h-32 rounded-2xl flex flex-row justify-evenly bg-[#80485B]'>
    <div>
    <img src={Bottle} alt='bottle'/>
    </div>
    <div class='mx-1 self-center break-words'>
    <p class='text-base text-white' >Didn’t find what you need?</p>
    <button class="rounded-lg p-2 px-5 mt-2 text-sm  bg-slate-50">Add Item</button>
    </div>
  </div>

  <div class=' mt-12 flex flex-row justify-between items-center'>
    <div class='text-2xl'>
    <p>Shopping List</p>
    </div>
    <div>
    <MdEdit size={20}/>
    </div>

  </div>

  <div class='mt-11 relative '>
    {
      sampleData.map((value,i)=>{
        return(
          <div class='mb-6'>
            <p class='text-sm text-[#828282]'>{value.type}</p>
            {value.items.map((item,i)=>{
              return(
                <div class=' mb-3 py-2 flex flex-row justify-between items-center'>
                  <div>
                  {item.name}
                  </div>
                  <div>
                    {item.count}
                  </div>
                </div>
              )
            })}
          </div>

         
        )
      })
    }
  </div>

  </div>
  <div class=' bg-white h-1/6'>
hi
  </div>

  </div>
    )
}

export default RenderItems