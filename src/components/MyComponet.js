import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

    render() {
        return (
            <div>
                <UserInfor />
                <br /> <br />
                <DisplayInfor name={ } />
            </div>
        );
    }
}

export default MyComponent;