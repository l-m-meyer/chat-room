import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { sendMessage } from "../../services/firebase";
import "./styles.css";

function MessageInput({ roomId }) {
  const { user } = useAuth();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(roomId, user, message);
    setMessage("");
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Enter a message"
        value={message}
        onChange={handleChange}
        className="message-input"
        required
        minLength={1}
      />
      <button
        type="submit"
        disabled={!message}
        className="send-message"
      >
        Send
      </button>
    </form>
  );
}

export { MessageInput };