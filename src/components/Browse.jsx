import Header from "./Header";
import useNowPlayingMovies from "../../hooks/useNowPlayngMovies";
import MainConatiner from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainConatiner/>
      <SecondaryContainer/>
    </div>
  );  
};

export default Browse;