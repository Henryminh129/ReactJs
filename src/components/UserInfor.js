import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'HenryMinh',
        address: ' ',
        age: 26
    }

    handleOnChangeInput_Name = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    handleOnChangeInput_Age = (event) => {
        this.setState({
            age: event.target.value,
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                my name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>

                    <label>YOUR NAME</label>
                    <input type='text' placeholder="Nhập"
                        onChange={(event) => this.handleOnChangeInput_Name(event)}
                        value={this.state.name}>
                    </input>
                    <div></div>
                    <label>YOUR AGE</label>
                    <input type='text' placeholder="Nhập"
                        onChange={(event) => this.handleOnChangeInput_Age(event)}
                        value={this.state.age}>
                    </input>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;
