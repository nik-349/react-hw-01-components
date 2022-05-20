import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const ProfileUser = ({
  followers,
  views,
  likes,
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>Petra Marica</p>
        <p className={styles.tag}>pmarica</p>
        <p className={styles.location}>Salvador, Brasil</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statistic}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.statistic}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.statistic}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

ProfileUser.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default ProfileUser;
