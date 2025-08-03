import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constants.js";



const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrMsg] =useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

   const handleButtonClick = () => {
    //Validate form data
    const message =  checkValidData(
      // name.current.value,
      email.current.value, 
      password.current.value);
    setErrMsg(message);

    if (message) return;

    //signIn / Sign UP logic
    if (!isSignInForm) {
      // signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR,
          }).then(() => {
             const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email:email, displayName : displayName, photoURL: photoURL}));
            // Profile updated!
          }).catch((error) => {
            // An error occurred
            setErrMsg(error.errorMessage);
          });

          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errMsg);
        });

    } else {
      // sign In logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage)
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

 

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="BGimage"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        
         {!isSignInForm && <input ref={name}
          type="text"
          placeholder="What do we call you?"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg "
        />}
        <input ref={email}
          type="text"
          placeholder="Your Email"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg "
        />
        <input ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg "
        />
        <p className="text-red-500 text-lg py-3">{errMsg}</p>
        <button  onClick={handleButtonClick} className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "Are you new to Netflix? Sign Up now" : "Already a user? Sign In here!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
