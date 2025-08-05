import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchInput = useRef(null);
    const dispatch = useDispatch();


    //search movie in TMDB database
    const searchMovieTMDB = async(movie)=>{
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        //make api call to openAI and get movie results

        // const gptQuery = ""

        //  const gptResults =  await openai.responses.create({
        // model: 'gpt-3.5-turbo',
        // instructions: 'Act as a movie recommedation system and suggest some movies for user input. Give me only top 5 movie names and tehy should be comma separated like the example result given ahead. Example Result : Gadar, Sholay, Don, Gunday, Koi Mil Gaya',
        // input: searchInput.current.value,
        // });
        // console.log(gptResults.output_text);

        //TO-DO
        //error handling
        // if (!gptResults.output_text) {error handling}

        // gptResults.output_text[0]?.message?.content = "Gadar, Sholay, Don, Gunday, Koi Mil Gaya"

        const workAround = "Gadar, Sholay, Don, Gunday, Koi Mil Gaya"
        const gptMovies = workAround.split(",");

        // ["Gadar", "Sholay", "Don", "Gunday", "Koi Mil Gaya"]

        //for each movie, search the TMDB movie
        const promiseArray =  gptMovies.map(movie => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);

            dispatch(addGptMovieResult({movieNames: gptMovies, movieResults :tmdbResults}));


    }  
    
    return (
    <div className="pt-[30%] md:pt-[7.5%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
        ref={searchInput}
          type="text"
          className="p-4 m-4 bg-purple-300 text-black col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 text-black  bg-purple-300 rounded-lg col-span-3" onClick={handleGptSearchClick} >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
