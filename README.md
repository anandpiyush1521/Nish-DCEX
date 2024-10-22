<h1>Nish Decentralized Exchange</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Powered_by-Solana_and_PostgreSQL-blue?style=for-the-badge&logo=solana" alt="Powered by Solana">
  <img src="https://img.shields.io/badge/Powered_by-Next.js-black?style=for-the-badge&logo=next.js" alt="Powered by Next.js">
</p>

<p align="center">
  <video width="1000" controls autoplay loop muted>
    <source src="public/Nish-DCEX.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

## Overview

This project is a decentralized exchange (DEX) that facilitates swap operations between Solana (SOL) and USDT. The backend utilizes PostgreSQL for database management, and the frontend is built using Next.js with integration for authentication and token management.

## Features

- **Swap Operations**: Allows swapping between Solana and USDT using Jupiter's swap API.
- **Token Balances**: Fetches and displays token balances and their USD value.
- **Authentication**: User authentication via NextAuth.
- **Dynamic UI**: Responsive and dynamic frontend components for a seamless user experience.

## Setup and Installation

### Prerequisites

- Docker
- Node.js (v14 or higher)
- PostgreSQL
- Solana CLI (for local development)

### Setting Up PostgreSQL with Docker

1. **Pull PostgreSQL Docker Image**

    ```bash
    docker pull postgres:latest
    ```

2. **Run PostgreSQL Container**

    ```bash
    docker run --name postgres-container -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=yourpassword -e POSTGRES_DB=yourdatabase -p 5432:5432 -d postgres:latest
    ```

    Replace `yourpassword` and `yourdatabase` with your desired password and database name.

### Backend Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-repo/decentralized-exchange.git
    cd decentralized-exchange
    ```

2. **Install Dependencies**

    ```bash
    cd backend
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the `backend` directory and add the following variables:

    ```env
    DATABASE_URL=postgres://postgres:yourpassword@localhost:5432/yourdatabase
    SOLANA_CLUSTER=https://mainnet.helius-rpc.com/?api-key=your_api_key
    ```

    Replace `yourpassword`, `yourdatabase`, and `your_api_key` with your PostgreSQL password, database name, and Solana API key, respectively.

4. **Run Migrations**

    If applicable, run migrations to set up your database schema.

    ```bash
    npm run migrate
    ```

5. **Start the Backend Server**

    ```bash
    npm start
    ```

### Frontend Setup

1. **Install Dependencies**

    ```bash
    cd frontend
    npm install
    ```

2. **Set Up Environment Variables**

    Create a `.env.local` file in the `frontend` directory and add the following variables:

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```

    Adjust `NEXT_PUBLIC_API_URL` if your API runs on a different URL or port.

3. **Start the Frontend Server**

    ```bash
    npm run dev
    ```

### Usage

1. **Access the Application**

    Open your browser and navigate to `http://localhost:3000`.

2. **Authentication**

    Sign in using Google authentication. Ensure that your Google OAuth credentials are properly configured in the NextAuth settings.

3. **Swap Tokens**

    Use the provided UI to perform swap operations between Solana and USDT.

4. **View Token Balances**

    Navigate to the token management section to view and manage your token balances.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.
