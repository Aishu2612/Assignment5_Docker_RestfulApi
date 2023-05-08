docker run -it -p 8082:8082 customers_cliapp

docker build  -t customers_orders_api .


docker run -p 8081:8081 customers_orders_api

docker build  -t customers_orders_api .