// import { MouseEvent } from "react";
import { useState } from "react";

interface ButtonGroupProps {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

function ButtonGroup({ items, title, onSelectItem }: ButtonGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    if (items.length === 0) {
      return <p>No item found.</p>;
    }
  };

  // const logEvent = (event: MouseEvent) => {
  //   console.log(event);
  // };

  const getButton = () => {
    if (items.length > 0) {
      return items.map((item, index) => (
        <button
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          key={items.indexOf(item)}
          type="button"
          onClick={() => {
            setSelectedIndex(index);
            onSelectItem(item);
          }}
        >
          {item}
        </button>
      ));
    }
  };

  return (
    <div className="list-group">
      <h1 className="display-1">{title}</h1>
      {getMessage()}
      {getButton()}
    </div>
  );
}

export default ButtonGroup;
