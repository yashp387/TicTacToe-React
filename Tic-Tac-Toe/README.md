# Tic-Tac-Toe Game (React + Vite)

A simple, responsive Tic-Tac-Toe game built with React and Vite.

## Features

- Play classic Tic-Tac-Toe against another player (local).
- Animated, visually appealing board and status display.
- Game status: win, draw, and current turn indicator.
- Reset button to start a new game.
- Responsive design for mobile and desktop.

## Project Structure

```
Tic-Tac-Toe/
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   └── react.svg
│   └── components/
│       ├── Assets/
│       │   ├── circle.png
│       │   └── cross.png
│       └── TicTacToe/
│           ├── TicTacToe.css
│           └── TicTacToe.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd Tic-Tac-Toe
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
# or
yarn build
```

Preview the production build:

```sh
npm run preview
# or
yarn preview
```

## Code Overview

- [`src/App.jsx`](src/App.jsx): Main app component, renders the TicTacToe game.
- [`src/components/TicTacToe/TicTacToe.jsx`](src/components/TicTacToe/TicTacToe.jsx): Implements game logic, board rendering, and status display.
- [`src/components/TicTacToe/TicTacToe.css`](src/components/TicTacToe/TicTacToe.css): Styles for the game board and UI.
- [`src/components/Assets/circle.png`](src/components/Assets/circle.png) and [`src/components/Assets/cross.png`](src/components/Assets/cross.png): Images for player icons.
- [`src/main.jsx`](src/main.jsx): Entry point, renders the app to the DOM.
- [`index.html`](index.html): HTML template.

## ESLint & Formatting

- ESLint is configured in [`eslint.config.js`](eslint.config.js) for code quality and React best practices.

## License

This project is for educational purposes.

---

Feel free to customize this README for your needs!