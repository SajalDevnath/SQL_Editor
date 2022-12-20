const Navbar = ({ setQuery, setValue, setTableTitle, isOpen, setIsOpen }) => {
  const handleQuery = (query, name) => {
    setQuery(query);
    setTableTitle(name);
    setValue(`select * from ${query}`);
  };

  const Menus = [
    { title: "Categories", file: "categories" },
    { title: "Customers", file: "customers" },
    { title: "Employee Territories", file: "employee_territories" },
    { title: "Employees", file: "employees" },
    { title: "Order Details", file: "order_details" },
    { title: "Orders", file: "orders" },
    { title: "Products", file: "products" },
    { title: "Regions", file: "regions" },
    { title: "Shippers", file: "shippers" },
    { title: "Suppliers", file: "suppliers" },
    { title: "Territories", file: "terrotories" },
  ];

  return (
    <>
      <div
        className=
        {`${
          isOpen ? "col-span-2 absolute  " : "hidden"
        } bg-white h-full z-30 absolute `}
        // className="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      >
        <div className="bg-gray-800 h-14 p-5 flex flex-row items-center text-white font-semibold uppercase">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          Collections
          <button
            className="absolute right-3"
            aria-label="close"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <ul className="pt-2 space-y-1 p-5">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className="flex rounded-md p-2 cursor-pointer hover:bg-gray-100 hover:text-gray-700 text-gray-700 text-sm items-center gap-x-4"
              onClick={() => {
                handleQuery(Menu.file, Menu.title);
                setIsOpen(!isOpen);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="#3B82F6"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
              <span className="origin-left font-bold duration-200">
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Navbar;
