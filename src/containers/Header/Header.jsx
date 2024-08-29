import FormatDate from '../../components/FormatDate/FormatDate';
import Logo from '../../components/Logo/Logo';

import styles from './Header.module.css';

export default function Header(){
  const currantDate = new Date();
  return (
    <div className={styles.container}>
      <Logo/>
      <FormatDate date={currantDate}/>
    </div>
  )
}