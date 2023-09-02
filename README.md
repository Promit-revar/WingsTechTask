# WingsTechTask
RestApi for ecommerce software (1.0.0)

## Requirements
- Node js
- PostgresSQL

**Tech-stack used:**
- Node.js
- Sequelize
- PostgresSql
- Express.js
  
## Getting Started
- Clone the repo using the following command
  
```
git clone https://github.com/Promit-revar/WingsTechTask.git

```

- Navigate to the newly created folder `WingsTechTask` using following command in your comman prompt.
  
```
cd WingsTechTask

```

- install all Dependencies
  
```
npm install

```

- Change the database credentials in `config.json` with your own
- Run following command to migrate tables
```
npm run migrate:up

```

- Then seed up the data by
```
npm run seed:up

```

- Finally run following command to start the server
```
npm start

```

- Make sure to create .env file and put variables like `PORT=Port on which server should run` and `JWT_SECRET=user Jwt secret` inside the .env file.
- Also postman collection is attached for you reference [view](https://github.com/Promit-revar/WingsTechTask/blob/main/Wings-Nodejs_task.postman_collection.json)
### Author
- [Promit Revar](https://promit-revar.github.io/Portfolio/)

### License
- [MIT](https://opensource.org/licenses/MIT)
