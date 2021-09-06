# rented_house_visit_mgmt
Manage house rentals on behalf of owners

### What is this repository for? ###

* Manage house rentals on behalf of owners

### How do I get set up? ###

Prerequisite - node.js and npm must be installed on the system

* Setup for Development

1. Clone the repository / have the code in your machine
2. Go to root of the project in your application
3. Run `npm i` to install all dependencies
4. Create a new database locally with name rent_mgmt. Run sql scripts attached in db/db_patch folder.
5. Create a .env folder at the root of the project and add following details
```
DB_PORT = 5432
DB_NAME = rent_mgmt
DB_USER = postgres
DB_DIALECT = postgres
DB_HOST = localhost
DB_PASSWORD = password
```
6. Run `npm run dev` to start the server at port 5050 / some other port specified in environment file
7. Hit the api's using the Postman Collection Attached in the folder Postman Collection

* Testing -
Skip 1-3 steps if already done from Development steps above

1. Clone the repository / have the code in your machine
2. Go to root of the project in your application
3. Run `npm i` to install all dependencies
4. Run `npm test` to run unit tests. The report is seen in the console.
5. Open the html file generated in test/mochareport/mocha_report.html in the broswer to view the test cases report.

### What is done and what is pending? ###

* Done

1. Developed REST APIs for listing houses, showing available time slots, book a visit
2. Postman collection is updated

* Not Done

1. Swagger for the apis is not done
2. Unit Testing for some of the apis is pending to be completed