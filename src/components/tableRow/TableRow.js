import { Fragment, useState } from "react";
import EditForm from "../form/EditForm";
import DeleteCart from "../deleteCart/DeleteCart";

import DetailsPage from "../detailCart/DetailsPage";
import DropDown from "./DropDown";

const TableRow = (props) => {
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState(props);
  const [deleteState, setDeleteState] = useState(false);
  const [detailState, setDetailState] = useState(false);
  const [dropState, setDropState] = useState(false);

  const cartHandler = () => {
    setUpdate(!update);
  };

  const updateHandler = (obj) => {
    setData(obj);
  };

  const deleteButtonClickHandler = () => {
    setDeleteState(!deleteState);
  };

  const deleteHandler = () => {
    props.onDelete(data.id);
  };

  const openDetailsModal = () => {
    setDetailState(!detailState);
  };

  const openDropDownHandler = () => {
    setDropState(!dropState);
  };

  return (
    <Fragment>
      {!update ? (
        ""
      ) : (
        <EditForm onClose={cartHandler} data={props} onUpdate={updateHandler} />
      )}
      {!deleteState ? (
        ""
      ) : (
        <DeleteCart
          onClose={deleteButtonClickHandler}
          onSubmit={deleteHandler}
        />
      )}
      {!detailState ? (
        ""
      ) : (
        <DetailsPage
          onClose={openDetailsModal}
          id={data.id}
          email={data.email}
          phone={data.phone}
          username={data.username}
          website={data.website}
          name={data.name}
          onEdit={cartHandler}
        />
      )}

      <tr className="border   ">
        <td
          className="py-8 pl-12 text-start text-sm  hover:cursor-pointer w-1/3 "
          onClick={openDetailsModal}
        >
          {data.email}
        </td>

        <td
          className="py-8 px-6 text-center  text-sm  hover:cursor-pointer "
          onClick={openDetailsModal}
        >
          {data.username}
        </td>

        <td className="py-8 px-4 justify-center  flex   relative  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-gray-600 h-8 w-8 hover:cursor-pointer"
            onMouseEnter={openDropDownHandler}
            onMouseLeave={openDropDownHandler}
          >
            <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>

          {!dropState ? (
            ""
          ) : (
            <DropDown
              onEnter={() => {
                setDropState(true);
              }}
              onLeave={() => {
                setDropState(false);
              }}
              onDelete={deleteButtonClickHandler}
              onUpdate={cartHandler}
            />
          )}
        </td>
      </tr>
    </Fragment>
  );
};

export default TableRow;
