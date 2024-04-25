import './NumberBox.css';

function NumberBox({ element }) {
  function getClasses() {
    let classes = 'box';

    if (isNaN(element)) {
      classes += ' hexa';
      return classes;
    }

    if (element % 2 === 0) {
      classes += ' even';
    } else {
      classes += ' odd';
    }

    let countFactors = 0;

    for (let i = 1; i <= element; i++) {
      if (element % i === 0) {
        countFactors++;
      }
    }

    if (countFactors === 2) {
      classes += ' prime';
    }

    return classes;
  }

  return (
    <div className={getClasses()} style={{ backgroundColor: element }}>
      {element}
    </div>
  );
}

export default NumberBox;
