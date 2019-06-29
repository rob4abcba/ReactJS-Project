import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "EventBind.js message"
        }
    }

    clickHandler() {
        this.setState({
            message: "You clicked the EventBind.js button!"
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.message}
                </div>
                <button onClick={this.clickHandler.bind(this)}>
                    Click this button to change message.
                </button>
            </div>
        )
    }
}

export default EventBind
