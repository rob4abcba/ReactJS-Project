import React from 'react'

// function Greet() {
//     return <h1>Hello Federal</h1>
// }

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Functional Component with return div</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Complicated no JSX createElement method')
    )
}

export default Hello