# Assignment5_Docker_RestfulApi

For this assignement 2 apps are created using nodejs. Solution contain 2 folders apiapp and customers_cliapp
 1. Api app is created using nodejs. CustomerOrders.json file is used as the database for customer orders.
 2. Client App is created using reactjs
 
 Both the apps are dockerized. Screencast shows api app running on port 8081 and the client app running on 8082.  
 
 ## Api app   
Api app is created based on nodejs and expressjs. It has four endpoints.
 
 http://localhost:8081/customers ==> Get all customers  
 http://localhost:8081/customers/{customerid} ==> Get  customer based on the customer id  
 http://localhost:8081/customers/{customerid}/orders ==> Get all orders for the customer id
 http://localhost:8081/customers/{customerid}/orders/{orderid} ==> Get order details of the specific customer/{order id}
 
 ## Client App   
 Client App is created using reactjs. The app has 2 sections. 
 Main section shows all customers which is loaded on component load by calling end point  http://localhost:8081/customers. Each customer has show orders button. Onclick event    calls http://localhost:8081/customers/{customerid}/orders  which shows orders of the current customer. 
 
 Right section of the app has a search component which uses the api end point  http://localhost:8081/customers/{customerid} and  http://localhost:8081/customers/{customerid}/orders/{orderid} s to search for a customer/order details. Customer ID and Order ID values are fetched from the text boxed. 
 
 ## Running the apps

- Clone this repository 
- From your command line, change your current directory to the directory containing apiapp 
- in the command line run:
  - docker build  -t customers_orders_api .  
  - docker run -p 8081:8081 customers_orders_api
  - This should create the docker image and run the container for apiapp on port 8081

- Change the directory to customers_cliapp and in the command line run:
  - docker build  -t customers_cliapp . 
  - docker run -it -p 8082:8082 customers_cliapp 
  - This should create the docker image and run the container for client app  on port 8082
  


