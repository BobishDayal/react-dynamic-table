import DeleteModal from "./DeleteModal";

const DeleteCart = (props) => {
  return (
    <DeleteModal onClose={props.onClose}>
      <div className="w- full flex flex-col justify-center items-center">
        <p className="my-5 font-bold">
          Are you sure you want to delete the entry?
        </p>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={props.onSubmit}
          >
            Confirm
          </button>
          <button
            className=" bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mx-4"
            onClick={props.onClose}
          >
            Close
          </button>
        </div>
      </div>
    </DeleteModal>
  );
};

export default DeleteCart;
