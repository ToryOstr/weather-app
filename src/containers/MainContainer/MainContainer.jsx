import Search from '../../components/Search/Search';
import styles from './MainContainer.module.css';

export default function MainContainer({ onHandleGetSearchData, children }) {

  function handleOnSearchChange(searchData) {
    onHandleGetSearchData(searchData);
  }

  return (
    <div className={styles.container}>
      <Search onSearchChange={handleOnSearchChange} />
      {children}
    </div>
  );
}