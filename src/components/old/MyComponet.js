import React, { useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';


const MyComponent = (props) => {

    const [listUsers, setListUsers] = useState([])

    const handleAddNewUser = (userObj) => {

        for (let user of listUsers) {
            if (userObj.id <= user.id) {
                userObj.id = user.id + 1
            }
        }
        setListUsers([userObj, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone);
    }

    return (
        <>
            <AddUserInfor handleAddNewUser={handleAddNewUser} />
            <br /> <br />
            <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
        </>
    );

}

export default MyComponent;