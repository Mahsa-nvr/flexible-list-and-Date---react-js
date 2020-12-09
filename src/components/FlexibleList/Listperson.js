import React from 'react';
import Person from './Persons';

class Listperson extends React.Component {

    state= {
        totalPerson : [
            {id:1, name: 'max' , age: 28},
            {id:2, name: 'alex' , age: 30},
            {id:3, name: 'maria' , age: 33}
        ],
        show: false
    }

    nameChangedHandler = (event , id) => {
      const personIndex = this.state.totalPerson.findIndex(p => {
          return p.id === id
      })
      const person = {
          ...this.state.totalPerson[personIndex]
      }
      person.name = event.target.value
      const persons = [...this.state.totalPerson]
      persons[personIndex] = person
      this.setState({
          totalPerson :persons
      })
    }


    deleteHandler = (personIndex) => {
       const persons = [...this.state.totalPerson]
       persons.splice(personIndex,1)
       this.setState({ totalPerson :persons })
    }

    toggle = () => {
      this.setState({
             show: !this.state.show
         })
    }
    render() {

        let persons = null;
        if(this.state.show) {
            persons = (
                <div>
                 {this.state.totalPerson.map((person, index) => {
                     return <Person
                     
                     click={() => this.deleteHandler(index)}
                     name={person.name}
                     age={person.age}
                     key={index}
                     changed={(event) => this.nameChangedHandler(event, person.id)}
                     />
                 })}
                </div>
            )
        }

        return (
            <div>
                hellllooo person list
                <button onClick={this.toggle}>toggle</button>
                {persons}
            </div>
        )
    }
}

export default Listperson;