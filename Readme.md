# Express API

## Learning Goals

- [ ] **Understand the request response cycle**
- [ ] **Recall HTTP Requests and VERBS**
- [ ] **Configure an express server**
- [ ] **Configure an express cors**
- [ ] **Create a GET Route that returns data to the front end**
- [ ] **Create a GET one route with dynamic parameters**

## The Request-Response Cycle

Client-server architecture is widely used in modern software development. In this model, a client application, such as a web browser on a phone, sends a request to a backend server. The server processes the request and sends a response back to the client.

## HTTP Requests (Hypertext Transfer Protocol)

HTTP is a protocol for transferring data over the web in a client–server model. It’s language-agnostic, meaning it works with many different programming languages.

Think of it like sending a letter back and forth between your computer and a server. Just as a letter has stamps, an address, and a return address, an HTTP request has key parts that help it do its job. Here are some of the most important:

- **Request URL**: The “address” of the request—where it’s being sent.
- **HTTP headers**: Extra information (metadata) that accompanies the request or response.
- **HTTP methods (verbs)**: Indicate the purpose of the request, whether you’re reading data, creating new data, updating existing data, or deleting data.
- **HTTP status codes**: Show the outcome of the request—whether it succeeded or failed. A common example you may already know is **404**, which means the requested resource was not found.

Find more info on [HTTP in the MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)

## HTTP Method

As mentioned above, the HTTP method determines what action the request is asking the server to perform.

| HTTP Verb | Description                                  | Example Use Case                               |
| --------- | -------------------------------------------- | ---------------------------------------------- |
| GET       | Retrieve data from the server                | Fetching a list of restaurants                 |
| POST      | Send data to the server to create a resource | Adding a new restaurant to the database        |
| PUT       | Update an existing resource entirely         | Updating the details of an existing restaurant |
| PATCH     | Partially update an existing resource        | Changing a restaurant's hours of operation     |
| DELETE    | Remove a resource from the server            | Deleting a restaurant from the database        |

## JSON

JavaScript Object Notation (JSON) is the format used to transfer data across the web.  
It’s technically plain text, which makes it lightweight and perfect for sending data quickly.

JSON looks very similar to JavaScript object literals, but **all keys must be strings**.

```
{"name": "rose", "age": 14}
```

## Lab Deliverables

1. Configure express

- Import `restaurants` from `data.js`.
- Invoke `express` and assign it to a variable called `app`.
- Create a variable called `port` and set it to `3000`.
- Call `app.use` and pass it `cors()` to enable cross-origin requests.
  - CORS is a security feature that typically prevents communication between servers and clients on different domains. Here, we’re allowing this communication.
- Call `app.use` and pass it `express.json()`. This middleware parses incoming JSON requests and converts them into JavaScript objects.
- Leave some blank space for additional code to be added later.
- Call `app.listen`, passing the `port` variable and a callback function.
- In the callback, create a `console.log` that says `Server running on http://localhost:${port}`.

<details>
  <summary>Click Here to view solution</summary>

```

import express  from 'express'
import cors from 'cors'
import {restaurants} from './data.js'
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());


//Leave space here for more code


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


```

</details>

2. Create a GET request that will send data to the server.

- Call `app.get` below `app.use(express.json());`, passing it the string `'/restaurants'` and a callback function with parameters `req` and `res`.
- Inside the callback function, invoke and return `res.json()`, passing the `restaurants` variable as a parameter.
- Run the server using `npm run server`. This script is already set up in `package.json` and will start the server for you.
- We are using `nodemon`, which automatically restarts the server when changes are made. However, if you encounter bugs, you may need to stop the server manually using `cmd + c` (on macOS) or `ctrl + c` (on Windows/Linux).
- Run the live server and check the browser's developer console for the data.
- **Note**: The src/index.js file contains the code for making requests to the server. When a response is received, it logs the data to the console.

<details>
  <summary>Click Here to view solution</summary>

```
//This will go in the space you left in the middle of your code.

app.get('/restaurants', (req, res) => {
  res.json(restaurants);
});


```

</details>

3. Create a **GET** request with a dynamic parameter to fetch a single restaurant by its ID.

- Call `app.get` below `app.use(express.json());`, passing it the string `'/restaurants/:id'` and a callback function with parameters `req` and `res`.
- Inside the callback, use `req.params.id` to access the dynamic value from the URL.
- Find the restaurant whose `id` matches `req.params.id`.
- If found, return it with `res.json()`. If not, return a **404** status and an error message.
- Test the endpoint by visiting a URL such as `http://localhost:3000/restaurants/1` in the browser

<details>
  <summary>Click Here to view solution</summary>

```

app.get('/restaurants/:id', (req, res) => {
  const restaurantId = parseInt(req.params.id, 10);
  //Finds the restraunt using the .find method, .filter would work here too.
  // .find is similar to .filter but it stops at the first resource that matches the condition
  const restaurant = restaurants.find(r => r.id === restaurantId);

  //If the resource doesn't exsist we want to send a 404 status code to our user
  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404).json({ error: 'Resource not found' });
  }
});

```

</details>

4. Close down your server by hitting `cmd + c` (on macOS) or `ctrl + c` (on Windows/Linux)

## Submission Instructions

1. Push your code to GitHub.
2. Submit the link to your GitHub repository URL.
