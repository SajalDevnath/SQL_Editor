import React, { useState, Suspense } from "react";
import "./App.css";
//import Editor from "./components/Editor";
//import Navbar from "./components/Navbar";
//import ArrangeTable from "./components/ArrangeTable";
import CsvDownload from "react-json-to-csv";
//import { exportToJson } from "./helper/exportToJSON.js";
import Data from "./DataHook/Data";
import Loading from "./components/Loading";
//import { AiFillGithub } from "react-icons/ai";

const Editor = React.lazy(() => import("./components/Editor"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const ArrangeTable = React.lazy(() => import("./components/ArrangeTable"));
const exportToJson = React.lazy(() => import("./helper/exportToJSON.js"));
//const Loading = React.lazy(() => import("./components/Loading"))
//const AiFillGithub = React.lazy(()=> import('react-icons/ai/AiFillGithub.svg') )
function App() {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("select * from categories");
  const [isOpen, setIsOpen] = useState(false);
  const [tableName, setTableTitle] = useState("");
  //const [length, setTength] = useState("")

  //?Data
  //const [maindata,setmainData] = useState([])
  const { data, runtime, error } = Data(query);
  let len;
  if (data.length > 0) {
    len = data.length - 1;
  }
  return (
    <>
      <div className="App">
        <Suspense fallback={<Loading />}>
          {/* Navbar start */}
          <div>
            <Navbar
              setQuery={setQuery}
              setValue={setValue}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              setTableTitle={setTableTitle}
            />
          </div>
          {/* Navbar end */}
          {/* Header Start*/}
          <div className="text-lg font-semibold ">
            <div className="absolute h-3 w-3 flex items-center  justify-center ">
              <span className="animate-ping absolute inline-flex  left-9 top-2 h-3 w-3 rounded-full bg-cyan-500 opacity-95"></span>
              <span className="absolute inline-flex rounded-full  left-9 top-2 z-10  h-3 w-3 bg-cyan-300"></span>
              <span className="h-full w-full mt-10 ml-12 z-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 absolute cursor-pointer
           rounded-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>

              <div></div>
            </div>
            <div className="h-14 border-b-[1px] border-gray-400 text-white bg-gradient-to-r from-[#0595E8] to-[#7ACDC9] flex flex-row pl-5 items-center overflow-hidden">
              <div className="pl-12 flex flex-row items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className="whitespace-nowrap">Sql Editor</div>
              </div>

              <div className="ml-64 sm:ml-20 w-max flex flex-row justify-end items-baseline pt-12 pb-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[30rem] ml-[32rem] sm:h-64 sm:ml-[1rem]   opacity-25 -rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  />
                </svg>
              </div>

              <div className="absolute right-5 cursor-pointer">
                <a
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                  href="https://github.com/SajalDevnath/SQL_Editor"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#2f3640"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Table and form segment */}

            <div className="border-gray-400 text-gray-700 grid grid-cols-6 sm:grid-cols-1">
              {/* Table Segment start*/}
              <div className="col-span-4">
                <div
                  className={` ${
                    query !== ""
                      ? "col-span-4 uppercase h-12 flex items-center border-b-[1px] border-gray-300  justify-center"
                      : "mt-1"
                  }`}
                >
                  {tableName}
                </div>
                <ArrangeTable
                  len={len}
                  error={error}
                  query={query}
                  runtime={runtime}
                  isOpen={isOpen}
                  data={data}
                />
              </div>
              {/* Table section end */}
              {/* Editor Section start*/}
              <div className=" border-gray-400 col-span-2 flex flex-col h-max sm:mt-1">
                <div className=" left pl-5 uppercase h-12 sm:border-t-[1px] border-b-[1px] border-l-[1px] border-gray-300 flex items-center justify-center">
                  Run Query
                </div>
                <Editor value={value} setQuery={setQuery} setValue={setValue} />

                {/* Download Buttons csv and json start */}
                <div className="h-10 m-3 flex flex-row space-x-4">
                  <CsvDownload
                    className="w-1/2 h-full bg-white hover:animate-pulse transition-colors  rounded-md font text-md font-semimbold drop-shadow-sm"
                    data={data}
                    filename={`${query}.csv`}
                  >
                    <div className="flex flex-row justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      CSV
                    </div>
                  </CsvDownload>
                  {/* <button
                  className={
                    "w-1/2 h-full bg-purple hover:bg-purple hover:animate-pulse transition-colors text-white rounded-md font text-md font-semimbold drop-shadow-lg"
                  }
                  //onClick={handleclick}
                >
                  <CsvDownload
                    className="w-1/2 h-full bg-purple hover:bg-purple hover:animate-pulse transition-colors text-white rounded-md font text-md font-semimbold drop-shadow-lg"
                    data={data}
                    filename={`${query}.csv`}
                  >
                    <div className="flex flex-row justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      CSV
                    </div>
                  </CsvDownload>
                </button> */}

                  <button
                    className={
                      "w-1/2 h-full bg-white hover:animate-pulse rounded-md font text-md font-semimbold drop-shadow-sm"
                    }
                    onClick={() => exportToJson(data, query)}
                  >
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      JSON
                    </div>
                  </button>
                </div>
                {/* Download Buttons csv and json end */}
                <div className="h-24 sm:h-12 sm:mb-4 flex flex-col justify-end text-xs text-gray-600">
                  <div className="flex flex-row justify-center text-base font-gray-700">
                    {/* Made with{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="red"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                    by Sajal Devnath */}
                    Made with ❤
                  </div>
                </div>
              </div>
              {/* Editor section end */}
            </div>
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default App;
