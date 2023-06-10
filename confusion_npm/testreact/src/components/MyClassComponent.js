import { event } from "jquery";
import React from "react";

class MyClassComponent extends React.Component {
    state = {
        name : 'qu'
    }

    handlechange = (event) => {
        this.setState(
            {
                name:event.target.value
            }
        )
    }
    render() {

        return (
            <div>
                <input type="text" value={this.state.name} onChange={(event) => this.handlechange(event)} />
                <h1>Hello {this.state.name}</h1>
            </div>
            
        )
        return (
            <div>
                <h1>asdasd</h1>
            </div>
        )
    }

}
export default MyClassComponent;