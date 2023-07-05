import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingContext } from '../../context'

function ProductDetail() {
  const contexto = useContext(ShoppingContext)
  console.log(" Producto para mostrar ", contexto.productoToShow)

  return (
    <aside
      className={`${contexto.isProductOpen ? 'block' : 'hidden'} flex flex-col fixed right-0 bg-white border border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
      <div className="flex justify-between items-center p-6">
        <h1>Product Detail</h1>
        <XCircleIcon onClick={contexto.changeVisibleProductDetail} className='w-6 h-6 text-red-500 cursor-pointer' />
      </div>
      <figure className='px-4'>
        {contexto.productoToShow.images && contexto.productoToShow.images.length > 0 && (
          <img className='w-full h-full rounded-lg' src={contexto.productoToShow.images[0]} alt={contexto.productoToShow.title} />
        )}
      </figure>
      <p className='flex flex-col p-4'>
        <span>{contexto.productoToShow.title}</span>
        <span>${contexto.productoToShow.price}</span>
        {contexto.productoToShow.category && (
          <span>{contexto.productoToShow.category.name}</span>
        )}
        <span>{contexto.productoToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail