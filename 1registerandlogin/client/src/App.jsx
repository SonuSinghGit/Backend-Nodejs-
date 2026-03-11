import React from "react";
import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <h1 class="text-3xl font-bold text-center underline">welcome to our plateform</h1>
      <div className="mt-4 text-center">
        <button className="bg-blue-500 hover:bg-amber-300 text-white px-4 py-2 rounded-md">
          <Link to="/register">Register</Link>
        </button>
        <button className="ml-4 bg-blue-500 hover:bg-amber-300 text-white px-4 py-2 rounded-md">
          <Link to="/login">Login</Link>
        </button>
      </div>
     
    </div>
  );
}

export default App;
