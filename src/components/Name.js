import React from 'react'

function Name({name}, {index}) {
    return (
        <div>
            <h2>
                {index} I am {name.firstName}.
            </h2>
        </div>
    )
}

export default Name
