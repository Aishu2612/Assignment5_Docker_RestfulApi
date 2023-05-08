import React, { Component, useState, useEffect } from 'react'

export default class Orders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: [],
            showORders: false
        }
    }

    componentDidMount() {
        let url = `http://localhost:8081/customers/${this.props.customerid}/orders`;
        fetch(url).then(res => res.json())
            .then(data => {
                this.setState({ orders: data });
               // console.log(data);
            })
    }
    render() {
      //  console.log(this.state.orders);                 
        let orders = this.state.orders.map(order => {
            return (
                <div key={order.OrderId} className='order'>                    
                    <div>Order Id : {order.OrderId}</div>
                    <div>Item ID: {order.ItemID}</div>
                    <div>Item Value : ${order.ItemValue}</div>
                    <div>Quantity: {order.Quanity}</div>
                    <div>Total: ${order.Total}</div>
                    <div>Order Date: {order.OrderDate}</div>                    
                </div>
            )
        })
        return (
            <div className='orders'>{orders}</div>
        )
    }
}
