import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked baby')
    }
    return (
        <div>
            <button onClick={clickHandler}>Function Click</button>
        </div>
    )
}

export default FunctionClick
