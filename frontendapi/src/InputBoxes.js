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
                <form id = "dataBoxes" onSubmit={this.handleSubmit} >
                    <input type="text" id="cardName" value ={this.state.cardName} placeholder="Card Name i.e Dank Magician" onChange={this.handleChange("cardName")}/>
                    {/* <input type="text" id="cardLevel" value ={this.state.cardLevel} placeholder="Card Level i.e 7" onChange={this.handleChange("cardLevel")}/> */}
                    <select name="cardLevel" value ={this.state.cardLevel} onClick={this.handleChange("cardLevel")} >
                        <option value="" disabled selected >Card Level/Rank</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select> 
                    {/* <input type="text" id="cardAttribute" value ={this.state.cardAttribute} placeholder="Card Attribute i.e Dark" onChange={this.handleChange("cardAttribute")}/> */}
                    <select name="cardAttribute" value ={this.state.cardAttribute} onChange={this.handleChange("cardAttribute")} >
                        <option value="" disabled selected >Card Attribute</option>
                        <option value="Dark">Dark</option>
                        <option value="Divine">Divine</option>
                        <option value="Earth">Earth</option>
                        <option value="Fire">Fire</option>
                        <option value="Light">Light</option>
                        <option value="Water">Water</option>
                        <option value="Wind">Wind</option>
                    </select> 
                    {/* <input type="text" id="cardType" value ={this.state.cardType} placeholder="Card Type i.e Magician" onChange={this.handleChange("cardType")}/> */}
                    <select name="cardType" value ={this.state.cardType} onChange={this.handleChange("cardType")}>
                        <option value="" disabled selected>Card Type</option>
                        <option value="Aqua">Aqua</option>
                        <option value="Beast">Beast</option>
                        <option value="Beast-Warrior">Beast Warrior</option>
                        <option value="Creator-God">Creator-God</option>
                        <option value="Cyberse">Cyberse</option>
                        <option value="Dinosaur">Dinosaur</option>
                        <option value="Divine-Beast">Divine-Beast</option>
                        <option value="Dragon">Dragon</option>
                        <option value="Fairy">Fairy</option>
                        <option value="Fiend">Fiend</option>
                        <option value="Fish">Fish</option>
                        <option value="Insect">Insect</option>
                        <option value="Machine">Machine</option>
                        <option value="Plant">Plant</option>
                        <option value="Psychic">Psychic</option>
                        <option value="Pyro">Pyro</option>
                        <option value="Reptile">Reptile</option>
                        <option value="Rock">Rock</option>
                        <option value="Sea Serpent">Sea Serpent</option>
                        <option value="Spellcaster">Spellcaster</option>
                        <option value="Thunder">Thunder</option>
                        <option value="Warrior">Warrior</option>
                        <option value="Winged Beast">Winged Beast</option>
                        <option value="Wyrm">Wyrm</option>
                        <option value="Zombie">Zombie</option>
                    </select> 
                    
                    <button id = "submitButton" onClick = {this.handleSubmit}>Add</button>
                </form>
            </div>
        )
    }
}

