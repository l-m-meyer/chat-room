import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from '../Landing';
import { ChatRoom } from '../ChatRoom';
import { useAuth } from '../../hooks/useAuth';
import './styles.css';

function AuthenticatedApp() {
  const { logout } = useAuth();
  return (
    <BrowserRouter>
      <button
        onClick={() => logout()}
        className="logout"
      >
        Logout
      </button>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room/:id" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AuthenticatedApp };