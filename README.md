# Tech-Blog

## Description

The Ecommerce Website Backend application manages inventory for an ecommerce company's website. It allows the inventory manager to create/update/remove products, product categories, and product tags to help keep the ecommerce site up to date and easy to use. The manager can also view all products, categories, and tags to review the inventory.

[Link To Repo](https://github.com/asreedy82/ecomm-backend)

## Installation

Application requirements: Insomnia as well as MySQL2, Sequelize, and dotenv packages
To start, first create the schema and database using the SQL scripts in the `schema.sql` file in the `db` folder. Then seed the data by running `npm run seed` in the terminal. Then initiate the app by running `node server.js` in terminal to establish the server connection. Open Insomnia and enter the address for the API route that corresponds to the feature you want to use. For example, to review or change products, use `localhost:3001/api/products/`. For tags, `localhost:3001/api/tags/`. And for categories, `localhost:3001/api/categories/`. GET will return products/tags/categories. POST will create new. PUT will update existing. And DELETE will delete.

  - Link to video demo of app [Screencast Link](https://watch.screencastify.com/v/WrWWcLLZc2debGEevF94)

## Usage

The application is designed to help an ecommerce website manager view and make edits to existing inventory so that online shoppers will have a good user experience.

![Screen shot of GET for all products in Insomnia](assets/images/ecommerce-backend-insomnia_ss.png)

## Credits

N/A

## License

N/A

### Author: Anthony Reedy