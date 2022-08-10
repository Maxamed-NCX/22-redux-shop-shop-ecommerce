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
<img width="400" alt=" 1st Image" src="shop-shop-screenshot.png">


# License
![license badge](https://img.shields.io/badge/license-MIT-brightgreen)

# Contributing
Contributors: UofM BC & MCX

# Tests
The project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3002 to view it in the browser.
npm start on local machince

The page will reload if you make edits.
You will also see any errors in the console.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.


## Tools 
- [IndexDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Heroku](https://www.heroku.com)
- [NPM Bcrypt Package](https://www.npmjs.com/package/bcrypt)
- [NPM Express.js Package](https://www.npmjs.com/package/express)
- [NPM JSONWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [NPM Mongoose Package](https://www.npmjs.com/package/mongoose)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Node.js](https://nodejs.org/en/)
- [NPM nodemon Package](https://www.npmjs.com/package/nodemon)
- [NPM JWT-Decode Package](https://www.npmjs.com/package/jwt-decode)

  
# Questions?
## Please contact me:
  * [My GitHub Profile](https://github.com/Mcnoor/)
  * [My Github Project Repository](https://github.com/Mcnoor/redux-shop-shop-BC22-)
  * Email us at: [maxanoor](mailto:maxanoor@gmail.com.com) with questions or make an issue about this project.

