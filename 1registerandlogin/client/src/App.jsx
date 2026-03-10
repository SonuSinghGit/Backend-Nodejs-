import React from "react";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <div>
      <h1 class="text-3xl font-bold text-center underline">welcome to our plateform</h1>
      <div className="mt-4 text-center">
         <Register/>
         <Login/>
      </div>
     
    </div>
  );
}

export default App;
