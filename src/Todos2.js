import React from 'react'

const Todos2 = ({todos2}) => { 

    const todo2List = todos2.length ? (
        todos2.map(todo2 => {
            return (
                <div className="collection-item" key={todo2.id}>
                    <span>{todo2.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left. Hurray!! </p>
    )
    return (
        <div className="todos collection">
            {todo2List}
        </div>
    )
}

export default Todos2
