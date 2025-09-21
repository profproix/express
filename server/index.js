import express from "express";
import cors from "cors";
import { restaurants } from "./data.js";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get("/restaurants", (req, res) => {
  res.json(restaurants);
});

app.get("/restaurants/:id", (req, res) => {
  const restaurantId = parseInt(req.params.id, 10);
  //Finds the restraunt using the .find method, .filter would work here too.
  // .find is similar to .filter but it stops at the first resource that matches the condition
  const restaurant = restaurants.find((r) => r.id === restaurantId);

  //If the resource doesn't exsist we want to send a 404 status code to our user
  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404).json({ error: "Resource not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
