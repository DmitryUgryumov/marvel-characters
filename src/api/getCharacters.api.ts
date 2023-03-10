import apiServer from './apiServer.api';
import { CharactersResponse } from '../interfaces/charactersResponse.interface';

interface CharactersParams {
  limit: number;
  offset: number;
  orderBy: string;
  nameStartsWith?: string;
}

const getCharacters = async (
  nameStartsWith: string,
  limit: number,
  offset: number,
  orderBy: string
): Promise<CharactersResponse> => {
  const params: CharactersParams = {
    limit,
    offset,
    orderBy,
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
