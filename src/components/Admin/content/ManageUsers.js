import ModalCreateNewUser from "./ModalCreateUser"
import './ManageUsers.scss'
import { FcPlus } from 'react-icons/fc'
import TableUser from "./TableUser"
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";

const ManageUsers = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)

    const [listUsers, setListUsers] = useState([])


    useEffect(() => {
        fetchListUsers()
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }


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
                    <TableUser listUsers={listUsers} />
                </div>
                <ModalCreateNewUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers} />
            </div>
        </div>
    )
}

export default ManageUsers