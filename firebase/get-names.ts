import { SearchUser, User } from "@/app/constants";
import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./auth";

export const getNamesThatStartWith = async (
  input: string,
): Promise<SearchUser[] | undefined> => {
  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("no user signed in");
    return;
  }

  try {
    let userList: SearchUser[] = [];
    const inputLower = input.toLowerCase();
    const q = query(
      collection(db, "users"),
      where("usernameLower", ">=", inputLower),
      where("usernameLower", "<=", inputLower + "\uf8ff"),
    );
    const querySnap = await getDocs(q);

    querySnap.forEach((user) => {
      const userData = user.data();
      const userItem: SearchUser = {
        uid: userData.uid,
        username: userData.username,
        usernameLower: userData.usernameLower,
        photo: userData.photo,
      };

      userList.push(userItem);
    });

    return userList;
  } catch (error: any) {
    console.error("error obtaining user list.", error.code, error.messege);
  }
};
