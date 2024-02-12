import { useState } from 'react';

function Form({ info }) {
  const [isActive, setIsActive] = useState(false);
  const keys = Object.keys(info);

  function handleClick() {
    setIsActive(!isActive);
  }

  if (isActive === false) {
    return <button onClick={handleClick}>Info</button>;
  }
  if (isActive === true) {
    return (
      <>
        <button onClick={handleClick}>Information</button>
        <form action="/">
          {keys.map((key, index) => {
            return <input type="text" key={index} placeholder={key} />;
          })}
        </form>
      </>
    );
  }
}

export default Form;
