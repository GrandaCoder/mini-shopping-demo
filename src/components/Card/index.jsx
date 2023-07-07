import { useContext } from "react"
import { ShoppingContext } from "../../context"

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
    contexto.setCartProducts([productData,...contexto.cartProducts ])
  }


  const showProduct = (dataProduct) => {
    contexto.setIsProductOpen(true)
    contexto.setProductoToShow(dataProduct)
    contexto.closeCheckoutSideMenu()
  }
  return (
    <div
      onClick={() => { showProduct(producto.producto) }}
      className='bg-white cursor-pointer w-56 h-60'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 p-1'>{producto.producto.category.name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={producto.producto.images[0]} alt="" />
        <div className='absolute top-0 right-0 flex items-center justify-center bg-white w-6 h-6 rounded-full m-1'
          onClick={aumentarContador}
        >+</div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{producto.producto.title}</span>
        <span className="text-lg font-semibold">${producto.producto.price}</span>
      </p>
    </div>
  )
}

export default Card