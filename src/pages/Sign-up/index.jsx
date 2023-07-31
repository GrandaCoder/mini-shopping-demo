import { useRef, useContext } from 'react'
import { useNavigate , NavLink } from 'react-router-dom'
import Layout from '../../components/Layout'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import { User } from '../../models/user.class'
import { ShoppingContext } from '../../context'

export const Signup = () => {
    const contexto = useContext(ShoppingContext)
    const navigate = useNavigate()


    const inputName = useRef()
    const inputEmail = useRef()
    const inputPassword = useRef()

    const registrarUsuario = (e) => {
        e.preventDefault()
        const usarioNuevo = new User(inputName.current.value, inputEmail.current.value, inputPassword.current.value)
        const usuarios = JSON.parse(localStorage.getItem('usuarios'))
        usuarios.push(usarioNuevo)
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        contexto.setOnline(true)

        // redirecionar a /home
        navigate('/')
    }

    return (
        <Layout>
            <div className="min-w-[500px] ">
                <h1 className="text-4xl text-center">Regístrate</h1>
                <NavLink to="/signin">
                    <ArrowUturnLeftIcon className='w-6 h-6 text-base cursor-pointer' />
                </NavLink>
                <form action="" className="flex flex-col my-4 py-3 " onSubmit={(e) => registrarUsuario(e)} >
                    <div className="mb-3 w-full flex flex-col ">
                        <label className='mb-2' htmlFor="name">Nombre:</label>
                        <input ref={inputName} className="w-full p-3 border border-black rounded-lg" type="text" id="name" placeholder="Your name" required />
                    </div>
                    {/* email */}
                    <div className="mb-3 w-full flex flex-col ">
                        <label className='mb-2' htmlFor="email">Email:</label>
                        <input ref={inputEmail} className="w-full p-3 border border-black rounded-lg" type="email" id="email" placeholder="example@mail.com" required />
                    </div>
                    {/* password */}
                    <div className="mb-3 w-full flex flex-col ">
                        <label className='mb-2' htmlFor="password">Password:</label>
                        <input ref={inputPassword} className="w-full p-3 border border-black rounded-lg" type="password" id="password" placeholder="******" required />
                    </div>
                    <button className="my-5 w-full p-3 bg-black text-white rounded-lg cursor-pointer">Create account</button>

                </form>
            </div>
        </Layout>
    )
}
