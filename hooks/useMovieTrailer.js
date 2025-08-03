import { API_OPTIONS } from "../src/utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../src/utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) =>{

    const dispatch = useDispatch();

     // fetching trailer and updating store with fetched trailer
    const getMovieVideos = async () => {

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
      API_OPTIONS
    );
 
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer;