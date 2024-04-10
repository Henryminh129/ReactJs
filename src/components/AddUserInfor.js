import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             address: ' ',
//             age: Number
//         }
//     }




//     handleOnChangeInput_Name = (event) => {
//         this.setState({
//             name: event.target.value,
//         })
//     }

//     handleOnChangeInput_Age = (event) => {
//         this.setState({
//             age: event.target.value,
//         })
//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault()
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random()) + 1),
//             name: this.state.name,
//             age: this.state.age
//         })

//     }

//     render() {
//         return (
//             <div>
//                 my name is {this.state.name} and I'm {this.state.age}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>

//                     <label>YOUR NAME</label>
//                     <input type='text' placeholder="Nhập"
//                         onChange={(event) => this.handleOnChangeInput_Name(event)}
//                         value={this.state.name}>
//                     </input>
//                     <div></div>
//                     <label>YOUR AGE</label>
//                     <input type='text' placeholder="Nhập"
//                         onChange={(event) => this.handleOnChangeInput_Age(event)}
//                         value={this.state.age}>
//                     </input>

//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }



const AddUserInfor = (props) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleOnChangeInput_Name = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeInput_Age = (event) => {
        setAge(event.target.value)
    }


    const handleOnSubmit = (event) => {
        event.preventDefault()
        props.handleAddNewUser({
            id: Math.floor((Math.random()) + 1),
            name: name,
            age: age
        })
    }

    return (
        <div>
            my name is {name} and I'm {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>

                <label>YOUR NAME</label>
                <input type='text' placeholder="Nhập"
                    onChange={(event) => handleOnChangeInput_Name(event)}
                    value={name}>
                </input>
                <div></div>
                <label>YOUR AGE</label>
                <input type='text' placeholder="Nhập"
                    onChange={(event) => handleOnChangeInput_Age(event)}
                    value={age}>
                </input>

                <button>Submit</button>
            </form>
        </div>
    )

}

export default AddUserInfor;
