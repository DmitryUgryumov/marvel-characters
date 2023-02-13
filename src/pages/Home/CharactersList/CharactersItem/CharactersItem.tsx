// Core
import { FC } from 'react';

// Interfaces
import Character from '../../../../interfaces/character.interface';

interface PropsTypes {
  character: Character;
}

const CharactersItem: FC<PropsTypes> = ({ character }) => {
  return (
    <li>
      <p>{character.name}</p>
      {character.description && <p>{character.description}</p>}
      {character.thumbnail.path && character.thumbnail.extension && (
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          width={100}
          height={100}
        />
      )}
    </li>
  );
};

export default CharactersItem;
