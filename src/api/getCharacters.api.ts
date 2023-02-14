import apiServer from './apiServer.api';
import { CharactersResponse } from '../interfaces/charactersResponse.interface';

interface CharactersParams {
  limit: number;
  offset: number;
  nameStartsWith?: string;
}

const getCharacters = async (nameStartsWith: string, limit: number, offset: number): Promise<CharactersResponse> => {
  const params: CharactersParams = {
    limit,
    offset,
  };

  if (nameStartsWith) {
    params.nameStartsWith = nameStartsWith;
  }

  const { data } = await apiServer.get<CharactersResponse>('/characters', {
    params,
  });

  return data;
};

export default getCharacters;
