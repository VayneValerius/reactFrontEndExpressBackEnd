import React, { Component } from 'react';

export default class TableDisplay extends Component {  
    constructor(props) {
        super(props);


        this.handleChange = (valueName) => (event) => this.setState({ [valueName]: event.target.value });

        this.handleDelete = () => {
            var index = 1;
            this.state.cardList.splice(index, 1);
        }

    }
    deleteID = 0;

    render() {
        return (
            <div>
                <table id = "tableDisplay">
                    <thead>
                        <td>Delete</td>
                        <td>ID</td>
                        <td>Card Name</td>
                        <td>Level/Rank</td>
                        <td>Attribute</td>
                        <td>Type</td>
                    </thead>
                    {this.props.cardList.map((card, index) => {
                        return(
                            <tr>
                                <td> <button onClick = {this.handleDelete} data-id = "${cardID}">Delete</button> </td>
                                <td>{card.cardID}</td>
                                <td>{card.cardName}</td>
                                <td>{card.cardLevel}</td>
                                <td>{card.cardAttribute}</td>
                                <td>{card.cardType}</td>
                            </tr>
                        )
                    }) 
                }
                </table>
            </div>
        )
    }
}