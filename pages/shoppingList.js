import React, { Component } from 'react';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            buyItems: ["milk", "cheese", "bread"],
            message: ""
         };
    }

    addItem(e) {
        e.preventDefault();
        const {buyItems} = this.state;
        const newItem = this.newItem.value;

        const isOnTheList = buyItems.includes(newItem);

        if(isOnTheList) {
            this.setState({
                message: "This item is already on the list"
            })

        } else {
            newItem !== "" && this.setState ({                  //prevent empty submission
                buyItems: [...this.state.buyItems, newItem],
                message: ""
            })
        }

        this.addForm.reset();
    }

    removeItem(item) {

        const newBuyItems = this.state.buyItems.filter(buyItem => {
            return buyItem !== item;
        })

        this.setState({
            buyItems: [...newBuyItems]
        })

        if(newBuyItems.length === 0) {
            this.setState({
                message: "No items on your list"
            })
        }
    }

    clearAll() {
        this.setState({
            buyItems: [],
            message: "No items on your list"
        })
    }

    render() {
        const {buyItems, message} = this.state;
        return (
            <div>
                <header>
                    <h1>Shopping List</h1>
                    <form ref={(input) => {this.addForm = input}} className="form-inline" onSubmit={(e)=> {this.addItem(e)}}>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="newItemInput">Add new item</label>
                            <input ref={(input) => {this.newItem = input}} type="text" placeholder="to buy" className="form-control" id="newItemInput"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </header>
                <div className="content">
                    {
                        (message !== "" || buyItems.length === 0) && <p className="message text-danger">{message}</p>
                    }

                    {
                        buyItems.length > 0 &&
                        <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {buyItems.map((item, i) => {
                        return (
                            <tr key={item+i}>
                                <th scope="row">*</th>
                                <td>{item}</td>
                                <td className="text-right">
                                    <button onClick={(e) => this.removeItem(item)} type="button" className="btn btn-default btn-sm">
                                        Remove
                                    </button>
                                </td>
                            </tr> 
                            )
                        })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2">&nbsp;</td>
                                <td className="text-right">
                                    <button onClick={(e) => this.clearAll()} className="btn btn-default btn-sm">Clear all</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    }
                </div>
            </div>
        );
    }
}

export default ShoppingList;