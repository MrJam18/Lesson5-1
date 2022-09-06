// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB9BjPlRKhq4-k8pID-fXAe4WnB33dyDKE",
  authDomain: "react-5ff49.firebaseapp.com",
  databaseURL: "https://react-5ff49-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-5ff49",
  storageBucket: "react-5ff49.appspot.com",
  messagingSenderId: "488828719977",
  appId: "1:488828719977:web:d48fe5e97833197643a3f8",
  measurementId: "G-X27ZMGRPF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const auth = getAuth(app);

export const signUp = async (email, pass) => {
   await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
  await signOut(auth);
};

export const profileRef = ref(db, "profile");
export const userNameRef = ref(db, "profile/name");
export const userShowNameRef = ref(db, "user/showData");
export const chatListRef = ref(db, 'chatList');
export const chatsRef = ref(db, "chats");
export const messageListRef = ref(db, "messageList");
export const getChatRefById = (id) => ref(db, `chatList/${id}`);
export const getMsgsRefById = (chatId) => ref(db, `messageList/${chatId}`);
// export const getMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);