import React, { Component } from 'react';
import gh from './gh32.png';
import './GitHub.css';

export default class GitHub extends Component {

    render() {
        let url = 'https://github.com/vicesalles/';
        return (
            <div>
                <a href={url + this.props.prj} target="_blank">Check it at <img alt="Vice Sallés GitHub" src={gh}/></a>
            </div>);
    }
}