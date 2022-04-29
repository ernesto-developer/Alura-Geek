import Swal from 'sweetalert2'

import { types } from "../types/types"
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { startLoading, finishLoading, setError } from "./ui";
import { changeUser } from './user';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(({ user }) => {
            dispatch(login(user.uid, user.displayName));
            dispatch(setError(null));
            dispatch(finishLoading());
            dispatch(changeUser(user.displayName));
            if(user.displayName !=='UserGuest'){document.getElementById('ButtonLogin').click();}
          })
          .catch((err) => {
            console.log(err + 'error desde login');
            dispatch(setError(err.message));
            dispatch(finishLoading());
            Swal.fire('Error', err.message, 'error');
            // document.getElementById('ButtonLogin').click();
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
        if(user.displayName !=='UserGuest'){document.getElementById('RegisterButton').click();}
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError(err.message));
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
        if(user.displayName !=='UserGuest'){document.getElementById('ButtonLogin').click();}
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
            dispatch(changeUser('UserGuest'));
        });
    };
}

export const logout = () => {
    return {
        type: types.logout,
    };
}

export const changeUserName = (uid, displayName) => ({
 
  type: types.changeUser,
  payload: {
    uid,
    displayName,
  }

});