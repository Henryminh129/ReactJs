import ModalCreateNewUser from "./ModalCreateUser"
import './ManageUsers.scss'
import { FcPlus } from 'react-icons/fc'
import { useState } from "react"

const ManageUsers = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)

    return (
        <div className="manage-user-container">
            <div className='title'>
                Manage Users
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => { setShowModalCreateUser(true) }} > <FcPlus /> Add new users</button>
                </div>

                <div className="table-users-container">
                    table Users
                </div>
                <ModalCreateNewUser show={showModalCreateUser} setShow={setShowModalCreateUser} />
            </div>
        </div>
    )
}

export default ManageUsers