import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import "./style.css";

export function Prompt({ open, onClose, onCreateClass, colors }) {
  const [name, setName] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [color, setColor] = useState(colors[0].hex);
  const changeName = (event) => {
    setName(event.target.value);
  };

  const pickColor = (value) => {
    setColor(value);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const onCreate = () => {
    const myRe = /^(?!\s*$).+/;
    if (!myRe.test(name)) {
      setOpenSnackbar(true);
    } else {
      onCreateClass(name, color);
    }
  };
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <div className="dialog">
          <TextField
            required
            onChange={changeName}
            defaultValue={name}
            id="standard-required"
            label="Input class name"
            variant="standard"
          />
          <div className="button">
            <Button variant="contained" onClick={onCreate}>
              Create
            </Button>
          </div>
          <div className="pick-content">
            <h4>Color</h4>

            <div
              style={{ backgroundColor: `${color}` }}
              className="color"
            ></div>
          </div>
          <h4>Pick colors</h4>
          <div className="color-picker">
            {colors.map((color) => (
              <div
                key={color.name}
                style={{ backgroundColor: `${color.hex}` }}
                className="color"
                onClick={() => pickColor(color.hex)}
              ></div>
            ))}
          </div>
        </div>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Class name is empty!!!"
        action={<Button onClick={() => setOpenSnackbar(false)}>OK</Button>}
      />
    </>
  );
}
