import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingContext } from '../../context'

function ProductDetail() {
  const contexto = useContext(ShoppingContext)
  return (
    <aside
    className={`${contexto.isProductOpen ? 'block' : 'hidden'} flex flex-col fixed right-0 bg-white border border-black rounded-lg w-full md:w-[360px] h-[calc(100vh-80px)]`}>
      <div className="flex justify-between items-center p-6">
        <h1>Product Detail</h1>
        <XCircleIcon onClick={contexto.changeVisibleProductDetail} className='w-6 h-6 text-red-500 cursor-pointer'/>
      </div>
      <figure className='px-6'> 
        <img className='w-full rounded-lg' src={contexto.productoToShow.images ? contexto.productoToShow.images : 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt={contexto.productoToShow.title} />
      </figure>
      <p className='flex flex-col p-4'>
        <span className='font-medium text-2xl mb-2'>{contexto.productoToShow.title}</span>
        <span className='text-xl'>${contexto.productoToShow.price}</span>
        <span className='text-sm'>{contexto.productoToShow.category?.name}</span>
        <span className='text-sm'>{contexto.productoToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail