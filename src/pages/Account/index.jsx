import { useContext, useEffect, useState } from "react"
import Layout from "../../components/Layout"
import PropTypes from 'prop-types';
import { getCurrentUser, updateUser } from "../../utils";
import { ShoppingContext } from "../../context";

const EditMode = ({ currentUser, onChangedValues }) => {
    const [infoUser, setInfoUser] = useState(currentUser)

    useEffect(() => {
        onChangedValues({newName: infoUser.name, newEmail: infoUser.email})
    }, [infoUser, onChangedValues])

    return (
        <>
            <p className=" font-medium">Change your name</p>
            <input   
                className="my-3 w-full p-3 rounded-lg cursor-pointer border"
                type="text"
                value={infoUser.name}
                onChange={(e) => setInfoUser({ ...infoUser, name: e.target.value })}
                placeholder="New Name"
            />
            <p className=" font-medium">Change your email</p>
            <input
    
                className="my-3 w-full p-3 rounded-lg cursor-pointer border"
                type="email"
                value={infoUser.email}
                onChange={(e) => setInfoUser({ ...infoUser, email: e.target.value })}
                placeholder="New Email"
            />
        </>
    )
}


EditMode.propTypes = {
    currentUser: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
    onChangedValues: PropTypes.func.isRequired,
};


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



function Account() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios"))
    const currentUser = usuarios.find(usuario => usuario.online === true)

    const [editInformation, setEditInformation] = useState(false)
    let newIformation = {}

    const handleEditInfo = () => {
        setEditInformation(!editInformation)
    }

    const onChangedValues = ({ newName, newEmail }) => {
        newIformation = { newName, newEmail }
        console.log(newIformation)
        // updateUser(currentUser, { newName, newEmail })
    }
    
    const contexto = useContext(ShoppingContext)
    
    const saveUserInformation = () => {
        updateUser(currentUser, newIformation)
        setEditInformation(!editInformation)

        const updatedUser = getCurrentUser()
        contexto.setCurrentUser(updatedUser)
    }

    return (
        // 
        <Layout>
            <div className="flex items-center justify-center">
                <div className="max-w-[500px] w-full p-4">
                    <h1 className="text-4xl text-center">Account</h1>
                    <div className="flex flex-col my-4 gap-2">
                        {editInformation ? <EditMode currentUser={currentUser} onChangedValues={onChangedValues} /> : <DefaultMode currentUser={currentUser}  />}
                        {!editInformation &&   <button
                            className=" w-full p-3 bg-black text-white rounded-lg cursor-pointer"
                            onClick={() => handleEditInfo()}>Edit</button>}
                        {editInformation && <button className="w-full p-3 bg-green-600 text-white rounded-lg cursor-pointer" onClick={() => saveUserInformation()}>Save</button>}
                        {editInformation && <button className="w-full p-3 bg-red-600 text-white rounded-lg cursor-pointer" onClick={() => setEditInformation(!editInformation)}>cancel</button>}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Account