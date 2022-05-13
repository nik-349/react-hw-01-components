import Statistics from './Statistics';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
function StatisticsList({ stats, title }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(elem => (
          <Statistics
            key={elem.id}
            label={elem.label}
            percentage={elem.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default StatisticsList;
