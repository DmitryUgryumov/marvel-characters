import apiServer from './apiServer.api';
import Character from '../interfaces/character.interface';

interface CharactersResponse {
  data: {
    results: Character[];
  };
}

const getCharacters = async (nameFilter: string): Promise<Character[]> => {
  const params = nameFilter ? { nameStartsWith: nameFilter } : {};

  const { data } = await apiServer.get<CharactersResponse>('/characters', {
    params,
  });

  return data.data.results;
};

export default getCharacters;
