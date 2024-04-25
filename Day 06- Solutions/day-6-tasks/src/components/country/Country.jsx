import './Country.css';

function Country({ country: { country, population }, maxValue }) {
  const percentage = (population / maxValue) * 100;

  return (
    <div className="country-wrapper">
      <div className="first-div">{country}</div>
      <div className="progress" style={{ width: `${percentage}%` }}></div>
      <div className="third-div">{population.toLocaleString()}</div>
    </div>
  );
}

export default Country;
