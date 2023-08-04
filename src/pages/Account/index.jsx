import Layout from "../../components/Layout"

function Account() {

    const usuarios = JSON.parse(localStorage.getItem("usuarios"))
    const currentUser = usuarios.find(usuario => usuario.online === true)

    return (
        <Layout>
            <div className="flex items-center justify-center">
                <div className="min-w-[500px] ">
                    <h1 className="text-4xl text-center">Account</h1>
                    <div className="flex flex-col my-4 py-3 ">
                        <p className="mb-2">Name: <span className="font-medium">{currentUser.name}</span></p>
                        <p className="mb-2">Email: <span className="font-medium">{currentUser.email}</span></p>
                        <button className="my-5 w-full p-3 bg-black text-white rounded-lg cursor-pointer">Edit</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Account