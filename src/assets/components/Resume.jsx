function Resume({ currentGeneral }) {
  return (
    <div className="updated-general">
      <p>{currentGeneral.firstName}</p>
      <p>{currentGeneral.lastName}</p>
      <p>{currentGeneral.placeOfBirth}</p>
      <p>{currentGeneral.dateOfBirth}</p>
    </div>
  );
}

export default Resume;
