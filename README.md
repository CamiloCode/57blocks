# Basic commands for running the project

npm version used 10.2.4

### for GUI and headless mode , the first step is to install dependencies

> npm install

### Steps for running tests in GUI mode 

> npx cypress open

then select the browser and the spec(test) its desired to run

### Steps for running tests in headless mode 

> npx cypress run

or

> npm run test

right now there are two tests skipped related to login successfully, remove from it.skip the ".skip" part if its desired to run it and populate the following variables:

#### type username for user without Two Factor Authentication
const validUsername = '';  
#### type password for user without Two Factor Authentication
const validPassword = '';
#### type username for user with Two Factor Authentication
const validUsernameTwoFactor = '';
#### type password for user with Two Factor Authentication
const validPasswordTwoFactor = '';

