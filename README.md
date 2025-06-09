# agrifarm

## Overview

Farmers often face uncertainties in accessing stable markets, leading to unpredictable incomes and financial instability. To address this challenge, we propose the development of agrifarm—a comprehensive platform designed to provide farmers with guaranteed buyers for their crops through transparent, secure, and reliable agreements. The platform will enable farmers to create listings for their crops, negotiate with buyers, and finalize terms using customizable contract templates.

## Features

- **Crop Listings**: Farmers can create detailed listings for their crops, specifying yield, quality, and price expectations.
- **Customizable Contract Templates**: Tailored contract templates for agreements covering terms like price, delivery schedules, and payment methods.
- **Interest Button with Instant Notification**: The platform includes an "Interested" button in the crop listing section. When clicked, it sends an instant message to the crop owner (farmer), notifying them that a buyer is interested, streamlining communication and enabling quick negotiation and decision-making.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (local installation or MongoDB Atlas account)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/abhinayychaudharyy/Agrifarm.git
cd Agrifarm
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd Frontend
npm install
cd ..
```

## Environment Setup

1. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

2. For Twilio setup:
   - Sign up for a Twilio account at https://www.twilio.com
   - Get your Account SID and Auth Token from the Twilio Console
   - Get a Twilio phone number for sending SMS

## Running the Application

1. Start the backend server:
```bash
# From the root directory
node backend/index.js
```

2. Start the frontend development server:
```bash
# From the Frontend directory
cd Frontend
npm start
```

The application should now be running at:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000

## Project Structure

```
agrifarm/
├── backend/           # Backend server code
│   ├── routes/       # API routes
│   ├── middleware/   # Custom middleware
│   └── index.js      # Main server file
├── Frontend/         # React frontend application
│   ├── public/       # Static files
│   └── src/          # React source code
└── package.json      # Project dependencies
```

## API Endpoints

- `POST /api/auth/createuser`: Register a new user
- `POST /api/auth/login`: User login
- `GET /api/notes`: Get user's notes
- `POST /api/notes/addnote`: Add a new note
- `POST /api/sendMessage`: Send SMS notification

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com
Project Link: https://github.com/abhinayychaudharyy/Agrifarm

## Vision

Our vision is to empower farmers with guaranteed market access and income stability through transparent and secure contract agreements, supported by blockchain technology 

## Contract Details

- **Contract Address**: `0x6471EACC40D24bC9F4BAB843560eDFEa190730c5`
- **Network**: Neo X Mainnet

## Deployment

- **Contract Address**: [View on Explorer](https://xexplorer.neo.org/address/0x6471EACC40D24bC9F4BAB843560eDFEa190730c5)
- **Coin Used**: GAS

## Screenshots
<img width="1440" alt="Screenshot 2024-12-24 at 3 22 57 AM" src="https://github.com/user-attachments/assets/5662c996-1247-4b80-9167-9745b5baf380" />
<img width="1440" alt="Screenshot 2024-12-24 at 3 18 45 AM" src="https://github.com/user-attachments/assets/2ac35ee8-a549-41ab-99a7-ccb9e6c7ba29" />
<img width="1423" alt="Screenshot 2024-12-24 at 3 19 04 AM" src="https://github.com/user-attachments/assets/22a0ff2d-1828-4b0b-a0d1-662c2fba38ee" />
<img width="1246" alt="Screenshot 2024-12-24 at 3 19 18 AM" src="https://github.com/user-attachments/assets/fb21365c-a8dd-43ca-80ce-b4f07ee2170c" />






