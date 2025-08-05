const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] px-6 md:px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl text-white  font-bold"> {title}</h1>
      <p className="hidden md:inline-block py-6 text-lg text-white w-1/4"> {overview}</p>

      <div>
        <button className="bg-white text-black text-xl py-2 my-2 md:py-4 px-2 md:px-12 p-4  rounded-lg hover:opacity-80">
          <i className="fa-solid fa-play"></i> Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white text-xl px-12 p-4  opacity-80 rounded-lg hover:opacity-100">
          <i className="fa-solid fa-circle-info"></i>  More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
