import { MouseEvent } from "react";

function ButtonGroup() {
  let bsClass = 'list-group-item list-group-item-action'
  let title = 'List'
  let items = ["One", "Two", "Three"];

  const getMessage = () => {
    if (items.length === 0) {
      return <p>No item found.</p>
    }
  }

  const logEvent = (event: MouseEvent) => {
    console.log(event)
  };
  

  const getButton = () => {
    if (items.length > 0) {
      return items.map(item => <button className={bsClass} key={items.indexOf(item)} type="button" onClick={logEvent}>{item}</button>)
    }
  }

  return (
  <div className="list-group">
    <h1 className="display-1">{title}</h1>
    {getMessage()} 
    {getButton()}
  </div>
  );
}

export default ButtonGroup;