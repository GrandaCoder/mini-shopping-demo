import { useRef, useContext } from "react"
import { NavLink, useNavigate} from "react-router-dom"
import Layout from "../../components/Layout"
import { ShoppingContext } from "../../context"

function SignIn() {
    const contexto = useContext(ShoppingContext)
    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()

    let usuarios = []

    const validateUser = (e) => {
        e.preventDefault()
        //serch on user on local storage
        usuarios = JSON.parse(localStorage.getItem("usuarios")) 
        const usuario = usuarios.find(usuario => usuario.email === emailRef.current.value && usuario.password === passwordRef.current.value)
        console.table(usuarios)
        
        if (usuario) {
            contexto.setOnline(true)
            usuario.online = true
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            navigate("/")
        }else{
            alert("Por favor verifique su email y contraseña")
        }
    }

    return (
        <Layout>
            <div className="min-w-[500px] ">
                <h1 className="text-4xl text-center">Bienvenido</h1>
                <form action="" className="flex flex-col my-4 py-3 " onSubmit={(e) => validateUser(e)}>
                    <div className="mb-3 w-full flex ">
                        <label className="min-w-[100px]" htmlFor="email">Email:</label>
                        <input ref={emailRef} className="w-full pl-1" type="email" id="email" placeholder="example@mail.com" required />
                    </div>

                    <div className="mb-3 w-full flex">
                        <label className="min-w-[100px]" htmlFor="password">Password:</label>
                        <input ref={passwordRef} className="w-full pl-1" type="password" id="password" placeholder="******" required />
                    </div>
                    <button className="my-5 w-full p-3 bg-black text-white rounded-lg cursor-pointer">Log in</button>
                </form>
                <p className=" mb-2 text-center underline cursor-pointer">¿olvíaste tu contraseña?</p>

                <NavLink to="/sign-up">
                    <button className=" w-full p-3 bg-gray-400 text-white rounded-lg cursor-pointer">Registrarse</button>
                </NavLink>
            </div>
        </Layout>
    )
}
export default SignIn