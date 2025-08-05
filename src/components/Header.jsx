import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store =>store.gpt.showGptSearch);
  const selectedLang = useSelector (store=> store.config.lang)

  const handleSinOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // toggle Gpt Search component
    dispatch(toggleGptSearchView());
  };

  const handleLangChange =(e) => {
      dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-90 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:ml-0" src={LOGO} alt="Logo" />

      {user && (
        <div className="flex p-2 justify-between">
        { showGptSearch && <select className="py-2  px-4 m-2 bg-gray-900 text-white" value={selectedLang} onChange={handleLangChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>               
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            className="py-2 px-4 my-2 mx-4 bg-purple-900 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
           {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img className="hidden md:block w-12 h-12" alt="userImage" src={user?.photoURL} />
          <button
            onClick={handleSinOut}
            className="font-bold text-white text-lg"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
