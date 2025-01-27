# Thogakade Server with Prisma 🚀

Welcome to **Thogakade Server with Prisma**! This is a backend project that leverages **Prisma** as the ORM for seamless database management and **Node.js** to serve data to the client. It's designed to power the Thogakade application, a platform that handles products, customers, and transactions in an efficient, scalable manner.

## 📝 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 📚 About

Thogakade Server is a backend service designed for a simple, yet powerful e-commerce application. It uses **Prisma** to interact with the database and follows a RESTful API structure to provide data to the front end. This server handles the business logic, such as managing products, users, and transactions.

## 🚀 Features

- **Product Management**: Add, update, and delete products in the store.
- **Customer Management**: Manage customer details and purchase history.
- **Transactions**: Handle order placements and payment processing.
- **REST API**: Exposes endpoints for client applications to interact with the backend.
- **Prisma ORM**: Easy database interaction with auto-generated query builders.
- **Authentication**: Implemented user authentication for a secure experience.

## 💻 Tech Stack

- **Node.js**: Server-side JavaScript environment.
- **Prisma**: Modern ORM for Node.js and TypeScript.
- **Express.js**: Web framework for routing and handling HTTP requests.
- **PostgreSQL/MySQL** (or any SQL database): Relational database for storing data.
- **JWT**: JSON Web Token authentication for secure API access.
- **dotenv**: Manage environment variables.

## 🛠️ Getting Started

To get started with the **Thogakade Server with Prisma** project locally, follow these steps:

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/amliyanage/thogakade-server-with-prisma.git
   cd thogakade-server-with-prisma
   ```

2. **Install dependencies**:
   Make sure you have `Node.js` installed. Then, run the following command:
   ```bash
   npm install
   ```

3. **Set up the database**:
   You will need to configure a PostgreSQL or MySQL database. Once your database is set up, make sure to configure the connection in your `.env` file (explained below).

### Environment Variables

Create a `.env` file in the root directory with the following contents:

```bash
DATABASE_URL="your-database-connection-url"
JWT_SECRET="your-secret-key"
```

- `DATABASE_URL`: Connection string to your database (PostgreSQL or MySQL).
- `JWT_SECRET`: A secret key used for signing JWT tokens.

### Prisma Setup

After setting up the database and the environment variables, you need to generate the Prisma client:

1. Run the Prisma migration command to sync your database schema:
   ```bash
   npx prisma migrate dev --name init
   ```

2. Generate the Prisma client:
   ```bash
   npx prisma generate
   ```

### Running the Application

Now you can run the application with:

```bash
npm run dev
```

Your server should now be running at `http://localhost:3000`.

## 🖥️ Usage

Once the server is running, you can interact with it via its API endpoints.

### Example Request

To add a new product:

```bash
POST /api/products
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "stock": 20
}
```

### Example Response

```json
{
  "id": 1,
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "stock": 20
}
```

## 📡 API Endpoints

### Products

- **GET /api/products** - Get a list of all products.
- **POST /api/products** - Add a new product.
- **GET /api/products/:id** - Get a single product by ID.
- **PUT /api/products/:id** - Update a product by ID.
- **DELETE /api/products/:id** - Delete a product by ID.

### Customers

- **GET /api/customers** - Get a list of all customers.
- **POST /api/customers** - Add a new customer.
- **GET /api/customers/:id** - Get a customer by ID.
- **PUT /api/customers/:id** - Update customer details by ID.
- **DELETE /api/customers/:id** - Delete a customer by ID.

### Transactions

- **POST /api/transactions** - Create a new transaction (order).
- **GET /api/transactions** - Get a list of all transactions.
- **GET /api/transactions/:id** - Get transaction details by ID.
