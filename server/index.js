import express  from 'express'
import cors from 'cors'
import {restaurants} from './data.js'
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json()); 



app.get('/restaurants', (req, res) => {
  res.json(restaurants);
});


app.post('/restaurants', (req, res) => {
  const newRestaurant = {
    id: restaurants.length + 1,
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    cuisine: req.body.cuisine,
    rating: req.body.rating,
    hours:req.body.hours,
    menu: req.body.menu
  };

  restaurants.push(newRestaurant);
  res.status(201).json(newRestaurant);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});