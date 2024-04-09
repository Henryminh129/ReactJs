import React from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'

// class DisplayInfor extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             isShowListUser: true
//         }
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             document.title = 'Henry Minh'
//         }, 3000)
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log(this.props, prevProps)
//     }

//     handleShowHide = () => {
//         this.setState({
//             isShowListUser: !this.state.isShowListUser
//         })
//     }

//     render() {
//         const { listUsers } = this.props
//         return (
//             <div className="display-infor-container">
//                 <img src={logo}></img>
//                 <div >
//                     <button className="box" onClick={() => { this.handleShowHide() }}>{this.state.isShowListUser === true ? "HIDE LIST USERS" : "SHOW LIST USERS"}</button>
//                 </div>
//                 {listUsers.map((user, index) => {
//                     return (

//                         <div>
//                             {this.state.isShowListUser && <div className={user.age > 18 ? "green" : "red"} key={user.id}>
//                                 <div>
//                                     <div>my name is {user.name}</div>
//                                     <div>my age is {user.age}</div>
//                                 </div>
//                                 <div>
//                                     <button onClick={() => { this.props.handleDeleteUser(user.id) }}>DELETE</button>
//                                 </div>

//                                 <hr></hr>
//                             </div>}


//                         </div>
//                     )
//                 })}
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props
    return (
        <div className="display-infor-container">
            {listUsers.map((user, index) => {
                return (
                    <div>
                        {true &&
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
                                {console.log(user)}
                            </>}
                    </div>
                )
            })}
        </div>
    );
}
export default DisplayInfor