# Project Title

A simple React Native (Expo) application featuring **Login** and **Signup** functionality, with a basic CI/CD pipeline set up through GitHub Actions.

---

## 1. Project Overview

- **Authentication**  
  - **Login Screen**: Allows users to log in with an email and password.  
  - **Signup Screen**: Allows users to register with an email, password, and confirmation password.  

  Includes form validation to ensure:
  - Valid email format
  - Password and Confirm Password match

- **State Management**  
  - Authentication state is managed using **React Context API**.

- **Navigation**  
  - Uses **React Navigation** for transitioning between the Login and Signup screens.

- **CI/CD**  
  - **GitHub Actions** for running automated tests (lint, unit tests).
  - **Expo EAS** to build Android and iOS apps on pushes to specified branches.

---

## 2. Prerequisites and Installation

### Prerequisites

1. **Node.js** (v14 or higher recommended)
2. **npm** or **yarn** (Instructions below assume npm)
3. **Expo CLI** globally installed:
   ```bash
   npm install --global expo-cli

### Installation Steps
1. Clone the repository: **git clone https://github.com/your-username/your-repo.git**
2. Install dependencies: **npm install**
3. Start the Expo development server: **nppm start**
4. Run the app on your device or emulator:
   - Android: **npm run android**
   - iOS: **npm run ios**
   