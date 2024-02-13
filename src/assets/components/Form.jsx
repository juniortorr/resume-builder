import { useState } from 'react';

function Form({ info, name, setCurrentGeneral, currentGeneral }) {
  const [isActive, setIsActive] = useState(false);
  const keys = Object.keys(info);
  const objectToMap = (obj) => new Map(Object.entries(obj));
  const mapToObject = (map) => Object.fromEntries(map.entries());

  function handleChange(e) {
    const map = objectToMap(currentGeneral);
    map.set(e.target.id, e.target.value);

    setCurrentGeneral({
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
