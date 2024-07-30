function ButtonGroup() {
  let bsClass = 'list-group-item list-group-item-action'
  let title = 'List'
  let items = ["One", "Two", "Three"];

  const getMessage = () => {
    if (items.length === 0) {
      return <p>No item found.</p>
    }
  }

  return (
  <div className="list-group">
    <h1 className="display-1">{title}</h1>
    {getMessage()}
    {items.map(item => <button type="button" className={bsClass}>{item}</button>)}
  </div>
  );
}

export default ButtonGroup;