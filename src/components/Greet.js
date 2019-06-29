import React from 'react'

// function Greet() {
//     return <h1>Hello Federal</h1>
// }

const Greet = ({name, heroName}) => {
    console.log(" ")
    return (
        <div>
            <h1>Hello {name} a.k.a. {heroName}</h1>,
        </div>
    )
}
export default Greet