import ModalCreateNewUser from "./ModalCreateUser"
import './ManageUsers.scss'

const ManageUsers = (props) => {
    return (
        <div className="manage-user-container">
            <div className='title'>
                Manage Users
            </div>
            <div className="users-content">
                <button >Add new users</button>
                <div>
                    table Users
                </div>
                <ModalCreateNewUser />
            </div>
        </div>
    )
}

export default ManageUsers