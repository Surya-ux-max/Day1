# 🎮 Hit the Ball with Bat - NestJS Game

A fun browser-based game built with NestJS and JavaScript. Move your bat to hit the ball and score points! Perfect for practicing cloud deployment on Render and Vercel.

## 🎯 Game Features

- Interactive ball physics with collision detection
- Real-time score and hit counter
- Smooth bat movement following mouse position
- Responsive design for all screen sizes
- Game over detection and restart functionality
- Progressive difficulty (ball speeds up after each hit)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Installation

```bash
npm install
```

## ▶️ Running the App

### Development Mode
```bash
npm run start:dev
```
The game will be available at `http://localhost:3000`

### Production Mode
```bash
npm run start
```

### Watch Mode
```bash
npm run start:dev
```

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 🌐 Deployment

### Deploy to Render

1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. Fill in the details:
   - Name: `hit-the-ball-game`
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `npm run start`
6. Click "Create Web Service"

The app will be deployed and available at your Render URL.

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New..." and select "Project"
4. Import your GitHub repository
5. Vercel will auto-detect the settings
6. Click "Deploy"

The app will be deployed and available at your Vercel URL.

## 📁 Project Structure

```
.
├── src/
│   ├── main.js              # Application entry point
│   ├── app.module.js        # Main app module
│   ├── app.controller.js    # Root controller
│   ├── app.service.js       # Root service
│   └── game/
│       ├── game.module.js   # Game module
│       ├── game.controller.js # Game API endpoints
│       └── game.service.js   # Game logic and state
├── public/
│   └── game.html            # Game frontend
├── test/                    # Test files
├── package.json             # Dependencies
├── render.yaml              # Render deployment config
├── vercel.json              # Vercel deployment config
└── README.md               # This file
```

## 🎮 How to Play

1. Open the game in your browser
2. Move your mouse left and right to control the bat
3. Try to hit the ball without missing
4. Each successful hit increases your score by 10 points
5. The ball gets faster with each hit
6. Game ends when you miss the ball

## 🏗️ Architecture

### Game Service (`game.service.js`)
Manages all game logic including:
- Ball physics and movement
- Collision detection (walls, bat, bottom)
- Score tracking
- Difficulty progression

### Game Controller (`game.controller.js`)
Provides REST API endpoints:
- `GET /api/game/state` - Get current game state
- `POST /api/game/update` - Update game and bat position
- `POST /api/game/reset` - Reset game
- `POST /api/game/move-bat` - Move bat to position

### Game Frontend (`public/game.html`)
Browser-based UI with:
- Canvas rendering for game elements
- Mouse tracking for bat control
- Real-time score updates
- Game over screen with final stats

## 🔧 Environment Variables

Create a `.env` file based on `.env.example`:

```env
PORT=3000
NODE_ENV=development
```

## 📝 License

UNLICENSED

## 🙏 Built with

- [NestJS](https://nestjs.com/) - Progressive Node.js framework
- [Express](https://expressjs.com/) - Web application framework
- [Babel](https://babeljs.io/) - JavaScript compiler

