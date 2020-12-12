import React from 'react';
import styled from 'styled-components';
import Person from './Persons';
// import Radium, { StyleRoot } from 'radium';


const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  border: 1px solid blue;
  cursor: pointer;
  
  &:hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color: black;
  }
`


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

        //we can define object and set css property like this and we can change them in object person 
        const style={
          backgroundColor: 'green',
          color: 'white',
          border: '1px solid blue',
          cursor: 'pointer',
          ':hover'  :{
              backgroundColor: 'lightgreen',
              color: 'black'
          }
        }

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

            //we can change each property of style object
            // style.backgroundColor = 'red';
            // style[':hover']= {
            //     backgroundColor: 'salmon',
            //     color: 'black'
            // }
        }

        const classes = [];
        if (this.state.totalPerson.length <= 2) {
            classes.push('red'); // classes = ['red']
        }
        if (this.state.totalPerson.length <= 1) {
            classes.push('bold'); // classes = ['red' , 'bold']
        }

        return (
            // <StyleRoot >
            <div className="App">
                <h1>hellllooo person list</h1>

                // we can define className with array and js and we must join them to convert array to string
                 <div className={classes.join(' ')}>This is really working!</div>
                {/* <button 
                style = {style}
                onClick={this.toggle}>toggle
                </button> */}
                <StyledButton 
                alt={this.state.show}
                onClick={this.toggle}>toggle
                </StyledButton>
                {persons}
            </div>
            // </StyleRoot>
        )
    }
}

//if we use radium we must define that like below
// export default Radium(Listperson);
export default Listperson;