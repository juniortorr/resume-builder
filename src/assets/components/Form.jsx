import { useState } from 'react';

function Form({ name, setCurrent, current }) {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState('initial');
  const objectToMap = (obj) => new Map(Object.entries(obj));
  const mapToObject = (map) => Object.fromEntries(map.entries());
  const statuses = ['initial', 'saved', 'editing'];
  const inputs = [];
  let index = 0;

  function handleChange(e) {
    const map = objectToMap(current);
    map.set(e.target.id, e.target.value);

    setCurrent({
      ...mapToObject(map),
    });
  }
  function handleClick() {
    setIsActive(!isActive);
  }
  for (const [key, value] of Object.entries(current)) {
    console.log(key);
    if (value === 'Relevant Information') {
      inputs.push(
        <textarea
          name={key}
          id={key}
          key={index}
          onChange={handleChange}
          value={value}
          cols="30"
          rows="10"
        ></textarea>
      );
    } else {
      inputs.push(<input type="text" key={index} value={value} onChange={handleChange} id={key} />);
    }
    index += 1;
  }
  if (isActive === false) {
    return <button onClick={handleClick}>{name}</button>;
  }
  if (isActive === true) {
    return (
      <>
        <button onClick={handleClick}>{name}</button>
        <form action="/">{inputs}</form>
      </>
    );
  }
}

export default Form;

//             if (key === 'relevantInfo') {
// return (

// );
//
