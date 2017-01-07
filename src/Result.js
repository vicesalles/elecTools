import React, { Component } from 'react';
import './App.css';

export default class Result extends Component{
    render(){
        return (<h2> <span id="result">{this.props.result}</span> <span>{this.props.unity}</span></h2>);
    }
}