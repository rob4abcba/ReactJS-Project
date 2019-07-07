import React from 'react'
import Person from './Person'
import Name from './Name'

function NameList() {
    const names = ["Bruce", "Clark", "Bruce"]
    // const names = [
    //     {
    //         firstName: 'Bruce',
    //         lastName: "Wayne"
    //     },
    //     {
    //         firstName: 'Clark',
    //         lastName: "Kent"
    //     },
    //     {
    //         firstName: 'Bruce',
    //         lastName: "WonderWoman"
    //     }
    // ]

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

    const nameList = names.map( (name, index) => <h2 key={index}>{index} {name}</h2>)
    // const nameList = names.map( (name,index) => <Name key={index} index={index} name={name} />)
    const personList = persons.map(person => <Person key={person.name} person={person} />)

    return (
        <div>
            {nameList}, {personList}
            <Name />
        </div>
    )
}
export default NameList
