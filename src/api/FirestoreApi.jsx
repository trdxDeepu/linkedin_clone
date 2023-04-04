import { toast } from "react-toastify";
import { db, auth } from "../Firebase";
import { addDoc, collection, onSnapshot} from "firebase/firestore";


const docRef = collection(db, "posts");
const useRef = collection(db,"users")

export const PostStatus = (object) => {
 
  addDoc(docRef, object)
    .then(() => {
      toast.success("Post Updated ");
    })
    .catch((error) => {
      toast.error("Not updated");
    });
};

export const getStatus = (setAllStatus) => {

  onSnapshot(docRef,(response)=> {
   setAllStatus(response.docs.map((doc)=>{
        return{...doc.data(),id:doc.id};
    }))
  })

}

export const postUserData = (object) => {

  addDoc(useRef,object ).then(()=>{})
  .catch((error)=>{
    console.log(error)
  })

}
