import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "EventBind.js message"
        }
    }
    
    render() {
        return (
            <div>
                {this.state.message}
            </div>
        )
    }
}

export default EventBind
