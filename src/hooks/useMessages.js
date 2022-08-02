import { useEffect, useState } from "react";
import {
  getMessages
} from "../services/firebase";

function useMessages(roomId) {
  const [messages, setMessages] = useState([]);

  // fetch messages with getMessages() and unsubscribes the listener when the effect cleans up
  useEffect(() => {
    const unsubscribe = getMessages(roomId, setMessages);
    return unsubscribe;
  }, [roomId]);

  return messages;
}

export { useMessages };