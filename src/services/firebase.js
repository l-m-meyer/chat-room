import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0neU_DLfDDzApm9JFNZM42iOX0baeb-g",
  authDomain: "chat-room-328a4.firebaseapp.com",
  projectId: "chat-room-328a4",
  storageBucket: "chat-room-328a4.appspot.com",
  messagingSenderId: "872510094641",
  appId: "1:872510094641:web:79656a74599f025d148410"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const { user } = await signInWithPopup(auth, provider);

    return {
      uid: user.uid,
      displayName: user.displayName
    };
  } catch (error) {
    if (error.code !== "auth/cancelled-popup-request") {
      console.error(error);
    }
    return null;
  }
}

async function sendMessage(roomId, user, text) {
  try {
    await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
      uid: user.uid,
      displayName: user.displayName,
      text: text.trim(),
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
}

export { loginWithGoogle, sendMessage };