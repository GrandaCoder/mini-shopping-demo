import { NavLink } from 'react-router-dom'
import Layout from '../../components/Layout'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

export const Signup = () => {
    return (
        <Layout>
            <div className="min-w-[500px] ">
                <h1 className="text-4xl text-center">Regístrate</h1>
                <NavLink to="/signin">
                    <ArrowUturnLeftIcon className='w-6 h-6 text-base cursor-pointer' />
                </NavLink>
                <form action="" className="flex flex-col my-4 py-3 ">
                    <div className="mb-3 w-full flex flex-col ">
                        <label className='mb-2' htmlFor="name">Nombre:</label>
                        <input className="w-full p-3 border border-black rounded-lg" type="text" id="name" placeholder="Your name" required />
                    </div>
                    {/* email */}
                    <div className="mb-3 w-full flex flex-col ">
                        <label className='mb-2' htmlFor="email">Email:</label>
                        <input className="w-full p-3 border border-black rounded-lg" type="email" id="email" placeholder="example@mail.com" required />
                    </div>
                    {/* password */}
                    <div className="mb-3 w-full flex flex-col ">
                        <label className='mb-2' htmlFor="password">Password:</label>
                        <input className="w-full p-3 border border-black rounded-lg" type="password" id="password" placeholder="******" required />
                    </div>
                    <button className="my-5 w-full p-3 bg-black text-white rounded-lg cursor-pointer">Create account</button>
                </form>
            </div>
        </Layout>
    )
}
