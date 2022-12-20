
const Search = ({ filter, setFilter, len }) => {
  return (
    <div className="my-1 h-9">
      <div className="h-full w-max flex flex-row rounded-md ">
        <div className="h-full w-10 flex border-y-2 border-l-2 bg-gray-300 rounded-l-md items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          className="h-full pl-3 focus:outline-none border-y-2 border-r-2 border-gray-200 w-52 sm:w-24 rounded-r-md text-sm"
          type="text"
          name="search"
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
        <p className="flex items-center ml-5 text-gray-500">
        {len} Records
        </p>
      </div>
    </div>
  );
};

export default Search;
