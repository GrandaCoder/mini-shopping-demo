const Card = () => {
  return (
    <div className='bg-white cursor-pointer w-56 h-60'>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 p-1'>Electronics</span>
            <img className="w-full h-full object-cover rounded-lg" src='https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=""/>
            <div className='absolute top-0 right-0 flex items-center justify-center bg-white w-6 h-6 rounded-full m-1'>+</div>
        </figure>
        <p className="flex justify-between"> 
            <span className="text-sm font-light">Headphones</span>
            <span className="text-lg font-semibold">$300</span>
        </p>
    </div>
  )
}

export default Card