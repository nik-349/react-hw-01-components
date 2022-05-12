import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const StatisticsList = ({ label, percentage }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  );
};

StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsList;
