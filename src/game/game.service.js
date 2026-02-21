import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  constructor() {
    this.resetGame();
  }

  resetGame() {
    this.gameState = {
      ballX: 50, // percentage of screen width
      ballY: 10, // percentage of screen height - start near top
      ballSpeedX: 0.8,
      ballSpeedY: 0.8,
      batX: 42.5, // percentage of screen width
      batWidth: 15, // percentage
      batHeight: 5, // percentage
      score: 0,
      hits: 0,
      gameActive: true,
      ballRadius: 1, // percentage
    };
  }

  getGameState() {
    return this.gameState;
  }

  updateBatPosition(x) {
    // x is percentage of screen width (0-100)
    const newX = Math.max(0, Math.min(x, 100 - this.gameState.batWidth));
    this.gameState.batX = newX;
  }

  updateGame() {
    if (!this.gameState.gameActive) return this.gameState;

    // Update ball position
    this.gameState.ballX += this.gameState.ballSpeedX;
    this.gameState.ballY += this.gameState.ballSpeedY;

    // Ball collision with walls (left/right)
    if (this.gameState.ballX <= 0 || this.gameState.ballX >= 100) {
      this.gameState.ballSpeedX *= -1;
      // Clamp ball X to stay within bounds
      this.gameState.ballX = Math.max(0, Math.min(100, this.gameState.ballX));
    }

    // Ball collision with top
    if (this.gameState.ballY <= 0) {
      this.gameState.ballSpeedY *= -1;
      this.gameState.ballY = 0;
    }

    // Ball collision with bottom (game over)
    if (this.gameState.ballY >= 100) {
      this.gameState.gameActive = false;
      return this.gameState;
    }

    // Check collision with bat
    const batTop = 90; // Changed from 95 for better visibility
    const batBottom = 100;
    const ballBottom = this.gameState.ballY + this.gameState.ballRadius;
    const ballTop = this.gameState.ballY - this.gameState.ballRadius;

    // Collision detection
    if (
      ballBottom >= batTop &&
      ballTop <= batBottom &&
      this.gameState.ballX >= this.gameState.batX &&
      this.gameState.ballX <= this.gameState.batX + this.gameState.batWidth
    ) {
      this.gameState.ballSpeedY = -Math.abs(this.gameState.ballSpeedY); // Always bounce up
      this.gameState.ballY = batTop - 1; // Position ball above bat
      this.gameState.score += 10;
      this.gameState.hits += 1;
      // Increase difficulty slightly
      this.gameState.ballSpeedX *= 1.02;
      this.gameState.ballSpeedY *= 1.02;
    }

    return this.gameState;
  }
}
