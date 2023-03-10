// Styles
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.ldsContainer}>
      <div className={styles.ldsSpinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
