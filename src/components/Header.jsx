import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {

  const navigate = useNavigate();
  const user =useSelector(store => store.user);
  const dispatch = useDispatch();

  const handleSinOut =() =>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect (()=>{
          const unsubscribe = onAuthStateChanged(auth, (user) => {
              if (user) {              
                const {uid, email, displayName, photoURL} = user;
                  dispatch(addUser({uid: uid, email:email,displayName : displayName, photoURL: photoURL}));
                  navigate("/browse");              
              } else {
                  dispatch (removeUser());       
                  navigate("/");
              }
              });

            
              //unsubscribe when component unmounts
            return () => unsubscribe();
      }, [])

 return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-90 flex justify-between">
      <img 
      className="w-44"
      src={LOGO}
      alt= "Logo"/>
    
   { user && (<div className="flex p-2">
      <img className = " w-12 h-12"alt = "userImage" src={user?.photoURL}/>
      <button onClick={handleSinOut} className="font-bold text-white text-lg">(Sign Out)</button>
    </div>)}

    </div>
 );
};


export default Header;