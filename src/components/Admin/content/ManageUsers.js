import ModalCreateNewUser from "./ModalCreateUser"

const ManageUsers = (props) => {
    return (
        <div className="manage-user-container">
            <div className='title'>
                Manage Users
            </div>
            <div className="users-content">
                <button >Add new users</button>
            </div>
            <div>
                table Users
                <ModalCreateNewUser />
            </div>
        </div>
    )
}

export default ManageUsers