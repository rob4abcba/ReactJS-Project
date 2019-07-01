import React from 'react'

function NameList() {
    const names = ['Springsteen', 'Clark', 'Diana']
    const persons = [
        {
            name: "Bruce",
            age: 29,
            skill: "Angular"
        },
        {
            name: "Clark",
            age: 30,
            skill: "React"
        },
        {
            name: "Diana",
            age: 31,
            skill: "Java"
        }
    ]

    const nameList = names.map(name => <h2>{name}</h2>)
    const personList = persons.map(person => (
        <h2>
            I am {person.name}. I am {person.age} yrs old. I know {person.skill}
        </h2>
    ))

    return (
        <div>
            {nameList}, {personList}
        </div>
    )
}
export default NameList
