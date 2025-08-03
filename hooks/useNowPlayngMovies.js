import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../src/utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../src/utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  //fetch data from tmdb api and update store
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
