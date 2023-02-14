// Core
import { observer } from 'mobx-react-lite';

// Stores
import charactersStore from '../../../stores/Characters.store';

// Components
import CharactersItem from './CharactersItem/CharactersItem';
import CharactersEnd from './CharactersEnd/CharactersEnd';
import Loader from '../../../components/Loader/Loader';

// Styles
import styles from './CharactersList.module.css';

const CharactersList = () => {
  const { characters, isMainLoading, isError } = charactersStore;

  if (isMainLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error</p>;
  }

  if (!characters.length) {
    return <p>Nothing found for your request</p>;
  }

  return (
    <>
      <ul className={styles.characters}>
        {characters.map((character) => (
          <CharactersItem character={character} key={character.id} />
        ))}
      </ul>
      <CharactersEnd />
    </>
  );
};

export default observer(CharactersList);
