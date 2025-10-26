import { Injectable } from '@nestjs/common';
import { Player } from './player.entity';

@Injectable()
export class PlayersService {
  private players: Player[] = [
    {
      id: 1,
      name: 'Lionel Messi',
      age: 37,
      teamId: 1,
      imageUrl: 'https://example.com/messi.png',
      dribbling: 95,
      speed: 84,
      passing: 93,
      shooting: 90,
    },
    {
      id: 2,
      name: 'Pedri',
      age: 22,
      teamId: 2,
      imageUrl: 'https://example.com/pedri.png',
      dribbling: 89,
      speed: 86,
      passing: 90,
      shooting: 75,
    },
  ];

  findAllByTeam(teamId: number): Player[] {
    return this.players.filter(p => p.teamId === teamId);
  }

  findOne(id: number): Player | undefined {
  return this.players.find(p => p.id === id);
  } 
}
