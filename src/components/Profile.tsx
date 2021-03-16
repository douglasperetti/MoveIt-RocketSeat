import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/51934635?s=460&u=b2a33a493f81fb9267438329615063d4562b0151&v=4" alt="Douglas Fruet Peretti" />
      <div>
        <strong>Douglas Fruet Peretti</strong>
        <p>
          <img src="icons/level.svg" alt="Level "/>
          Level {level}
        </p>
      </div>
    </div>
  );
}