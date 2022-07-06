import { AuthenticatedApp } from "./components/AuthenticatedApp";
import { UnathenticatedApp } from "./components/UnathenticatedApp";
import { useAuth } from "./hooks/useAuth";
import './App.css';

function App() {
  const { user } = useAuth();

  return (
    <div className="container">
      <h1>💬 Chat Room</h1>
      {user ? <AuthenticatedApp /> : <UnathenticatedApp />}
    </div>
  );
}

export default App;
