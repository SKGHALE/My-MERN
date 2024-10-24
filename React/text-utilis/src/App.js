import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" contact="Contact" />
      <div className="container my-1">
        <TextForm heading="Fill This Form" />
      </div>
    </>
  );
}

export default App;
