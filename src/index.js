const { request, response } = require("express");
const express = require("express");
const {v4 : uuidv4} = require('uuid')

const app = express();

app.use(express.json());

const customers = [];

function getBalance(statement) {
  const balance = statement.reduce(
    (acc, operation) =>
      operation.type === "credit"
        ? acc + operation.amount
        : acc - operation.amount,
    0
  );

  return balance;
}

//Middleware
function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers;
  const customer = customers.find((costumer) => costumer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ error: "Customer not found" });
  }

  request.customer = customer;

  return next();
}

//Feature: Create a account
app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );   

  if(customerAlreadyExists) {
    return response.status(400).json({error: "Customer already exists!"});
  }

  customers.push({ 
    id: uuidv4(),
    cpf,
    name,
    statement: [],
  });
  
  return response.status(201).send(); 
});

//app.use(verifyIfExistsAccountCPF);

//Feature: Search a statement
app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  return response.status(200).json(customer.statement);
});

//Feature: Make deposit to account
app.post("/deposit", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  const { description, amount } = request.body;

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit",
  };

  customer.statement.push(statementOperation);

  return response.status(201).send();
});

//Feature: Make withdraw
app.post("/withdraw", verifyIfExistsAccountCPF, (request, response) => {
  const { amount } = request.body;
  const { customer } = request;

  const balance = getBalance(customer.statement);

  if (balance < amount) {
    return response.status(400).json({ error: "Insufficient funds!" });
  }

  const statementOperation = {
    amount,
    created_at: new Date(),
    type: "debit",
  };

  customer.statement.push(statementOperation);
  return response.status(201).send();
});

//Feature: Search statement by date
app.get("/statement/date", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  const { date } = request.query;
  const dateFormat = new Date(date + " 00:00");

  const statement = customer.statement.filter(
    (statement) => statement.created_at.toDateString() === new Date(dateFormat).toDateString()
  );

  return response.status(200).json(statement);
});

//Feature: Update account details
app.put("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { name } = request.body;
  const { customer } = request;

  customer.name = name;

  return response.status(201).send();
});

//Feature: Get account details
app.get("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  return response.status(200).json(customer);
});

//Feature: Get All Accounts
app.get("/account/all", (request, response) => {
  return response.status(200).json(customers);
});

app.delete("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  const indexCustomer = customers.findIndex(
    (customersIndex) => customersIndex.cpf === customer.cpf
  );

  customers.splice(indexCustomer, 1);

  return response.status(200).send();
});

//Feature: Get Balance
app.get("/balance", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  const balance = getBalance(customer.statement);

  return response.status(200).json(balance);
});

app.listen(3333);