import React, { Component } from 'react';
import './App.css';


class TextField extends Component {
    constructor(props) {
        super(props);
        this.getText = this.getText.bind(this);
        this.state = { text: '' };
    }
    render() {
        return (<input type="text" value={this.state.text} onChange={this.getText} name={this.props.name} placeholder={this.props.placeholder} />);
    }
    getText(e) {
        let r = e.target.value;
        this.props.change(r);
        this.setState({ text: r });
        return r;
    }

}

export default TextField;