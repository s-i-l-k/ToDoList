import React, { Component } from 'react';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            buyItems: ["milk", "cheese", "bread"]
         };
    }
    render() {
        const {buyItems} = this.state;
        return (
            <div>
                <h1>Shopping List</h1>
                {buyItems.map((item, i) => {
                    return (
                        <button className="btn-danger" key={item+i}>{item}</button>    
                    )
                })}
            </div>
        );
    }
}

export default ShoppingList;