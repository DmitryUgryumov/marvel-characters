// Core
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

// Stores
import charactersStore from '../../../stores/Characters.store';

// Hooks
import useDebounce from '../../../hooks/useDebounce';

// Styles
import styles from './SearchInput.module.css';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const debounceSearchValue = useDebounce(searchValue, 300);
  const { changeNameFilter } = charactersStore;

  const onResetValue = () => setSearchValue('');

  useEffect(() => {
    changeNameFilter(debounceSearchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearchValue]);

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type="text"
        placeholder="Write hero (Spider-Man, Hulk)"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button className={styles.resetBtn} onClick={onResetValue}>
        Reset
      </button>
    </div>
  );
};

export default observer(SearchInput);
