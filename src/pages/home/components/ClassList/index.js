import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { colorJSON } from "resources/color";
import { sendGet, sendPost } from "services/api";
import { Loading } from "share/components";
import { Prompt } from "../Prompt";
import "./style.css";

export function ClassList({ openPrompt, togglePrompt }) {
  const [classes, setClasses] = useState([]);

  const [loading, setLoading] = useState(false);

  const onClose = () => {
    togglePrompt();
  };

  const onCreateClass = async (name, color) => {
    togglePrompt();
    setLoading(true);
    addClass(name, color);
    onClose();
  };

  const getResource = async () => {
    const data = await sendGet("/classes");
    setClasses(data);
  };

  const addClass = async (name, color) => {
    const isOk = await sendPost("/classes", { name: name, color: color });
    if (!isOk) {
      alert("An error ocurr!!!");
    }
    await getResource();
    setLoading(false);
  };

  useEffect(() => {
    getResource();
  }, []);

  return (
    <div className="class-list">
      {classes.map((item) => {
        return (
          <Card key={item._id} sx={{ width: 345 }}>
            <CardContent>
              <div
                style={{ backgroundColor: `${item.color}` }}
                className="class-color"
              >
                <h3 className="class-name">{item.name}</h3>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">VIEW CLASS</Button>
            </CardActions>
          </Card>
        );
      })}
      <Prompt
        colors={colorJSON}
        open={openPrompt}
        onClose={onClose}
        onCreateClass={onCreateClass}
      />
      <Loading open={loading} />
    </div>
  );
}
