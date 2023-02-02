import "./App.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  /**
   * QUESTION 1
   * Giving an API endpoint: https://jsonplaceholder.typicode.com/posts.
      Use JavaScript or TypeScript to write a function that fetches data from this API endpoint.
      Use JavaScript or TypeScript to write a function that creates a new post using this API endpoint.
      (Optional) Create a UI that has 2 buttons: “Fetch” and “Create” that execute the two functions above.
   */
  const [data, setData] = useState(null);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const newData = await res.json();
    if (data) {
      setData(data);
    } else {
      setData(newData);
    }
  };

  const createNewPost = async (title, body) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
    const newData = await res.json();
    setData([newData, ...data]);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (e) => {
    setBody(e.target.value);
  };

  /**
   * Question 2
      Using object-oriented programming to create a Stack class and its methods: find, push, pop, size, and isEmpty.
   */
  console.log("Question 2:");
  class Stack {
    constructor() {
      this.items = [];
    }

    push(element) {
      this.items.push(element);
    }

    pop() {
      return this.items.pop();
    }

    find(element) {
      return this.items.indexOf(element);
    }

    size() {
      return this.items.length;
    }

    isEmpty() {
      return this.items.length === 0;
    }
  }

  const newStack = new Stack();
  newStack.push("PhiDuong");
  newStack.push(19062000);
  console.log("Array", newStack);
  console.log("Find: ", newStack.find(19062000));
  console.log("Size: ", newStack.size());
  console.log("Pop: ", newStack.pop());
  console.log("isEmpty: ", newStack.isEmpty());

  /**
   * Question 3
    How would you optimize this code to follow clean code principles and best practices in terms of naming conventions, readability, maintainability, and functionality?
   */

  // If the number of arguments to the function is unknown.
  console.log("")
  console.log("Question 3:");
  const sumValue = (...args) => {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
      result += args[i];
    }
    return result;
  };

  const calculateValue = (isDouble, ...args) => {
    let result = sumValue(...args);
    if (isDouble) result *= 2;
    console.log("Calculate: ", result);
    return result;
  };

  calculateValue(true, 2, 3);

  // If the number of arguments to the function is specified.
  const sumBetween = (startPoint, endPoint) => startPoint + endPoint;
  const calculateWithSumBetween = (startPoint, endPoint, isDouble) => {
    let result = sumBetween(startPoint, endPoint);
    if (isDouble) result *= 2;
    console.log("Calculate with SumBetween: ", result);
    return result;
  };
  calculateWithSumBetween(5, 7, true);

  return (
    <div className="App">
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        onChange={titleHandler}
      />
      <TextField
        id="outlined-basic"
        label="Body"
        variant="outlined"
        onChange={bodyHandler}
      />
      <div>
        <Button variant="outlined" onClick={fetchData}>
          FETCH
        </Button>
        <Button variant="outlined" onClick={() => createNewPost(title, body)}>
          CREATE
        </Button>
      </div>
      <ul>
        {data?.map((d, index) => (
          <li key={index}>
            <span style={{ display: "block", fontWeight: "700" }}>
              Title: {d.title}
            </span>
            <span>Body: {d.body}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
