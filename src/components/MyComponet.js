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

    handleOnMouseOver = (event) => {
        console.log(event)
    }

    render() {
        return (
            <div>
                my name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Click me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;