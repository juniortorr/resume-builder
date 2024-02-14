import Form from './Form';
function Sidebar({
  setCurrentGeneral,
  currentGeneral,
  setCurrentEducation,
  currentEducation,
  setCurrentExperience,
  currentExperience,
}) {
  return (
    <section className="sidebar">
      <Form setCurrent={setCurrentGeneral} name="General Information" current={currentGeneral} />
      <Form setCurrent={setCurrentEducation} current={currentEducation} name="Education" />
      <Form
        setCurrent={setCurrentExperience}
        current={currentExperience}
        name="Relevant Experience"
      />
    </section>
  );
}

export default Sidebar;
