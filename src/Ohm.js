import React, { Component } from 'react';
import './App.css';
import Parameter from './Parameter';
import TextField from './TextField';
import Result from './Result';

class Ohm extends Component {
    constructor(props) {

        super(props);
        this.getUnity = this.getUnity.bind(this);
        this.reset = this.reset.bind(this);
        this.valOne = this.valOne.bind(this);
        this.valTwo = this.valTwo.bind(this);
        this.checkOperation = this.checkOperation.bind(this);
        this.state = { unitat: 'Volts', field1: 'Resistence', val1: '0', signe: 'X', field2: 'Intensity', val2: '0', resultat: '0' };

    }
    render() {
        return (
            <div>
                <Parameter unity={this.getUnity} />
                <TextField ref="field1" change={this.valOne} placeholder={this.state.field1} value={this.state.val1} />
                <span className="signe"> {this.state.signe} </span>
                <TextField ref="field2" change={this.valTwo} placeholder={this.state.field2} value={this.state.val2}/>
                <Result result={this.state.resultat} unity={this.state.unitat} />
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
    getUnity(u) {

        this.reset();

        switch (u) {
            case 'V':
                console.log('Bob');
                this.setState({ unitat: 'Volts', field1: 'Resistence', signe: 'X', field2: 'Intensity', val1: 0, val2: 0, resultat: 0 });
                break;
            case 'I':
                this.setState({ unitat: 'Amperes', field1: 'Voltage', signe: '/', field2: 'Resistence', val1: 0, val2: 0, resultat: 0 });
                break;
            case 'R':
                this.setState({ unitat: 'Ohms', field1: 'Voltage', signe: '/', field2: 'Intensity', val1: 0, val2: 0, resultat: 0 });
                break;
            default:
                this.setState({ unitat: 'Volts', field1: 'Resistence', signe: 'X', field2: 'Intensity', val1: 0, val2: 0, resultat: 0 });
                break;
        }

    }

    valOne(e) {

        this.setState({ val1: e }, this.checkOperation);

    }

    valTwo(e) {

        this.setState({ val2: e }, this.checkOperation);


    }

    checkOperation() {

        let v1 = parseInt(this.state.val1, 10);
        let v2 = parseInt(this.state.val2, 10);
        let r;
        let signe = this.state.signe;

        if (signe === '/') {
            r = v1 / v2;
        } else if (signe === 'X') {
            r = v1 * v2;
        }

        if (isNaN(r)) {
            r = 0;
        }

        this.setState({ resultat: r });

    }

    reset() {

       this.refs.field1.setState({text:''});
       this.refs.field2.setState({text:''});
       this.setState({ unitat: 'V', field1: 'Resistència', signe: 'X', field2: 'Intensitat', val1: 0, val2: 0, resultat: 0 });

    }
}

export default Ohm;
