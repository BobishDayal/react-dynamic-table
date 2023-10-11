import { useRef, useState } from "react";
import Modal from "../modal/Modal";

const isEmpty = (value) => value.trim() === "";
const EmailIsValid = (value) => value.includes("@");

const EditForm = (props) => {
  let updatedValues = props;

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const usernameInputRef = useRef();
  const phoneInputRef = useRef();
  const websiteInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredWebsite = websiteInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredPhoneIsValid = !isEmpty(enteredPhone);
    const enteredWebsiteIsValid = !isEmpty(enteredWebsite);
    const enteredUsernameIsValid = !isEmpty(enteredUsername);
    const enteredEmailIsValid = EmailIsValid(enteredEmail);

    const FormIsValid =
      enteredEmailIsValid &&
      enteredNameIsValid &&
      enteredPhoneIsValid &&
      enteredUsernameIsValid &&
      enteredWebsiteIsValid;

    if (!FormIsValid) {
      window.alert("Please fill the form appropriately !!");
      return;
    }

    updatedValues = {
      id: props.data.id,
      name: enteredName,
      username: enteredUsername,
      website: enteredWebsite,
      email: enteredEmail,
      phone: enteredPhone,
    };

    props.onUpdate(updatedValues);

    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
      >
        <div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
              <input
                ref={nameInputRef}
                defaultValue={props.data.name}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone:
              <input
                defaultValue={props.data.phone}
                ref={phoneInputRef}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
              <input
                ref={emailInputRef}
                defaultValue={props.data.email}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Website:
              <input
                ref={websiteInputRef}
                defaultValue={props.data.website}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username:
              <input
                ref={usernameInputRef}
                defaultValue={props.data.username}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
        </div>
        <div>
          <div className=" flex  align-items">
            <button className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
              Submit
            </button>
            <button
              className=" bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mx-4"
              onClick={props.onClose}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EditForm;
