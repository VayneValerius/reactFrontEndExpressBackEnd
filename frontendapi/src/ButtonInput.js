import React, { Component } from 'react';
import InputBoxes from './InputBoxes';

export default class ButtonInput extends Component {
    render() {
        return (
            <div id = "submitButton">
                <button id = "submitButton" onClick = {this.props.handleSubmit}>SUBMIT</button>
            </div>
        )
    }
}