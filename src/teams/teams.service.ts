import { Injectable } from '@nestjs/common';
import { Team } from './team.entity';

@Injectable()
export class TeamsService {
  private teams: Team[] = [
    {
      id: 1,
      country: 'Argentina',
      confederation: 'CONMEBOL',
      worldTitles: 3,
      logoUrl: 'https://example.com/argentina.png',
    },
    {
      id: 2,
      country: 'España',
      confederation: 'UEFA',
      worldTitles: 1,
      logoUrl: 'https://example.com/spain.png',
    },
  ];

  findAll(): Team[] {
    return this.teams;
  }

  findOne(id: number): Team | undefined {
    return this.teams.find(team => team.id === id);
  }
}
