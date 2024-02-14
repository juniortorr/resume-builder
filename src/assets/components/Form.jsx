import { useState } from 'react';

// statuses = saved, editing

// TO GET LABELS THAT DONT CHANGE
// You should probably load in the actual original
// object for each one and make labels for each input
// that use the original field names from original objects

function Form({ name, setCurrent, current }) {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState('initial');
  const objectToMap = (obj) => new Map(Object.entries(obj));
  const mapToObject = (map) => Object.fromEntries(map.entries());
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
  function handleSave() {
    setStatus('saved');
  }
  function handleEdit() {
    setStatus('editing');
  }

  for (const [key, value] of Object.entries(current)) {
    if (status === 'saved') {
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
            disabled
          ></textarea>
        );
      } else {
        inputs.push(
          <input disabled type="text" key={index} value={value} onChange={handleChange} id={key} />
        );
      }
    } else {
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
        inputs.push(
          <input type="text" key={index} value={value} onChange={handleChange} id={key} />
        );
      }
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
        <form action="/" onSubmit={handleSave}>
          {inputs}
        </form>
        <button type="submit" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      </>
    );
  }
}

export default Form;
