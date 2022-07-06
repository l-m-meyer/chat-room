import { initalizeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0neU_DLfDDzApm9JFNZM42iOX0baeb-g",
  authDomain: "chat-room-328a4.firebaseapp.com",
  projectId: "chat-room-328a4",
  storageBucket: "chat-room-328a4.appspot.com",
  messagingSenderId: "872510094641",
  appId: "1:872510094641:web:79656a74599f025d148410"
};

const app = initalizeApp(firebaseConfig);

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

export { loginWithGoogle };