// Core
import { FC } from 'react';
import { observer } from 'mobx-react-lite';

// Stores
import charactersStore from '../../../stores/Characters.store';

// Components
import CharactersItem from './CharactersItem/CharactersItem';

const CharactersList: FC = () => {
  const { characters, isLoading, isError } = charactersStore;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  if (!characters.length) {
    return <p>Nothing found for your request</p>;
  }

  return (
    <div>
      <ul>
        {characters.map((character) => (
          <CharactersItem character={character} key={character.id} />
        ))}
      </ul>
    </div>
  );
};

export default observer(CharactersList);
