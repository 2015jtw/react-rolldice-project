import React, { Component } from 'react';

import Dice from './Dice';

import './RollDie.css'


class RollDie extends Component {
    static defaultProps = {
        values: ['one', 'two', 'three', 'four', 'five', 'six']
    }


    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',
            die2: 'one',
            isRolling: false
        }
        this.roll = this.roll.bind(this)
    }

    roll() {
        // pick 2 new rolls
        const newDie1 = this.props.values[
            Math.floor(Math.random() * this.props.values.length)]

        const newDie2 = this.props.values[
            Math.floor(Math.random() * this.props.values.length)]

        // set state with new rolls
        this.setState({
            die1: newDie1,
            die2: newDie2,
            isRolling: true
        })

        // wait 1 sec, then set isRolling to false again
        setTimeout(() => {
            this.setState({ isRolling: false })
        }, 1000)
    }


    render() {
        return (
            <div className='RollDie'>
                <div className='Die'>
                    <Dice
                        face={this.state.die1}
                        rolling={this.state.isRolling}
                    />

                    <Dice
                        face={this.state.die2}
                        rolling={this.state.isRolling}
                    />
                </div>

                <button disabled={this.state.isRolling} onClick={this.roll}>{this.state.isRolling ? 'Rolling...' : 'Roll Dice'}</button>

            </div>
        )
    }
}

export default RollDie;