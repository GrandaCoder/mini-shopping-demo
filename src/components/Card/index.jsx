import { useContext } from "react"
import { ShoppingContext } from "../../context"
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid"

const Card = (producto) => {
  const contexto = useContext(ShoppingContext)

  const aumentarContador = (evento) => {
    evento.stopPropagation()
    addProductsToCart(producto.producto)
    contexto.setContador(contexto.contador + 1)
    contexto.closeProductDetail()
    contexto.openCheckoutSideMenu()
  }

  const addProductsToCart = (productData) => {
    contexto.setCartProducts([productData, ...contexto.cartProducts])
  }


  const showProduct = (dataProduct) => {
    contexto.setIsProductOpen(true)
    contexto.setProductoToShow(dataProduct)
    contexto.closeCheckoutSideMenu()
  }

  const renderIcon = (id) => {
    const isInCart = contexto.cartProducts.some(producto => producto.id === id)
    if (!isInCart) {
      return (
        <div className='absolute top-0 right-0 flex items-center justify-center bg-white w-8 h-8 rounded-full m-1 select-none'
         
        >
          <PlusIcon className='w-5 h-5 text-black'  onClick={aumentarContador}/>
        </div>
      )
    } else {
      return (
        <div  className='absolute top-0 right-0 flex items-center justify-center bg-black  w-8 h-8 rounded-full m-1 select-none'
        >
          <CheckIcon className='w-5 h-5 text-white' onClick={(e)=> e.stopPropagation()}/>
        </div>
      )
    }
  }
  return (
    <div
      onClick={() => { showProduct(producto.producto) }}
      className='bg-white cursor-pointer w-56 h-60 hover:shadow-lg hover:shadow-gray-400 rounded-lg hover:ease-in-out duration-300'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 p-1'>{producto.producto.category.name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={producto.producto.images[0]} alt="" />
        {renderIcon(producto.producto.id)}
      </figure>
      <p className="flex justify-between px-2 items-center">
        <span className="text-sm font-light">{producto.producto.title}</span>
        <span className="text-lg font-semibold">${producto.producto.price}</span>
      </p>
    </div>
  )
}

export default Card