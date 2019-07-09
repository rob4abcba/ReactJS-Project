import React from 'react'

function Columns() {
    const items = [{
        "id":"MyID",
        "title": "MyTitle"
    }]
    return (
        <React.Fragment>
            {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <React.Fragment>
                <td>Name</td>
                <td>svmathtutor</td>
            </React.Fragment>
        </React.Fragment>
    )
}

export default Columns
