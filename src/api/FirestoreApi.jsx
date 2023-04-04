import { toast } from "react-toastify";
import { db, auth } from "../Firebase";
import { addDoc, collection, doc } from "firebase/firestore";

const docRef = collection(db, "posts");

export const PostStatus = (status) => {
  let obj = {
    status: status,
  };
  addDoc(docRef, obj)
    .then(() => {
      toast.success("Post Updated ");
    })
    .catch((error) => {
      toast.error("Not updated");
    });
};
