import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { name, age } = this.props
        return (
            <div>
                <div>my name is {this.props.name}</div>
                <div>my age is{this.props.age}</div>
            </div>
        );
    }
}
export default DisplayInfor