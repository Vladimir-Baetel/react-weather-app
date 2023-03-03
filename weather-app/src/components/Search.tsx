import LocationApi from "../api/LocationApi";

const Search = () => {
  const location = LocationApi();

  return (
    <div className="w-full h-1/3 flex relative bg-slate-800/25 rounded-xl">
      <div className="flex items-center absolute bottom-0 left-2">
        <i className="fa-regular fa-circle-question text-xl mr-2 cursor-pointer"></i>
        <p className="text-xs">
          Your IP address is: {location?.query} <br></br> Your location is:{" "}
          {location?.city}
        </p>
      </div>
    </div>
  );
};

export default Search;
