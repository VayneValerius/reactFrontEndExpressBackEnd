import React, { Component } from 'react';

export default class InputBoxes extends Component {
    constructor(props) {
        super(props);

        this.handleChange = (valueName) => (event) => this.setState({ [valueName]: event.target.value });

        this.handleSubmit = (e) => {
            e.preventDefault();
            this.props.onSubmit(this.state);
            this.setState({
              cardID : "",  
              cardName: "",
              cardLevel: "",
              cardAttribute: "",
              cardType: ""
            });
          }
          //Initialize state
          this.state = {
            cardID : "",  
            cardName: "",
            cardLevel: "",
            cardAttribute: "",
            cardType: ""
          };
    }
    
    render() {
        return (
            <div id = "inputBoxes">
                <form id = "dataBoxes" onSubmit={this.handleSubmit}>
                    <input type="text" id="cardName" value ={this.state.cardName} placeholder="Card Name i.e Dank Magician" onChange={this.handleChange("cardName")}/>
                    <input type="text" id="cardLevel" value ={this.state.cardLevel} placeholder="Card Level i.e 7" onChange={this.handleChange("cardLevel")}/>
                    <input type="text" id="cardAttribute" value ={this.state.cardAttribute} placeholder="Card Attribute i.e Dark" onChange={this.handleChange("cardAttribute")}/>
                    <input type="text" id="cardType" value ={this.state.cardType} placeholder="Card Type i.e Magician" onChange={this.handleChange("cardType")}/>
                    <button id = "submitButton" onClick = {this.handleSubmit}>SUBMIT</button>
                </form>
            </div>
        )
    }
}

