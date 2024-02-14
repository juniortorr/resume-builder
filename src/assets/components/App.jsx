import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Resume from './Resume';
import generalInfo from '../../data/general-info';
import education from '../../data/education';
import practicalExperience from '../../data/practical-experience';

function App() {
  const [currentGeneral, setCurrentGeneral] = useState(generalInfo);
  const [currentEducation, setCurrentEducation] = useState(education);
  const [currentExperience, setCurrentExperience] = useState(practicalExperience);
  return (
    <main className="main-container">
      <Sidebar
        generalInfo={generalInfo}
        education={education}
        setCurrentGeneral={setCurrentGeneral}
        currentGeneral={currentGeneral}
        setCurrentEducation={setCurrentEducation}
        currentEducation={currentEducation}
        currentExperience={currentExperience}
        setCurrentExperience={setCurrentExperience}
      />
      <section className="current-resume-container">
        <Resume
          currentGeneral={currentGeneral}
          currentEducation={currentEducation}
          currentExperience={currentExperience}
        />
      </section>
    </main>
  );
}

export default App;
