import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'


const DisplayInfor = (props) => {

    const { listUsers } = props

    const [isShowHideListUser, setShowHideListUser] = useState(true)

    const handleShowHide = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    //
    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('you have no user?')
            }
        }, [listUsers]
    )

    return (
        <div className="display-infor-container">
            <img src={logo}></img>
            <div>
                <button className="box" onClick={() => { handleShowHide() }}>{isShowHideListUser === true ? "HIDE LIST USERS" : "SHOW LIST USERS"}</button>
            </div>
            {listUsers.map((user, index) => {
                return (
                    <div>
                        {isShowHideListUser &&
                            <>
                                <div className={user.age > 18 ? "green" : "red"} key={user.id}>
                                    <div>
                                        <div>my name is {user.name}</div>
                                        <div>my age is {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => { props.handleDeleteUser(user.id) }}>DELETE</button>
                                    </div>

                                    <hr></hr>
                                </div>
                            </>}
                        {console.log(user)}
                    </div>

                )
            })}
        </div>
    );
}



export default DisplayInfor