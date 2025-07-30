import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

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
      <form className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        
         {!isSignInForm && <input
          type="text"
          placeholder="What do we call you?"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg "
        />}
        <input
          type="text"
          placeholder="Your Email"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg "
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
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
