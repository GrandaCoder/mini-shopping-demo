import { useState } from "react"
import Layout from "../../components/Layout"
import PropTypes from 'prop-types';

const EditMode = ({ currentUser }) => {
    const [infoUser, setInfoUser] = useState(currentUser)

    return (
        <>
            <p className=" font-medium">  Change your name</p>
            <input
                className="my-3 w-full p-3 rounded-lg cursor-pointer outline"
                type="text"
                value={infoUser.name}
                onChange={(e) => setInfoUser({ ...infoUser, name: e.target.value })}
                placeholder="New Name"
            />
            <p>Change your email</p>
            <input
                className="my-3 w-full p-3 rounded-lg cursor-pointer outline"
                type="text"
                value={infoUser.email}
                onChange={(e) => setInfoUser({ ...infoUser, email: e.target.value })}
                placeholder="New Email"
            />
        </>
    )
}

const DefaultMode = ({ currentUser }) => {
    return (
        <>
            <p className="mb-2">Name: <span className="font-medium">{currentUser.name}</span></p>
            <p className="mb-2">Email: <span className="font-medium">{currentUser.email}</span></p>
        </>
    )
}

DefaultMode.propTypes = {
    currentUser: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
}

// ...

EditMode.propTypes = {
    currentUser: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
};


function Account() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios"))
    const currentUser = usuarios.find(usuario => usuario.online === true)

    const [editInformation, setEditInformation] = useState(false)

    const handleEditInfo = () => {
        setEditInformation(!editInformation)
    }

    return (
        // 
        <Layout>
            <div className="flex items-center justify-center">
                <div className="max-w-[500px] w-full p-4">
                    <h1 className="text-4xl text-center">Account</h1>
                    <div className="flex flex-col my-4 py-3 ">
                        {editInformation ? <EditMode currentUser={currentUser} /> : <DefaultMode currentUser={currentUser}  />}
                        {!editInformation &&   <button
                            className="my-5 w-full p-3 bg-black text-white rounded-lg cursor-pointer"
                            onClick={() => handleEditInfo()}>Edit</button>}
                      
                        {editInformation && <button className="my-5 w-full p-3 bg-green-600 text-white rounded-lg cursor-pointer" onClick={handleEditInfo}>Save</button>}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Account