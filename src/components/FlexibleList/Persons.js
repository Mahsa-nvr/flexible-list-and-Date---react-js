import React from 'react';
// import './Person.css';
import Radium from 'radium';
import styled from 'styled-components';

class Person extends React.Component {

    render() {

        const StyledDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow:0 2px 3px #ccc;
        padding: 16px;
        text-align: center;

        @media (min-width: 500px) {
            width: 450px;
        }
        `

        const style = {
            '@media (min-width: 500px)' : {
                width: '450px'
            }
        }
        return (
            // <div className="Person" style={style}>
          
          <StyledDiv>
            <div onClick={this.props.click}> im {this.props.name} and im {this.props.age} yeares old</div>
             <p>{this.props.children}</p> 
             <input type="text" onChange={this.props.changed} value={this.props.name}/>
           </StyledDiv>
           
            // </div>
        )
    }
}

export default Radium(Person);