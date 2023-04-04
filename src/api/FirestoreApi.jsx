import { toast } from "react-toastify";
import { db, auth } from "../Firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const docRef = collection(db, "posts");
const useRef = collection(db, "users",);

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
  const q = query(docRef, orderBy("timeStamp"));
  onSnapshot(q, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const postUserData =(object) => {
  addDoc(useRef, object)
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });
};

export const getCurrentUser = (setCurrentUser) => {
  onSnapshot(useRef, (response) => {
    setCurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
        .filter((item) => {
          return item.email === localStorage.getItem("userEmail");
        })[0]
    );
  });
};
