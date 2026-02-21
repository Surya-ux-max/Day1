import { Controller, Get, Post, Dependencies } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('api/game')
@Dependencies(GameService)
export class GameController {
  constructor(gameService) {
    this.gameService = gameService;
  }

  @Get('state')
  getGameState() {
    return this.gameService.getGameState();
  }

  @Post('update')
  updateGame(req) {
    const body = req?.body || {};
    console.log('Received batX:', body.batX, 'Type:', typeof body.batX);
    if (body.batX !== undefined) {
      this.gameService.updateBatPosition(body.batX);
    }
    const result = this.gameService.updateGame();
    console.log('Game state:', result.ballX, result.ballY, result.batX);
    return result;
  }

  @Post('reset')
  resetGame() {
    this.gameService.resetGame();
    return this.gameService.getGameState();
  }

  @Post('move-bat')
  moveBat(req) {
    const body = req?.body || {};
    if (body.x !== undefined) {
      this.gameService.updateBatPosition(body.x);
    }
    return this.gameService.getGameState();
  }
}
