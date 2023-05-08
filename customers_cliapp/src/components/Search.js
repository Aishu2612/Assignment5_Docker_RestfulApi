import React, { Component, useState, useEffect } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            custid: 0,
            orderid: 0,
            message: 'Please enter valid customer id and order id to filter results',
            order: {},
            customer: {},
            iserror:false


        }
    }

    getCustomerOrders() {
        console.log(this.state);
        let custid = this.state.custid;
        let orderid = this.state.orderid;
        let ordurl = "";
        let custurl = "";

        if (custid > 0 && orderid > 0) {
            ordurl = `http://localhost:8081/customers/${custid}/orders/${orderid}`;
            console.log(ordurl);

            fetch(ordurl).then(res => res.json())
                .then(data => {
                    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
                    this.setState({ order: data });
                    console.log(this.state);
                }).catch(err => {
                    console.log('errorrrrrrrrrrrrrrrr');
                    this.setState({
                        order: {},
                        customer: {},
                        iserror:true
                    });

                });

            custurl = `http://localhost:8081/customers/${custid}`;
            console.log(custurl);
            fetch(custurl).then(res => res.json())
                .then(data => {
                    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
                    this.setState({ customer: data });
                    console.log(this.state);
                }).catch(err=>{
                    this.setState({
                        order: {},
                        customer: {},
                        iserror:true
                    });

                });


        }
        else if (custid > 0) {
            custurl = `http://localhost:8081/customers/${custid}`;
            console.log(custurl);
            fetch(custurl).then(res => res.json())
                .then(data => {
                    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
                    this.setState({ customer: data });
                    console.log(this.state);
                }).catch(err=>{
                    this.setState({
                        order: {},
                        customer: {},
                        iserror:true
                    });

                });

        } else {
            console.log('************* Error ************');

        }



    }
    render() {
        return (
            <div className='search'>
                <div className='searchformfield'><label for="Customer ID">Customer ID</label></div>
                <div className='cst_formfield '><input className='searchCustomer' type='text'
                    onChange={
                        (e) => {
                            this.setState({ custid: e.target.value }); console.log(this.state);
                        }
                    } ></input>
                </div>

                <div className='searchformfield'><label for="Order ID">Order ID</label></div>
                <div className='ord_formfield '><input className='searchOrder' type='text' onChange={
                    (e) => {
                        this.setState({ orderid: e.target.value }); console.log(this.state);
                    }
                } ></input>
                </div>

                <div><button className='searchbtn' onClick={() => {
                    this.getCustomerOrders();
                }}>Search</button></div>
                <div ><i>{this.state.message}</i></div>
                
                <Customer cust={this.state.customer} />
                <Order order={this.state.order} />
            </div>


        )
    }
}

function Customer(props) {
    let cust = props.cust;
    let custdiv = Object.keys(cust).length !== 0 ?

        <div key={cust.ID} className='customer' >
            <div>Customer Id : {cust.ID}</div>
            <div>Customer Name : {cust.Name}</div>
            <div>Address: {cust.Address}</div>
        </div >
        : null;
    return (<div>{custdiv}</div>)
}

function Order(props) {
    let order = props.order;
    let orderdiv = Object.keys(order).length !== 0 ?
        <div key={order.OrderId} className='customer'>
            <div>Order Id : {order.OrderId}</div>
            <div>Item ID: {order.ItemID}</div>
            <div>Item Value : ${order.ItemValue}</div>
            <div>Quantity: {order.Quanity}</div>
            <div>Total: ${order.Total}</div>
            <div>Order Date: {order.OrderDate}</div>
        </div> : null;

    return (<div>{orderdiv}</div>)
}