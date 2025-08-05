import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import { BG_IMAGE_URL } from "../utils/constants"

const GptSearch = () => {
  return (
    <div >
        <div className="absolute -z-10">
            <img
            src={BG_IMAGE_URL}
            alt="BGimage"
            />
        </div>   
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>      
  )
}

export default GptSearch