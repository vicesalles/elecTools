import React, { Component } from 'react';
import './App.css';

export default class Result extends Component{
    render(){
        return (<h2 id="result">{this.props.result} <span>{this.props.unity}</span></h2>);
    }
}