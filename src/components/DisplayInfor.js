import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { listUsers } = this.props
        return (
            <div>
                {listUsers.map((user) => {
                    if (user.age < 20) {
                        return (
                            <div className="red" key={user.id}>
                                <div>my name is {user.name}</div>
                                <div>my age is {user.age}</div>
                                <hr></hr>
                            </div>
                        )
                    } else {
                        return (
                            <div className="green" key={user.id}>
                                <div>my name is {user.name}</div>
                                <div>my age is {user.age}</div>
                                <hr></hr>
                            </div>
                        )
                    }

                })}
            </div>
        );
    }
}
export default DisplayInfor