import LocationApi from "../api/LocationApi";

const Search = () => {
  const location = LocationApi();

  if (!location)
    return (
      <div className="w-full h-1/3 flex relative bg-sky-800/10 rounded-xl">
        <p className="text-4xl">Loading...</p>
      </div>
    );
  return (
    <div className="w-full h-1/3 p-4 flex flex-col items-center justify-center bg-sky-900/75 backdrop-blur-sm rounded-xl shadow-xl">
      <h1 className="text-3xl text-center">Weather App</h1>
      <div className="w-full h-full flex items-center justify-center gap-2">
        <input
          type="text"
          className="w-48 h-10 p-4 rounded-lg bg-sky-200/25 shadow-md"
        />
        <button
          type="submit"
          className="w-10 h-10 rounded-lg bg-sky-200/25 shadow-md"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="flex items-center">
        {/* <i className="fa-regular fa-circle-question text-xl mr-2 cursor-pointer"></i> */}
        <p className="text-xs">
          Your IP address is: {location.query} <br></br> Your location is:{" "}
          {location.city}, {location.country}
        </p>
      </div>
    </div>
  );
};

export default Search;
