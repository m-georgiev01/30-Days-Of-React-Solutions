import { useEffect, useState } from 'react';
import NumberBox from '../number-box/NumberBox';
import './NumberList.css';

function NumbersList({ isHexa }) {
  const [nums, setNums] = useState([]);

  useEffect(() => {
    const numbers = [];
    for (let i = 0; i <= 31; i++) {
      numbers.push(i);
    }
    setNums(numbers);
  }, []);

  const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

  return (
    <div className="nums-container">
      {isHexa === undefined
        ? nums.map((n) => {
            return <NumberBox key={n} element={n} />;
          })
        : nums.map((n) => {
            return <NumberBox key={n} element={randomHexColorCode()} />;
          })}
    </div>
  );
}

export default NumbersList;
