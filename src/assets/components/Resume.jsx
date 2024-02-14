import './Resume.css';

function Resume({ currentGeneral, currentEducation, currentExperience }) {
  return (
    <div className="resume">
      <div className="updated-general">
        <h2 className="general-heading">General Information</h2>
        <p>{currentGeneral.firstName}</p>
        <p>{currentGeneral.lastName}</p>
        <p>{currentGeneral.placeOfBirth}</p>
        <p>{currentGeneral.dateOfBirth}</p>
      </div>
      <div className="updated-education">
        <h2 className="education-heading">Education</h2>
        <p>{currentEducation.highestDegree}</p>
        <p>{currentEducation.highschool}</p>
      </div>
      <div className="updated-experience">
        <h2 className="experience-heading">Relevant Experience</h2>
        <p>{currentExperience.relevantInfo}</p>
      </div>
    </div>
  );
}

export default Resume;
