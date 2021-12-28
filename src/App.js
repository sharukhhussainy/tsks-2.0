import "./App.css";
import Collections from "./components/Collections/collections.component";
import NavBar from "./components/NavBar/navbar.component";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Collections />
    </div>
  );
}

export default App;
