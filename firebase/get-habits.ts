// import { Habit } from "@/app/constants";
// import { getAuth } from "firebase/auth";
// import { collection, doc, getDocs } from "firebase/firestore";
// import { db } from "./auth";

// export const getHabits = async () : Promise<Habit[] | undefined> => {
//   // get current user
//   const auth = getAuth();
//   const user = auth.currentUser;

//   if (!user) {
//     console.log("no user signed in")
//     return 
//   }

//   try {
//     const habitRef = collection(db, "users", user.uid, "habits");
//     const habitSnap = await getDocs(habitRef);
    
//   }
// }