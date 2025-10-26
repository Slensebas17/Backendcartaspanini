import { Controller, Get, Param } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('team/:teamId')
  findByTeam(@Param('teamId') teamId: string) {
    return this.playersService.findAllByTeam(Number(teamId));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(Number(id));
  }
}
