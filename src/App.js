import "./App.css";
import Collections from "./components/Collections/collections.component";
import NavBar from "./components/NavBar/navbar.component";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="sub-container">
        <Collections />
      </div>
    </div>
  );
}

export default App;
