import React from 'react';
import momentJalaali from 'moment-jalaali';
import  DatePicker from 'react-datepicker2';
import moment from 'moment-jalaali'

export default class Datee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: momentJalaali('1396/7/6', 'jYYYY/jM/jD')
        };
      }

  
  render() {
    return (
    <div ><DatePicker
    style={{marginRight: "20px"}}
      isGregorian={false}
      value={this.state.value}
      onChange={value => this.setState({ value })}
    />
    </div>)
  }
}