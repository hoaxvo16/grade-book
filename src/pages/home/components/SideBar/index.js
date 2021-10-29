import AddBoxIcon from "@mui/icons-material/AddBox";
import ClassIcon from "@mui/icons-material/Class";
import "./style.css";

export function SideBar({ onCreate }) {
  return (
    <div className="side-bar">
      <div className="logo">
        <ClassIcon htmlColor="#0277BD" />
        <h4>Gradebook</h4>
      </div>

      <AddBoxIcon onClick={onCreate} />
    </div>
  );
}
