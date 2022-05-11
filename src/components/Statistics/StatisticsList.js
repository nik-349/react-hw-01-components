import Statistics from './Statistics';
import PropTypes from 'prop-types';
import './Statistics.css';
function StatisticsList({ stats }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
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
