E‑Commerce Product Management System

TypeScript & Advanced JavaScript — Junior-Level Project

This project is my Skills-Based Assessment for the TypeScript and Advanced JavaScript module. I built a small E‑commerce Product Management System using TypeScript, API calls, and some basic OOP concepts. The app fetches products from the DummyJSON API and then shows their basic details, discount amounts, and tax amounts.

I tried to follow the instructions the best I could, but I kept the code simple so I could understand everything I was doing. This project helped me practice TypeScript, async/await, modules, and learning how to structure files.

Project Structure

e-commerce-system/
├── src/
│   ├── models/
│   │   ├── Product.ts
│   ├── services/
│   │   └── apiService.ts
│   ├── utils/
│   │   ├── discountCalculator.ts
│   │   ├── errorHandler.ts
│   │   └── taxCalculator.ts
│   └── main.ts
└── tsconfig.json

How to Run the Project (Step-by-Step Terminal Guide)

Create project folder:
mkdir e-commerce-system
cd e-commerce-system

Initialize npm:
npm init -y

Install TypeScript:
npm install typescript @types/node --save-dev

Create tsconfig.json:
npx tsc --init

Enable ESM mode: Open package.json and add:
"type": "module"

Create src folder and sub‑folders:
mkdir src src/models src/services src/utils

Add all .ts files into the folders.
Compile TypeScript:

npx tsc
Run the app:

Features Implemented:

* Fetch products from DummyJSON API
* Basic Product class with displayDetails()
* Simple discount and tax calculations
* async/await API handling
* Custom Error class
* Console output of results
* UI with HTML/CSS/JS
