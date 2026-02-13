//<> are Fragments, which help combine multiple elements together
function ListGroup() {
  const items = ["Test1", "Test2", "Test3", "Last"];

  if (items.length === 0)
    <>
      <h1>List</h1>return <p>Empty List</p>;
    </>;

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
