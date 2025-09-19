const restaurant = {
  id: 6,
  name: "Bella Bistro",
  address: "456 Oak Avenue, Portland, OR",
  phone: "555-6789",
  cuisine: "Italian",
  rating: 4.7,
  hours: {
    monday: "11:00 AM - 10:00 PM",
    tuesday: "11:00 AM - 10:00 PM",
    wednesday: "11:00 AM - 10:00 PM",
    thursday: "11:00 AM - 10:00 PM",
    friday: "11:00 AM - 11:00 PM",
    saturday: "11:00 AM - 11:00 PM",
    sunday: "12:00 PM - 9:00 PM",
  },
  menu: [
    { item: "Margherita Pizza", price: 13.99 },
    { item: "Penne Alfredo", price: 14.99 },
    { item: "Tiramisu", price: 6.99 },
  ],
};
const getData = async () => {
  const res = await fetch("http://localhost:3000/restaurants");
  const data = await res.json();
  console.log(data);
};
getData();

const postData = async () => {
  const res = await fetch("http://localhost:3000/restaurants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(restaurant),
  });
  console.log(res.body);
  const data = await res.json();
  console.log(data);
  getData();
};
postData();
