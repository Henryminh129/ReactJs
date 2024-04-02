import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'HenryMinh',
        address: ' ',
        age: 26
    }

    handleClick = (event) => {
        console.log(this.state.name);
        console.log(event.target)

        this.setState({
            name: 'Minh Phucs'
        })
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                my name is {this.state.name} and I'm from {this.state.address}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type='text' onChange={(event) => this.handleOnChangeInput(event)}></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;