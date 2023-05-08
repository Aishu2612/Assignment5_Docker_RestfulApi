import React, { Component, useState, useEffect } from 'react';
import Orders from './Orders';



class Customers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customers: [],
      selectedCustID:0,
      isShowLabel:false
    }
  }

  componentDidMount() {
    let url = "http://localhost:8081/customers";
    fetch(url).then(res => res.json())
      .then(data => {
        this.setState({ customers: data });
       // console.log(data);
      })
  }
  render() {
  //  console.log(this.state.customers);
    let customers = this.state.customers.map(cust => {
      let isselectedCust=(this.state.selectedCustID ==cust.ID && this.state.isShowLabel)?false:true;
      return (
        <div key={cust.ID} className='customer'>
          <h2>{cust.Name}</h2>
          <div>Customer Id : {cust.ID}</div>
          <div>Address: {cust.Address}</div>
          <div>
            <div className='showOrders-btn'><a href='#'  
            onClick={() => this.setState({ selectedCustID: cust.ID,isShowLabel:!this.state.isShowLabel })}>{!isselectedCust ?'Hide Orders':'Show Orders'}</a></div>
            <div hidden={isselectedCust}><Orders customerid={cust.ID}/></div>
          </div>
        </div>
      )
    })
    return (
      <div>{customers}</div>
    )
  }
}


/*
function Customers(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => { 
        console.log(data); 
        setData(data);
       });
     
  }, [url]);

  return (
    <div>{console.log(data)}</div>
  );
}
*/

export default Customers