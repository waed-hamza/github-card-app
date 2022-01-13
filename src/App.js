import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import CardsList from "./components/CardsList/CardsList";

function App() {
  const [profiles, setProfiles] = useState([]);

  const handleSubmit = (profile) => {
    setProfiles([...profiles, profile]);
  };

  return (
    <div className="App">
      <h1>The GitHub Cards App</h1>
      <Form onSubmit={handleSubmit} />
      <CardsList profiles={profiles} />
    </div>
  );
}

export default App;
