import React, { Component } from 'react';

export default class TableDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
            cardID: "",
            cardName: "",
            cardLevel: "",
            cardAttribute: "",
            cardType: "",
            cardIndex: 0
        }

        // this.handleChange = (valueName) => (event) => this.setState({ [valueName]: event.target.value });

        // this.handleDelete = (idToDelete) => event => {
        //     var index = this.props.cardList.indexOf(card.cardID);
        //     this.props.cardList.splice(index, 1);
        // }

        this.handleChange = (valueName) => (event) => this.setState({ [valueName]: event.target.value });


        this.handleDelete = (idToDelete) => () => {
            this.props.onDelete(idToDelete);
        }

        this.toggleEdit = (index, event) => {
            //this.props.onEdit();  //This is the issue with replacing right now. onEdit() call
            this.setState({
                isEditable: !this.state.isEditable,
                cardIndex: index
            })
        }

        this.getIndex = (index) => {
            this.setState({
                cardIndex: index
            })
        }

        this.handleEdit = () => {

            this.props.onEdit(this.state.cardIndex, this.state);
            this.setState({
                cardID: "",
                cardName: "",
                cardLevel: "",
                cardAttribute: "",
                cardType: ""
            });

        }

    }
    // deleteID = 0;

    render() {

        if (!this.state.isEditable) {
            return (
                <div>
                    <table id="tableDisplay">
                        <thead>
                            <td>Delete</td>
                            <td>ID</td>
                            <td>Card Name</td>
                            <td>Level/Rank</td>
                            <td>Attribute</td>
                            <td>Type</td>
                        </thead>
                        {this.props.cardList.map((card, index) => {
                            return (
                                <tr key={index}>
                                    <td> <button onClick={this.handleDelete(index)}>Delete</button> </td>
                                    <td>{card.cardID}</td>
                                    <td>{card.cardName}</td>
                                    <td>{card.cardLevel}</td>
                                    <td>{card.cardAttribute}</td>
                                    <td>{card.cardType}</td>
                                    <td><button onClick={this.toggleEdit.bind(this, index)}>Edit</button></td>
                                </tr>
                            )
                        })
                        }
                    </table>
                </div>

            )
        } else {
            return (
                <div>
                    <tr>
                        <td><input type="text" id="cardNameEdit" placeholder="Card Name" value={this.state.cardName} onChange={this.handleChange("cardName")} /></td>
                        <td><input type="text" id="cardLevelEdit" placeholder="Card Level" value={this.state.cardLevel} onChange={this.handleChange("cardLevel")} /></td>
                        <td><input type="text" id="cardAttributeEdit" placeholder="Card Attribute" value={this.state.cardAttribute} onChange={this.handleChange("cardAttribute")} /></td>
                        <td><input type="text" id="cardTypeEdit" placeholder="Card Type" value={this.state.cardType} onChange={this.handleChange("cardType")} /></td>
                        <td> <button onClick={this.handleEdit}>Save</button>  </td>
                        <td> <button onClick={this.toggleEdit}>Back</button>  </td>
                    </tr>
                </div>
            )
        }
    }
}