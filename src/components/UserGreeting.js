import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // Method 4: Short-Circuit Operator
        return(
            this.state.isLoggedIn && <div>Welcome Doogie Howser</div>
        )

        // // Method 3: Tertiary Conditional Operator
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Tom Brady</div> :
        //     <div>Welcome Peyton Manning Guest</div>
        // )

        // Method 2: Element Variables        
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Peter</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // Method 1: if ... else ...
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <div>Welcome SvMathTutor</div>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <div>Welcome Guest</div>
        //         </div>
        //     )
        // }

    }
}

export default UserGreeting
