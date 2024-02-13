import Form from './Form';
function Sidebar({ setCurrentGeneral, currentGeneral, setCurrentEducation, currentEducation }) {
  return (
    <section className="sidebar">
      <Form setCurrent={setCurrentGeneral} name="General Information" current={currentGeneral} />
      <Form setCurrent={setCurrentEducation} current={currentEducation} name="Education" />
    </section>
  );
}

export default Sidebar;
