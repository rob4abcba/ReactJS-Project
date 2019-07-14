import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        // Ref Method New
        super(props)
        this.inputRef = React.createRef()
        // Ref Method Old
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        // Ref Method Old
        if (this.cbRef) {
            this.cbRef.focus()
        }
        // Ref Method New
        // this.inputRef.current.focus()
        // console.log("this.inputRef = ", this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
