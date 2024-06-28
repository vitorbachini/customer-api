# Customer API

This is a simple REST API for managing customer information, built with Express, TypeScript, and MongoDB. The application allows you to create, read, update, and delete customer records. Additionally, it integrates with the Via CEP API to fetch address details based on the postal code.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [API Endpoints](#api-endpoints)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Build the app:

    ```bash	
    npm run build
    ```

4. Create a `.env` file in the root directory of the project and add the following environment variables (see .env-example for help):

    ```env
    PORT=your-port
    MONGODB_URI=your-mongodb-uri
    ```

## Running the Application

1. Start the application:

    ```bash
    npm run start
    ```

2. The server will start on `http://localhost:your-port` (the default value for port is 3000). You can access the API documentation at `http://localhost:your-port/api-docs`.

## API Endpoints

### Create a Customer

- **URL:** `POST /api/v1/client`
- **Description:** Creates a new customer.
- **Request Body:**

    ```json
    {
      "name": "João Mário",
      "cpf": "123.123.123-12",
      "birthDate": "01/01/2000",
      "email": "joão@email.com",
      "password": "Senha123!",
      "cep": "91211-211",
      "number": "25",
    }
    ```

- **Response:**

    ```json
    {
      "id": "a99e8bf7-fa32-4ae7-8b53-5e00b9d43621",
      "name": "João Mário",
      "cpf": "123.123.123-12",
      "birthDate": "01/01/2000",
      "email": "joão@email.com",
      "cep": "91211-211",
      "uf": "RJ",
      "city": "Rio de Janeiro",
      "address": "Street 2",
      "number": "25",
      "complement": "close to the beach",
      "neighborhood": "Center"
    }
    ```

### List All Customers

- **URL:** `GET /api/v1/client`
- **Description:** Returns and displays all customer information.
- **Query Parameters:**
  - `page` (optional): The page number (default is 1).
  - `limit` (optional): The number of items per page (default is 10).
- **Response:**

    ```json
    {
      "customers": [
        {
          "id": "a99e8bf7-fa32-4ae7-8b53-5e00b9d43621",
          "name": "João Mário",
          "cpf": "123.123.123-12",
          "birthDate": "01/01/2000",
          "email": "joão@email.com",
          "cep": "91211-211",
          "uf": "RJ",
          "city": "Rio de Janeiro",
          "address": "Street 2",
          "number": "25",
          "complement": "close to the beach",
          "neighborhood": "Center"
        }
        // More customers...
      ],
      "totalCustomers": 100,
      "totalPages": 10,
      "currentPage": 1
    }
    ```

### Get Customer by ID

- **URL:** `GET /api/v1/client/:id`
- **Description:** Returns a customer by ID.
- **Response:**

    ```json
    {
      "id": "a99e8bf7-fa32-4ae7-8b53-5e00b9d43621",
      "name": "João Mário",
      "cpf": "123.123.123-12",
      "birthDate": "01/01/2000",
      "email": "joão@email.com",
      "cep": "91211-211",
      "uf": "RJ",
      "city": "Rio de Janeiro",
      "address": "Street 2",
      "number": "25",
      "complement": "close to the beach",
      "neighborhood": "Center"
    }
    ```

### Update Customer

- **URL:** `PATCH /api/v1/client/:id`
- **Description:** Updates a customer's information.
- **Request Body (Example):**

    ```json
    {
      "name": "João Silva",
      "birthDate": "01/02/2000",
      "password": "Novasenha123!",
      "cep": "91231-211",
      "number": "26",
    }
    ```

- **Response:**

    ```json
    {
      "id": "a99e8bf7-fa32-4ae7-8b53-5e00b9d43621",
      "name": "João Silva",
      "cpf": "123.123.123-12",
      "birthDate": "01/02/2000",
      "email": "mariasilva@hotmail.com",
      "cep": "91231-211",
      "uf": "RJ",
      "city": "Rio de Janeiro",
      "address": "Street 3",
      "number": "26",
      "complement": "close to the beach",
      "neighborhood": "Center"
    }
    ```

### Delete Customer

- **URL:** `DELETE /api/v1/client/:id`
- **Description:** Deletes a customer by ID.
- **Response:** `204 No Content`