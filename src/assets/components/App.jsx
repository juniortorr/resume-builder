import './App.css';
import Sidebar from './Sidebar';
import generalInfo from '../../data/general-info';

function App() {
  return (
    <main className="main-container">
      <Sidebar generalInfo={generalInfo} />
      <section className="current-resume-container">
        <div className="updated-fields"></div>
      </section>
    </main>
  );
}

export default App;
