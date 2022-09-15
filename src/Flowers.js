import React, { useState } from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  ButtonGroup
} from "@mui/material";

import "./index.css";
import { flowers } from "./flowers.json";

export default function () {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        {flowers.map((flower, i) => {
          return (
            <Button
              onMouseEnter={() => setActiveTab(i)}
              key={i}
              className="btn"
            >
              {flower.name}
            </Button>
          );
        })}
      </ButtonGroup>
      <Card className="card" sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          alt="rose"
          height="140"
          image={`img/${flowers[activeTab].name}.jpg`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {flowers[activeTab].name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {flowers[activeTab].desc}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
