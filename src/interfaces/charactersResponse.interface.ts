import Character from './character.interface';

export interface CharactersResponse {
  data: {
    offset: number;
    limit: number;
    total: number;
    results: Character[];
  };
}
