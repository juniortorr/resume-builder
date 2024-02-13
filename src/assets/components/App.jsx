import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Resume from './Resume';
import generalInfo from '../../data/general-info';
import education from '../../data/education';

function App() {
  const [currentGeneral, setCurrentGeneral] = useState(generalInfo);
  return (
    <main className="main-container">
      <Sidebar
        generalInfo={generalInfo}
        education={education}
        setCurrentGeneral={setCurrentGeneral}
        currentGeneral={currentGeneral}
      />
      <section className="current-resume-container">
        <Resume currentGeneral={currentGeneral} />
      </section>
    </main>
  );
}

export default App;
