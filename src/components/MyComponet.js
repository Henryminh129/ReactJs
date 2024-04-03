import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

    state = {
        listUsers: [

        ]
    }

    handleAddNewUser = (userObj) => {
        console.log(userObj)
        this.setState({
            listUsers: [
                userObj, ...this.state.listUsers
            ]
        })

    }

    render() {
        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                <br /> <br />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;