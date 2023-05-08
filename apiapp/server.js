var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
var fs = require("fs");


app.get('/customers', function (req, res) {
   fs.readFile(__dirname + "/" + "CustomersOrders.json", 'utf8', function (err, data) {
      console.log(data);
      res.end(data);
   });
});


app.get('/customers/:id', function (req, res) {
   
   fs.readFile(__dirname + "/" + "CustomersOrders.json", 'utf8', function (err, data) {
      var customersJson = JSON.parse(data);
      var customers = customersJson.filter(cust => {
         console.log(cust)
         return cust.ID == req.params.id
      });
      customer = customers.length > 0 ? JSON.stringify(customers[0]) : `Customer not found for Customer ID: ${req.params.id}`
      console.log(customer);
      res.end(customer);
   });
});

app.get('/customers/:id/orders', function (req, res) {
   
   fs.readFile(__dirname + "/" + "CustomersOrders.json", 'utf8', function (err, data) {
      var customersJson = JSON.parse(data);
      var customers = customersJson.filter(cust => {
         return cust.ID == req.params.id
      });
      orders = customers.length > 0 ? JSON.stringify(customers[0].Orders) : `Orders not found for Customer ID: ${req.params.id}`
      console.log(orders);
      res.end(orders);
   });
});

app.get('/customers/:id/orders/:orderid', function (req, res) {
   
   fs.readFile(__dirname + "/" + "CustomersOrders.json", 'utf8', function (err, data) {
      var customersJson = JSON.parse(data);
      var customers = customersJson.filter(cust => {
         return cust.ID == req.params.id
      });
      orders = customers.length > 0 ? customers[0].Orders : [];
      var ordersFilter = orders.filter(ord => {
         return ord.OrderId == req.params.orderid
      });

      order = ordersFilter.length > 0 ? JSON.stringify(ordersFilter[0]) : `Order with Order Id ${ req.params.orderid} not found for Customer ID: ${req.params.id}`
      console.log(order);
      res.end(order);
   });
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})