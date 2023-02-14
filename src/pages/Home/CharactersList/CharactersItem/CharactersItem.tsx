// Core
import { FC } from 'react';

// Interfaces
import Character from '../../../../interfaces/character.interface';

// Styles
import styles from './CharacterItem.module.css';

interface PropsTypes {
  character: Character;
}

const CharactersItem: FC<PropsTypes> = ({ character }) => {
  return (
    <li className={styles.character}>
      {character.thumbnail.path && character.thumbnail.extension && (
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className={styles.image}
        />
      )}
      <p className={styles.name}>{character.name}</p>
      {character.description && <p className={styles.description}>{character.description}</p>}
    </li>
  );
};

export default CharactersItem;
