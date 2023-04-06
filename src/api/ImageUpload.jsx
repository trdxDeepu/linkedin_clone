import { storage } from "../Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { editProfile } from "./FirestoreApi";

export const uploadImage = (file,id) => {
    const profilePicsRef = ref(storage, `profileImages/${file.name}`);
    const uploadTask = uploadBytesResumable(profilePicsRef, file);
  
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
  
     setImageLink(progress)
      },
      (error) => {
        console.error(err);
      },() => {
    getDownloadURL(uploadTask.snapshot.ref)
    .then((response)=> {
        editProfile(id,{imageLink:response});
    })
  });
};
