# Bank Account Management API

This project contains code for a basic bank account management RESTful API. The API has endpoints that support the following actions:

- Creating a bank account
- Getting a bank account using an account number
- Getting a list of all bank account

## Project Setup

The project was built using NodeJs, NestJs (with ExpressJs under the hood), and Yarn as the package manager (alternatively, npm can be used).

To setup the project first install NodeJs locally. To install NodeJs, you can download it from the [NodeJs website](https://nodejs.org/en/download/).

Next, install yarn by running the command below in your terminal

```
npm install --global yarn
```

As a next step, install the NestJs CLI by running the following terminal command

```
npm i -g @nestjs/cli
```

After the installations, clone the repository from GitHub into a computer folder of your choice. When cloning is complete, navigate to the project directory in your terminal and install project packages by running

```
yarn install
```

After the packages have been installed start the application using the following terminal command

```
yarn start
```

## Documentation

You can use this link to access the postman collection documentation for this application: https://documenter.getpostman.com/view/10840074/2s9Y5crzTz

## Deployement

You can access the deployed application using the deployed link: https://bank-api-8lx6.onrender.com/

## Testing

The Jest package was used to implement unit tests for the application. To run tests execute

```
yarn test
```

in project directory in your terminal
