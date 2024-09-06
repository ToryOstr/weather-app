import Search from '../../components/Search/Search';
import styles from './MainContainer.module.css';

// eslint-disable-next-line react/prop-types
export default function MainContainer({ onHandleGetSearchData, children }) {
  
  // eslint-disable-next-line react/prop-types
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