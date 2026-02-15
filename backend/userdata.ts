//https://firebase.google.com/docs/firestore/query-data/get-data#web_16



import { db } from "@/firebase/auth";
import { collection, getDocs } from "firebase/firestore";
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  
});