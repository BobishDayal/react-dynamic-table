import { Fragment, useState, useCallback } from "react";

import TableRow from "./components/tableRow/TableRow";
import Pagination from "./components/pagination/Pagination";

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMoviesHandler = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  let NUM_OF_RECORDS = users.length;
  let LIMIT = 5;

  const currentData = users.slice(
    (currentPage - 1) * LIMIT,
    (currentPage - 1) * LIMIT + LIMIT
  );

  const onPageChanged = useCallback(
    (event, page) => {
      event.preventDefault();
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  const deleteHandler = (id) => {
    const updatedList = users.filter((user) => user.id !== id);

    setUsers(updatedList);
  };

  return (
    <Fragment>
      {users.length === 0 ? (
        <div className="w-screen h-screen flex flex-col justify-center items-center ">
          <button
            className=" hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 border-4 border-blue-700 hover:border-transparent rounded-lg"
            onClick={fetchMoviesHandler}
          >
            FETCH
          </button>
          <div className="flex justify-center align-center">
            <p className="text-black text-4xl my-10 font-bold ">
              CLICK FETCH TO SEE USER RESULTS
            </p>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col h-screen  justify-start items-center w-screen ">
          {NUM_OF_RECORDS > 5 ? (
            <table className=" font-bold border-collapse border-spacing-y-2 w-4/5 text-lg  my-10  relative ">
              <thead className=" text-white shadow-2xl  ">
                <tr>
                  <th className=" py-8 pl-12  text-start font-extrabold text-xl  bg-gray-600 w-1/3 ">
                    Email
                  </th>

                  <th className="py-8 px-4 text-center  font-extrabold text-xl bg-gray-600 w-1/3">
                    Username
                  </th>

                  <th className="py-8 px-3 text-center  font-extrabold text-xl  bg-gray-600 w-1/3 ">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className=" text-black">
                {currentData.map((obj) => {
                  return (
                    <TableRow
                      key={obj.id}
                      id={obj.id}
                      name={obj.name}
                      email={obj.email}
                      phone={obj.phone}
                      username={obj.username}
                      website={obj.website}
                      onDelete={deleteHandler}
                    />
                  );
                })}
              </tbody>

              <div className="flex flex-col py-7 absolute bottom-(-10) right-5">
                {users.length > 5 && (
                  <Pagination
                    totalData={NUM_OF_RECORDS}
                    pageLimit={LIMIT}
                    pageNeighbours={2}
                    onPageChanged={onPageChanged}
                    currentPage={currentPage}
                  />
                )}
              </div>
            </table>
          ) : (
            <table className=" font-bold border-collapse border-spacing-y-2 w-4/5 text-lg  my-10  relative ">
              <thead className=" text-white shadow-2xl  ">
                <tr>
                  <th className=" py-8 pl-12  text-start font-extrabold text-xl  bg-gray-600 w-1/3 ">
                    Email
                  </th>

                  <th className="py-8 px-4 text-center  font-extrabold text-xl bg-gray-600 w-1/3">
                    Username
                  </th>

                  <th className="py-8 px-3 text-center  font-extrabold text-xl  bg-gray-600 w-1/3 ">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className=" text-black">
                {users.map((obj) => {
                  return (
                    <TableRow
                      key={obj.id}
                      id={obj.id}
                      name={obj.name}
                      email={obj.email}
                      phone={obj.phone}
                      username={obj.username}
                      website={obj.website}
                      onDelete={deleteHandler}
                    />
                  );
                })}
              </tbody>

              <div className="flex flex-col py-7 absolute bottom-(-10) right-5">
                {users.length > 5 && (
                  <Pagination
                    totalData={NUM_OF_RECORDS}
                    pageLimit={LIMIT}
                    pageNeighbours={2}
                    onPageChanged={onPageChanged}
                    currentPage={currentPage}
                  />
                )}
              </div>
            </table>
          )}
        </div>
      )}
    </Fragment>
  );
}
