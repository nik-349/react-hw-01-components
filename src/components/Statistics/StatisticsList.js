import Statistics from './Statistics';

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

export default StatisticsList;
