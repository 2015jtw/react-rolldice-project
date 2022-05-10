import React, { Component } from 'react';
import './Dice.css'


class Dice extends Component {
    render() {
        let dieFace = `Die fa-solid fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : ''}`;
        return (

            <i className={dieFace} />

        )
    }
}


export default Dice;