import React, { Component } from 'react';
import './App.css';

class Parameter extends Component {
   constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    
  }  
  render() {
    return (
      <select onChange={this.handleChange}>
        <option value="V" defaultValue>Voltage</option>
        <option value="I">Intensity</option>
        <option value="R">Resistence</option> 
      </select>
    );
  }
  handleChange(e) {
    let r = e.target.value;
    this.props.unity(r);    
  }
}

export default Parameter;
