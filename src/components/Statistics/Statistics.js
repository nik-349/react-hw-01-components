function StatisticsList({ stats }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(option => (
          <li className="item">
            <span className="label">{option.label}</span>
            <span className="percentage">{option.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StatisticsList;
