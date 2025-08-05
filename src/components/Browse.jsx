import Header from "./Header";
import useNowPlayingMovies from "../../hooks/useNowPlayngMovies";
import MainConatiner from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header/>
      {showGptSearch ? ( <GptSearch/>) : (
        <>
           <MainConatiner/>
           <SecondaryContainer/>
        </>
      )}     
     
    </div>
  );  
};

export default Browse;