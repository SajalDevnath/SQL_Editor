import React from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useColumnOrder,
  useBlockLayout,
} from "react-table";
import Search from "./Search";

//import { Styles } from "./TableStyles";
const Table = ({ columns, runtime, data, allData, len }) => {
  //? Import Data
  //! remove styled component
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
    //setColumnOrder,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useColumnOrder,
    useBlockLayout
    //useSticky
  );

  const { globalFilter, pageIndex, pageSize } = state;

  // const changeOrder = () =>{
  //     setColumnOrder([
  //         'id', 'first_name' , 'last_name' , 'phone' , 'country' , 'dob'
  //     ])
  // }

  return (
    <>
      {/* <button onClick={changeOrder}>Change Column Order</button> */}
      <div className="flex flex-row w-full items-center my-3">
        <Search filter={globalFilter} setFilter={setGlobalFilter} len={len} />
        <span className="flex w-full justify-end">
          <div className="w-max bg-sky-400 flex flex-row rounded-md px-2 text-white py-1 text-sm drop-shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>{`${runtime.toFixed(2)} ms`}</p>
          </div>
        </span>
      </div>

      <div className="relative overflow-x-auto  text-xs rounded-lg drop-shadow-sm bg-white">
        <table
          {...getTableProps}
          className="min-w-full divide-y divide-gray-200 table-auto"
        >
          <thead className="h-10 w-full bg-gray-200 text-gray-500 grid items-center ">
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="border-b-[1px] border-gray-200"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    className="uppercase w-full"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? "🔽"
                          : "🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="">
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 min-h-full whitespace-normal"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Page toggle section start */}
      <div className="container font-poppins text-xs mt-3 flex flex-row items-center justify-center space-x-3 sm:container-sm">
        <span className="">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span className="text-xl text-gray-400"> | </span>

        <span className="flex flex-row space-x-2 sm:hidden">
          <div className="flex items-center"> Go to page: </div>
          <input
            type="number"
            className="py-1 px-2 w-16 text-sm font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-blue-700  disabled:bg-gray-400"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
        </span>

        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="py-1 px-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-blue-700  disabled:bg-gray-400"
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <div className="">
          <button
            className="py-1 px-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-l-lg border border-gray-200 hover:bg-gray-200 hover:text-blue-700  disabled:bg-gray-400"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {"<<"}
          </button>
          <button
            className="py-1 px-2 text-sm font-medium text-gray-900  focus:outline-none bg-gray-200  border-x-[1px] border-gray-300 hover:bg-gray-200 hover:text-blue-700 disabled:bg-gray-400 "
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"}
          </button>
          <button
            className="py-1 px-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-200  border-r-[1px] border-gray-300 hover:bg-gray-200 hover:text-blue-700 disabled:bg-gray-400"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {">"}
          </button>
          <button
            className="py-1 px-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-r-lg border border-gray-200 hover:bg-gray-200 hover:text-blue-700   disabled:bg-gray-400 "
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>
        </div>
      </div>

      {/* Page toggle section end */}

      {/* <Styles>
      <div {...getTableProps()} className="table sticky w-44">
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {page.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Styles> */}
    </>
  );
};

export default Table;
