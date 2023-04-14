import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { RouterProvider } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";

function App() {
  // const [count, setCount] = useState(0);
  // const refname = useRef(null);
  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   const response = await axios.post("http://localhost:5000", {
  //     name: refname.current.value,
  //   });
  //   console.log(response.data);

  // };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
    {
      path: "/chats",
      element: <ChatPage></ChatPage>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
