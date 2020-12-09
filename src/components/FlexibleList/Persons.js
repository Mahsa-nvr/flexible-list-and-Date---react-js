import React from 'react';
import './Person.css';

class Person extends React.Component {
    render() {
        return (
            <div className="Person">
            <div onClick={this.props.click}> im {this.props.name} and im {this.props.age} yeares old</div>
             <p>{this.props.children}</p> 
             <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}

export default Person;