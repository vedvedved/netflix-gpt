import Header from "./Header";
import useNowPlayingMovies from "../../hooks/useNowPlayngMovies";
import MainConatiner from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      <MainConatiner/>
      <SecondaryContainer/>
    </div>
  );  
};

export default Browse;