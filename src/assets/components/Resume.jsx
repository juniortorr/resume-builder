import './Resume.css';

function Resume({ currentGeneral }) {
  return (
    <div className="resume">
      <div className="updated-general">
        <h2 className="general-heading">General Information</h2>
        <p>{currentGeneral.firstName}</p>
        <p>{currentGeneral.lastName}</p>
        <p>{currentGeneral.placeOfBirth}</p>
        <p>{currentGeneral.dateOfBirth}</p>
      </div>
      {/* <div className="updated-general">
        <h2 className="general-heading">General Information</h2>
        <p>{currentGeneral.firstName}</p>
        <p>{currentGeneral.lastName}</p>
        <p>{currentGeneral.placeOfBirth}</p>
        <p>{currentGeneral.dateOfBirth}</p>
      </div> */}
    </div>
  );
}

export default Resume;
