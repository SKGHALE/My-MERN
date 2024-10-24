import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-400 text-red-600 p-4 rounded-xl mb-4">
        <h1>Saheb Kumar Ghale</h1>
      </div>
      <Card username="Saheb" btnText="Click Here" />
      <Card username="Sayatani" />
    </>
  );
}

export default App;
