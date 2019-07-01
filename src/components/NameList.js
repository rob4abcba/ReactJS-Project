import React from 'react'
import Person from './Person'
import Name from './Name'

function NameList() {
    const names = [
        {
            firstName: 'Bruce',
            lastName: "Wayne"
        },
        {
            firstName: 'Clark',
            lastName: "Kent"
        },
        {
            firstName: 'Diana',
            lastName: "WonderWoman"
        }
    ]

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

    // const nameList = names.map(name => <h2>{name}</h2>)
    const nameList = names.map(name => <Name key={name.firstName} name={name} />)
    const personList = persons.map(person => <Person key={person.name} person={person} />)

    return (
        <div>
            {nameList}, {personList}
        </div>
    )
}
export default NameList
