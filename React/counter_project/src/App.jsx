import { useState } from "react";
import "./App.css";

function App() {
  //let counter = 15;
  let [counter, setCouneter] = useState(15); // The useState Hooks Use For State Changes
  const addValue = () => {
    //console.log("clicked", counter);

    //First Way To Do
    // counter = counter + 1;
    // setCouneter(counter);

    //Second Way To Do
    setCouneter(counter + 1);
  };

  // For Decrease The value
  const removeValue = () => {
    setCouneter(counter - 1);
  };

  return (
    <>
      <h1> Saheb Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}> Increase Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
