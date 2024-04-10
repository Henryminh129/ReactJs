import React, { useState } from "react";




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
