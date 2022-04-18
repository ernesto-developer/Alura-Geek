import Swal from 'sweetalert2'

import { types } from "../types/types"
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { startLoading, finishLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(({ user }) => {
            dispatch(login(user.uid, user.displayName));
            dispatch(finishLoading());
          })
          .catch((err) => {
            console.log(err + 'error desde login');
            dispatch(finishLoading());
            Swal.fire('Error', err.message, 'error');
          });
      };
};

export const startRegisterWithEmailPasswordName = (name, email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", err.message, 'error');
      });
  };
};



export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};



export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const startLogout = () => {
    return async (dispatch) => {
        await firebase
        .auth()
        .signOut()
        .then(() => {
            dispatch(logout());
        });
    };
}

export const logout = () => {
    return {
        type: types.logout,
    };
}