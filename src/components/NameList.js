import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Springsteen', 'Clark', 'Diana']
    const persons = [
        {
            name: "Bruce Martin",
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
    const personList = persons.map(person => <Person person={person}/>)

    return (
        <div>
            {nameList}, {personList}
        </div>
    )
}
export default NameList
