import { useState, useEffect } from 'react';

const useDebounce = <T>(value: T, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const changeValueTimeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(changeValueTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debounceValue;
};

export default useDebounce;
