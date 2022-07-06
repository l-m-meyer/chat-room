import { useAuth } from "./hooks/useAuth";
import './App.css';

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
    </div>
  );
}

export default App;
