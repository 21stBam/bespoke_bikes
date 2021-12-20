# bespoke_bikes

## How to run
The project is written in Node.js version v14 on the backend. 
1. cd into server folder

3. ```shell npm install```

To instal all dependencies.

3. ```shell npm run seed```

to build the databased and seed the sample data into the database.

4. ```shell npm start```

This will start the backend
  
I had issues connecting the backend to the Client and was unable to finish the client side in the allotted time, but API layer is largely functional.
End points are:
  localhost:30001/customers
    GET
  localhost:30001/salespersons
    GET
  localhost:30001/salespersons/:id
    GET / PUT
  localhost:30001/sales
    GET / POST
  localhost:30001/products
    GET
  localhost:30001/products
    PUT
