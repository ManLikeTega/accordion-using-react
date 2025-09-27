import AccordionIten from "./AccordionIten";

function Accordion({ list }) {
  return (
    <>
      <div className="accordion">
        {list.map((i) => (
          <AccordionIten
            index={list.indexOf(i)}
            item={i}
            key={list.indexOf(i)}
          />
        ))}
      </div>
    </>
  );
}

export default Accordion;
