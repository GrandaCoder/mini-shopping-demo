import Layout from "../../components/Layout"

function SignIn() {
    return (
        <Layout>
            <div className="min-w-[500px] ">
                <h1 className="text-4xl text-center">Bienvenido</h1>
                <form action="" className="flex flex-col my-4 py-3 ">
                    <div className="mb-3 w-full flex ">
                        <label className="min-w-[100px]" htmlFor="email">Email:</label>
                        <input className="w-full pl-1" type="email" id="email" placeholder="example@mail.com" required />
                    </div>

                    <div className="mb-3 w-full flex">
                        <label className="min-w-[100px]" htmlFor="password">Password:</label>
                        <input className="w-full pl-1" type="password" id="password" placeholder="******" required />
                    </div>
                    <button className="my-5 w-full p-3 bg-black text-white rounded-lg cursor-pointer">Log in</button>
                </form>
                <p className=" mb-2 text-center underline cursor-pointer">¿olvíaste tu contraseña?</p>
                <button className=" w-full p-3 bg-gray-400 text-white rounded-lg cursor-pointer">Registrarse</button>
            </div>
        </Layout>
    )
}
export default SignIn