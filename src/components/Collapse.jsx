import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/Collapse.scss";

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`collapse ${open ? "open" : ""}`}>
      <div className="collapse-header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`collapse-arrow ${open ? "rotated" : ""}`}
        />
      </div>

      <div className="collapse-content">{content}</div>
    </div>
  );
}

export default Collapse;
