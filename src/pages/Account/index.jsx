import Layout from "../../components/Layout"

function Account() {
    return (
        <Layout>
            <div className="min-w-[500px] ">
                <h1 className="text-4xl text-center">Account</h1>
                <div className="flex flex-col my-4 py-3 ">
                    <p className="mb-2">Name: <span className="font-medium">John Doe</span></p>
                    <p className="mb-2">Email: <span className="font-medium">G7b7N@example.com</span></p>
                    <button className="my-5 w-full p-3 bg-black text-white rounded-lg cursor-pointer">Edit</button>
                </div>
            </div>
        </Layout>
    )
}
export default Account