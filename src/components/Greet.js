import React from 'react'

// function Greet() {
//     return <h1>Hello Federal</h1>
// }

const Greet = (props) => {
    const {name, heroName} = props
    console.log(" ")
    return (
        <div>
            <h1>Hello {name} also known as {heroName}</h1>,
        </div>
    )
}
export default Greet