# Assignment5_Docker_RestfulApi

For this assignement 2 apps are created using nodejs. Solution contain 2 folders apiapp and customers_cliapp
 1. Api app is created using nodejs. CustomerOrders.json file is used as the database for customer orders.
 2. Client App is created using reactjs
 
 Both the apps are dockerized. Screencast shows api app running on port 8081 and the client app running on 8082.
 
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
  

Api app has four routes   
 
 http://localhost:8081/customers ==> Get all customers  
 http://localhost:8081/customers/{customerid} ==> Get  customer based on the customer id  
 http://localhost:8081/customers/{customerid}/orders ==> Get all orders for the customer id
 http://localhost:8081/customers/{customerid}/orders/{orderid} ==> Get order details of the specific customer/{order id}
 
 Client App   
 Client App is created using reactjs. The app has 2 sections. Main section shows all customers which is loaded on component load. Each customer has a show orders 
 Right section of the app as a search component which uses the api's to search for a customer/order based on the parameters . Customer/Order data is retreived dynamically from the api app and  the 4 routes in the api app. 
