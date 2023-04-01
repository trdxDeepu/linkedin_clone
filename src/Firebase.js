import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFRxviPnNtxx6GYN_b00XnpIFW_Eq2gTs",
  authDomain: "linkedin-clone-79233.firebaseapp.com",
  projectId: "linkedin-clone-79233",
  storageBucket: "linkedin-clone-79233.appspot.com",
  messagingSenderId: "807489038666",
  appId: "1:807489038666:web:27f7f68f2ed3306c0b39b3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
