import React, { Component } from 'react';
import Joey from './images/creepyChin.jpg';
import './App.css';
import InputBoxes from './InputBoxes';

import TableDisplay from "./TableDisplay";
import { getCards, deleteCard, createCard } from "./api/cardapi.js"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardList: [
        {
          cardID: 1,
          cardName: "Dank Magician",
          cardLevel: 7,
          cardAttribute: "Dark",
          cardType: "Spellcaster"
        },

        {
          cardID: 2,
          cardName: "Dank Magician Grill",
          cardLevel: 6,
          cardAttribute: "Dark",
          cardType: "Spellcaster"
        },

        {
          cardID: 3,
          cardName: "Dank Rebellion",
          cardLevel: 4,
          cardAttribute: "Dark",
          cardType: "Dragon"
        }
      ]
    }
    //This accepts the data from the forms input (In this case a text box)
    //It then creates an object with that data and an id and puts it into the components state array
    //This is handed down as a prop to the form child component.
    this.handleSubmitInParent = (dataFromForm) => {
      let cardList = this.state.cardList;
      cardList.push({
        cardID: cardList.length + 1,
        cardName: dataFromForm.cardName,
        cardLevel: dataFromForm.cardLevel,
        cardAttribute: dataFromForm.cardAttribute,
        cardType: dataFromForm.cardType
      });
      this.setState({ cardList });
    }

    this.handleDeleteInParent = (cardIdToDelete) => {
      const cardList = [...this.state.cardList];
      cardList.splice(cardIdToDelete, 1);
      this.setState({ cardList });
    }

    this.handleEditInParent = (cardIndex, newCard) => {
      const cardList = [...this.state.cardList];
      cardList[cardIndex].cardAttribute = newCard.cardAttribute
      cardList[cardIndex].cardName = newCard.cardName
      cardList[cardIndex].cardLevel = newCard.cardLevel
      cardList[cardIndex].cardType = newCard.cardType
      this.setState({ cardList })
      console.log(this.state);
    }

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Joey} className="App-logo" alt="logo" />
          <h1 className="App-title">Card Catcher</h1>
        </header>
        <p className="App-intro">
          A Childrens Card Game Helper
        </p>
        <div id="componentBody">
          <InputBoxes cardList={this.state.cardList} onSubmit={this.handleSubmitInParent} />
          <TableDisplay cardList={this.state.cardList} onDelete={this.handleDeleteInParent} onEdit={this.handleEditInParent} />
        </div>
      </div>
    );
  }
}

export default App;
