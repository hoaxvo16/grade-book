import { useState } from "react";
import { SideBar, ClassList } from "./components";

export function HomePage() {
  const [open, setOpen] = useState(false);

  const togglePrompt = () => {
    setOpen(!open);
  };
  return (
    <div>
      <SideBar onCreate={togglePrompt} />
      <div className="class-list">
        <ClassList openPrompt={open} togglePrompt={togglePrompt} />
      </div>
    </div>
  );
}
