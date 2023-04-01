import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
export const LoginApi = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    console.log(response)
  } catch (error) {
    alert(error, "Not solved");
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
