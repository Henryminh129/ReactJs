import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    state = {
        listUsers: [

        ]
    }

    handleAddNewUser = (userObj) => {

        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        this.setState({
            listUsers: listUsersClone
        })
    }

    render() {
        return (
            <>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                <br /> <br />
                <DisplayInfor listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser} />
            </>
        );
    }
}

export default MyComponent;