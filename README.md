# Kickstart🚀

Kickstart2 is a full-stack web application boilerplate built with **Node.js** and **Next.js**, designed for rapid development and deployment. It offers a structured backend with API routes, middleware, and an optimized frontend framework.

## 🌟 Features

- **Next.js Frontend**: Server-side rendering and static site generation.
- **Express.js Backend**: Robust API routes and middleware.
- **Ethereum Integration**: Smart contracts using Solidity.
- **Modular Architecture**: Organized for scalability and maintainability.
- **Pre-configured Dependencies**: Fast setup with essential packages.

## 📂 Project Structure

```
fullstack-next-node/
│── .gitignore
│── LICENSE
│── README.md
│── package.json
│── package-lock.json
│── server.js                 # Main backend server
│── routes.js                 # API route definitions
│── /components               # Reusable React components
│── /ethereum                 # Blockchain integration
│   │── compile.js            # Solidity compiler script
│   │── deploy.js             # Deployment script
│   │── web3.js               # Web3.js setup
│   │── /build                # Compiled contract artifacts
│   │── /contracts            # Solidity contracts
│       │── Campaign.sol      # Campaign contract
│── /pages                    # Next.js pages
│── /public                   # Static assets
│── /test                     # Test cases
```

## ⚡ Quick Start

### 📋 Prerequisites

- **Node.js** (>= 14.x)
- **npm** or **yarn**
- **MetaMask** (for Ethereum interactions)
- **Infura** or **Alchemy** account (for Ethereum network access)

### 🛠 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hosseinsh91/fullstack-next-node.git
   cd fullstack-next-node
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Compile Smart Contracts**:
   ```bash
   node ethereum/compile.js
   ```

4. **Deploy Smart Contracts**:
   ```bash
   node ethereum/deploy.js
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

6. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

## 🔗 API Endpoints

| Method | Endpoint           | Description                |
|--------|--------------------|----------------------------|
| GET    | `/api/status`      | Returns API status         |
| POST   | `/api/campaign`    | Creates a new campaign     |
| GET    | `/api/campaigns`   | Retrieves all campaigns    |
| GET    | `/api/campaign/:id`| Retrieves a specific campaign |

## 🛡 Environment Variables

Create a `.env` file in the root directory and add the following:

```
PORT=3000
INFURA_API_KEY=your_infura_api_key
MNEMONIC=your_mnemonic
```

## 🏗 Deployment

### Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

### Heroku

1. **Login to Heroku**:
   ```bash
   heroku login
   ```

2. **Create a new app**:
   ```bash
   heroku create
   ```

3. **Deploy**:
   ```bash
   git push heroku main
   ```

## 🧪 Testing

Run tests using:

```bash
npm test
```
or
```bash
yarn test
```

## 🤝 Contribution

Contributions are welcome! Please fork the repository and create a pull request.

## 📜 License

This project is licensed under the **MIT License**.


