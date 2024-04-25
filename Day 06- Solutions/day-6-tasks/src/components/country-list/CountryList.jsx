import { useState } from 'react';
import './CountryList.css';
import { tenHighestPopulation } from '../../ten_most_highest_populations';
import Country from '../country/Country';

function CountryList() {
  const [countries] = useState(tenHighestPopulation);

  const MAX_VALUE_POPULATION = 7693165599;

  return (
    <div className="country-list">
      {countries
        .sort((a, b) => b.population - a.population)
        .map((c, i) => (
          <Country key={i} country={c} maxValue={MAX_VALUE_POPULATION} />
        ))}
    </div>
  );
}

export default CountryList;
