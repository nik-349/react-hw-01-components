import PropTypes from 'prop-types';

const StatisticsList = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

StatisticsList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticsList;
