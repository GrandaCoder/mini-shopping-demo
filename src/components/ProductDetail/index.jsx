import { XCircleIcon } from '@heroicons/react/24/solid'

function ProductDetail() {
  return (
    <aside className='flex flex-col fixed right-0 bg-white border border-black rounded-lg w-[360px] h-[calc(100vh-80px)]'>
      <div className="flex justify-between items-center p-6">
        <h1>Product Detail</h1>
        <XCircleIcon className='w-6 h-6 text-red-500 cursor-pointer'/>
      </div>
    </aside>
  )
}

export default ProductDetail