import { defineStore } from "pinia";
import { getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
const auth = getAuth(getApp());
export const useUserStore = defineStore("user", {
  state: () => ({
    email: null,
    accessToken: null,
    displayName: null,
    photoURL: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.accessToken,
    getProfile: (state) => {
      return {
        email: state.email,
        displayName: state.displayName,
        photoURL: state.photoURL,
      };
    }
  },
  actions: {
    async register(user) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        this.email = userCredential.user.email;
        this.accessToken = userCredential.user.accessToken;
      } catch (error) {
        console.log(error);
      }
    },
    async auth (user) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        this.email = userCredential.user.email;
        this.accessToken = userCredential.user.accessToken;
      } catch (error) {
        console.log(error);
      }
    },
    async authWithGoogle(){
      try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        this.email = userCredential.user.email;
        this.accessToken = userCredential.user.accessToken;
        this.displayName = userCredential.user.displayName;
        this.photoURL = userCredential.user.photoURL;

        console.log(userCredential.user)

      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      try {
        await signOut(auth);
        this.email = null;
        this.accessToken = null;
        this.displayName = null;
        this.photoURL = null;   
      } catch (error) {
        console.log(error);
      }
    },
  },
});