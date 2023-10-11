import Modal from "../modal/Modal";
import classes from "../modal/Modal.module.css";

const DetailsPage = (props) => {
  return (
    <Modal onClose={props.onClose} className={classes.detailClass}>
      <div className=" grid grid-cols-2  justify-center items-start rounded-xl gap-10 ">
        <button className=" absolute top-4  right-4" onClick={props.onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-gray-500 h-10 w-10 hover:fill-gray-800"
          >
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
          </svg>
        </button>

        <div className="flex justify-start items-center col-span-2 mt-2">
          <h6 className="text-black font-bold text-xl font-sans mx-4 ">
            Name :{" "}
          </h6>{" "}
          <p className="text-slate-800 font-lg font-semibold text-sm font-sans">
            {props.name}
          </p>
        </div>

        <div className="flex justify-start items-center col-span-2">
          <h6 className="text-black font-bold text-xl font-sans mx-4">
            Email :{" "}
          </h6>{" "}
          <p className="text-slate-800 font-lg font-semibold font-sans text-sm">
            {props.email}
          </p>
        </div>

        <div className="flex justify-start items-center col-span-2">
          <h6 className="text-black font-bold text-xl font-san mx-4">
            Phone:{" "}
          </h6>{" "}
          <p className="text-slate-800 font-lg font-semibold font-sans text-sm">
            {props.phone}
          </p>
        </div>

        <div className="flex justify-start items-center col-span-2">
          <h6 className="text-black font-bold text-xl font-sans mx-4">
            Website :{" "}
          </h6>{" "}
          <p className="text-slate-800 font-lg font-semibold font-sans text-sm">
            {props.website}
          </p>
        </div>
        <div className="flex justify-start items-center col-span-2">
          <h6 className="text-black font-bold text-xl font-sans mx-4">
            Username :{" "}
          </h6>{" "}
          <p className="text-slate-800 font-lg font-semibold font-sans text-sm">
            {props.username}
          </p>
        </div>

        <div className="absolute bottom-4 right-6">
          <button
            className="bg-transparent hover:bg-blue-800 hover:text-white text-blue-800 font-semibold  py-1 px-3 border border-blue-800  hover:border-transparent rounded"
            onClick={props.onEdit}
          >
            Edit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DetailsPage;
