import React from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        const { listUsers } = this.props
        return (
            <div className="display-infor-container">
                <img src={logo}></img>
                <div >
                    <button className="box" onClick={() => { this.handleShowHide() }}>{this.state.isShowListUser === true ? "HIDE LIST USERS" : "SHOW LIST USERS"}</button>
                </div>
                {listUsers.map((user) => {
                    return (
                        <div>
                            {this.state.isShowListUser && <div className={user.age > 18 ? "green" : "red"} key={user.id}>
                                <div>my name is {user.name}</div>
                                <div>my age is {user.age}</div>
                                <hr></hr>
                            </div>}


                        </div>
                    )
                })}
            </div>
        );
    }
}
export default DisplayInfor