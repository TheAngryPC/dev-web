function ListGroup() {
  let title = 'List'
  let items = ["One", "Two", "Three"];

  const getMessage = () => {
    if (items.length === 0) {
      return <p>No item found.</p>
    }
  }

  return (
  <>
    <h1 className="display-1">{title}</h1>
    {getMessage()}
    <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
  </>
  );
}

export default ListGroup;