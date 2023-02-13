// Core
import { FC, ReactNode } from 'react';

// Styles
import styles from './PageContainer.module.css';

interface PropsTypes {
  children: ReactNode;
}

const PageContainer: FC<PropsTypes> = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default PageContainer;
