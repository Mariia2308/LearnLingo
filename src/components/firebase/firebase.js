import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

// const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
// const AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN;
// const APP_ID = process.env.REACT_APP_APP_ID;
// const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
// const MESSEGING_SENDER_ID = process.env.REACT_APP_MESSEGING_SENDER_ID;
// const DATABASE_URL = process.env.REACT_APP_DATABASE_URL;
// const STORAGE_BUCKET = process.env.REACT_APP_STORAGE_BUCKET;

export const FIREBASE_API_KEY = "AIzaSyBIrLf7cUTgcE29inhKEK67xZ8yaoVV3Gg";
export const AUTH_DOMAIN = "learnlingo-acbd2.firebaseapp.com";
export const APP_ID = "1:155307303460:web:3e97d1f55774c322962eb1";
export const PROJECT_ID = "learnlingo-acbd2";
export const MESSEGING_SENDER_ID = "155307303460";
export const DATABASE_URL =
  "https://learnlingo-acbd2-default-rtdb.europe-west1.firebasedatabase.app";
export const STORAGE_BUCKET = "learnlingo-acbd2.appspot.com";

const firebaseConfig = {
  apiKey: "AIzaSyBIrLf7cUTgcE29inhKEK67xZ8yaoVV3Gg",
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSEGING_SENDER_ID,
  appId: APP_ID,
};

export const login = async (email, password) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials.user;
  } catch (error) {
    throw error;
  }
};

export const register = async (email, password) => {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return credentials.user;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  await signOut(auth);
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
