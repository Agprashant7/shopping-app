import { AiOutlineClose } from 'react-icons/ai';
const CustomModal=({description,onClose,onSubmit})=>{

    return(
        
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        
      
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div class="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class='flex items-end justify-end' onClick={onClose}>
                    <AiOutlineClose color='#828282'/>
                </div>
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    {/* <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3> */}
                    <div class="mt-2 mx-2">
                      <p class="text-2xl">{description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="first-letter: px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="inline-flex w-full justify-center rounded-lg bg-[#EB5757] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={onSubmit}>Yes</button>
                <button type="button" class="mt-3 inline-flex w-full justify-center border-none px-3 py-2 text-sm font-semibold text-gray-900  data-te-modal-dismiss hover:bg-gray-50 sm:mt-0 sm:w-auto"onClick={onClose}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}
export default CustomModal