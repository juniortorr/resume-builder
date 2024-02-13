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
  return (
    <main className="main-container">
      <Sidebar
        generalInfo={generalInfo}
        education={education}
        setCurrentGeneral={setCurrentGeneral}
        currentGeneral={currentGeneral}
        setCurrentEducation={setCurrentEducation}
        currentEducation={currentEducation}
      />
      <section className="current-resume-container">
        <Resume currentGeneral={currentGeneral} currentEducation={currentEducation} />
      </section>
    </main>
  );
}

export default App;
