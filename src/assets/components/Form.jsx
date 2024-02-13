import { useState } from 'react';

function Form({ name, setCurrent, current }) {
  const [isActive, setIsActive] = useState(false);
  const keys = Object.keys(current);
  const objectToMap = (obj) => new Map(Object.entries(obj));
  const mapToObject = (map) => Object.fromEntries(map.entries());

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

  if (isActive === false) {
    return <button onClick={handleClick}>{name}</button>;
  }
  if (isActive === true) {
    return (
      <>
        <button onClick={handleClick}>{name}</button>
        <form action="/">
          {keys.map((key, index) => {
            console.log(key);
            return (
              <input type="text" key={index} placeholder={key} onChange={handleChange} id={key} />
            );
          })}
        </form>
      </>
    );
  }
}

export default Form;
