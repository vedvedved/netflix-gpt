const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl text-white  font-bold"> {title}</h1>
      <p className="py-6 text-lg text-white w-1/4"> {overview}</p>

      <div>
        <button className="bg-white text-black text-xl px-12 p-4  rounded-lg hover:opacity-80">
          <i className="fa-solid fa-play"></i> Play
        </button>
        <button className="mx-2 bg-gray-500 text-white text-xl px-12 p-4  opacity-80 rounded-lg hover:opacity-100">
          <i className="fa-solid fa-circle-info"></i>  More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
