import { useState } from "react";

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span>{open ? "▲" : "▼"}</span>
      </div>
      {open && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
