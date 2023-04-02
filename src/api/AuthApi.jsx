import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";
import { toast } from "react-toastify";
export const LoginApi = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
  return response;
  } catch (error) {
      return error;
  }
}

export const  RegisterApi = (email,password) => {

    try {
    let user = createUserWithEmailAndPassword(auth,email,password)
   console.log(user.email)
    } catch (error) {
        console.log(error)
    }

}

export const  googleApi = () => {
   try {
   let googleProvider = new GoogleAuthProvider()
   let res = signInWithPopup(auth,googleProvider) 
    return res;
  } catch (error) {
    return error;
   }
}


