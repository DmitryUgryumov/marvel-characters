// Core
import { FC, useEffect, useRef, useState } from 'react';

interface PropsTypes {
  onListEnd: () => void;
}

const ListEndDetected: FC<PropsTypes> = ({ onListEnd }) => {
  const [endIsDetected, setEndIsDetected] = useState<boolean>(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!endRef.current || endIsDetected) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onListEnd();
        setEndIsDetected(true);
      }
    });

    observer.observe(endRef.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endIsDetected]);

  return <div ref={endRef} />;
};

export default ListEndDetected;
