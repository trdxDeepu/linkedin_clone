import { toast } from "react-toastify";
import { db, auth } from "../Firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  doc,
  where
} from "firebase/firestore";

const docRef = collection(db, "posts");
const useRef = collection(db, "users");
// console.log(useRef)

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


export const getSingleStatus = (setAllStatus, id) => {
  const singlePostQuery = query(docRef, where("userID", "==", id));
  onSnapshot(singlePostQuery, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

export const getSingleUser = (setCurrentUser, email) => {
  const singleUserQuery = query(useRef, where("email", "==", email));
  onSnapshot(singleUserQuery, (response) => {
    setCurrentUser(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })[0]
    );
  });
};


export const postUserData = (object) => {
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

export const editProfile  = async (userID, payload) => {
  const userToEdit = doc(useRef,userID);

  try {
    await updateDoc(userToEdit, payload);
    console.log("Profile has been updated successfully");
    toast.success("Profile has been updated successfully");
  } catch (err) {
    console.log(err);
  }
};
