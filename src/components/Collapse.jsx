import { useState } from "react";
import arrowDown from "../assets/arrow-down.png";
import arrowUp from "../assets/arrow-up.png";
import "../styles/Collapse.scss";



function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`collapse ${open ? "open" : ""}`}>
      <div className="collapse-header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <img
          src={open ? arrowUp : arrowDown}
          alt={open ? "Flèche vers le haut" : "Flèche vers le bas"}
          className="collapse-arrow"
        />
      </div>
      {open && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
