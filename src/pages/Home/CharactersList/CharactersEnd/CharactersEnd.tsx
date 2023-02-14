// Core
import { observer } from 'mobx-react-lite';

// Stores
import charactersStore from '../../../../stores/Characters.store';

// Components
import ListEndDetected from '../../../../components/ListEndDetected/ListEndDetected';
import Loader from '../../../../components/Loader/Loader';

// Styles
import styles from './CharactersEnd.module.css';

const CharactersEnd = () => {
  const { isSecondaryLoading, changeOffsetFilter } = charactersStore;

  return (
    <div className={styles.endContainer}>
      {isSecondaryLoading ? <Loader /> : <ListEndDetected onListEnd={changeOffsetFilter} />}
    </div>
  );
};

export default observer(CharactersEnd);
