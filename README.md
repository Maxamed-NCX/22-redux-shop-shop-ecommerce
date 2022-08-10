# redux-shop-shop-BC22-

# 🛍️-Shop-Shop-Redux

  ![GitHub](https://img.shields.io/github/license/kpehl/shop-shop-redux?style=plastic)
  
  ![Most recent commit](https://img.shields.io/github/last-commit/kpehl/shop-shop-redux)
  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kpehl/shop-shop-redux)

# Table of Contents 
* [Summary](#description)
* [Tools Used](#tools)
* [Installation](#installation)
* [Heroku](#heroku)
* [Snapshot](#snapshot)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Description
This project refactors a fictional e-commerce application to use Redux for global state control, paired with a React front end, Node.js and Express.js for the back-end server, and MongoDB for the database. Stripe is used for payments.  

### User Story

```text
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

### Acceptance Criteria

```text
GIVEN an e-commerce platform that uses Redux to manage global state
WHEN I review the app’s store
THEN I find that the app uses a Redux store instead of the Context API
WHEN I review the way the React front end accesses the store
THEN I find that the app uses a Redux provider
WHEN I review the way the app determines changes to its global state
THEN I find that the app passes reducers to a Redux store instead of using the Context API
WHEN I review the way the app extracts state data from the store
THEN I find that the app uses Redux instead of the Context API
WHEN I review the way the app dispatches actions
THEN I find that the app uses Redux instead of the Context API
```

## Installation
If you would like to modify the code, clone the project onto your computer, and run `npm install` in the root directory, in the client directory, and in the server directory.

From the root directory, type `npm start` to start the Express and GraphQL/Apollo servers. The homepage of the application will open in your default browser.

## Heroku
- [Heroku Deployment]()

You can then see order history and test the shopping function. When you check out, you will be directed to a test mode Stripe storefront.

For testing purposes, `4242 4242 4242 4242` can be used as the credit card number with any future date for the expiration date and any three digits for the CVC.

## Screenshot
![screenshot](shop-shop-screenshot.png)
