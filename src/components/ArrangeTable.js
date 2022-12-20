import React, { useMemo } from "react";
import Front from "../components/images/FrontPage.png";
//import Table from "./Table";
const Table = React.lazy(() => import("./Table"));

const ArrangeTable = ({ query, runtime, isOpen, data, len, error }) => {
  //console.log(data);
  const columns = useMemo(() => {
    if (data.length > 0) {
      return Object.keys(data[0]).map((key) => {
        const result = data[0][key]
          .replace(/([A-Z]+)/g, " $1")
          .replace(/([A-Z][a-z])/g, " $1");

        return {
          Header: result,
          accessor: key,
        };
      });
    }
  }, [data]);

  //console.log(error)

  const queryData = useMemo(() => data.slice(1), [data]);
  //console.log(data)

  // if(error){
  //   return(
  //     <>
  //     <div className="px-5 w-full h-full flex flex-col justify-center">
  //         <div className="flex flex-col justify-center py-5 ">
  //             😥 Something went wrong
  //         </div>
  //     </div>
  //   </>
  //   )
  // }

  return (
    <>
      {data.length > 0 ? (
        <>
          <div className="px-5">
            <Table
              len={len}
              columns={columns}
              runtime={runtime}
              data={queryData}
              allData={data}
            />
          </div>
        </>
      ) : (
        <>
          {/* <div className="h-full flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-52 sm:h-24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#9CA3AF"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
            <div className="text-gray-400 text-2xl sm:text-lg">Select a Database or Run Query</div>
          </div> */}

          <div className="px-5 w-full flex flex-col justify-center items-center h-full container sm:mb-20">
            <div>
              <img src={Front} className="h-96"></img>
            </div>
            <div className="text-gray-700 text-base sm:text-lg mt-5">
              Select a Database or Run a Query
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ArrangeTable;
