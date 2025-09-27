import { useState } from "react";

function AccordionIten({ index, item }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordionHandler = () => {
    setIsOpen((isOpen) => (isOpen = !isOpen));
  };

  return (
    <div
      className={`item ${isOpen && "open"}`}
      onClick={() => toggleAccordionHandler()}
    >
      <h1 className="number  ">{String(index + 1).padStart(2, "0")}</h1>

      <h1 className="title">{item.title}</h1>
      <span className="icon">{isOpen ? "-" : "+"}</span>
      <div className="content-box">
        {isOpen && <p className="text">{item.text} </p>}
      </div>
    </div>
  );
}

export default AccordionIten;
