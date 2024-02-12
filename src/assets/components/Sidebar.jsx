import Form from './Form';
function Sidebar({ generalInfo }) {
  return (
    <section className="sidebar">
      <Form info={generalInfo} />
      {/* <Form name="Education" />
      <Form name="I forgot" /> */}
    </section>
  );
}

export default Sidebar;
