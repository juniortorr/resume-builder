import Form from './Form';
function Sidebar({ generalInfo, setCurrentGeneral, currentGeneral }) {
  return (
    <section className="sidebar">
      <Form
        info={generalInfo}
        setCurrentGeneral={setCurrentGeneral}
        name="General Information"
        currentGeneral={currentGeneral}
      />
      {/* <Form info={education} name="Education" /> */}
    </section>
  );
}

export default Sidebar;
