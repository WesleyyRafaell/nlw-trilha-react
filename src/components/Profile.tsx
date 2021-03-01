import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { challengesCompleted } = useContext(ChallengeContext);
  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/23534161?s=460&u=c0134b805611621e2fcce7576b4a90ebd520f528&v=4" alt="perfil"/>
      <div>
        <strong>Wesley Rafael</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {challengesCompleted}
        </p>
      </div>
    </div>
  );
}