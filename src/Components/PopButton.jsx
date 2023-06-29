import React from "react";
import { Link } from "react-router-dom";

function PopButton() {
  return (
    <div className="relative w-full max-w-md max-h-full">
      <div className="relative bg-slate-900 rounded-lg shadow ">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-100 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          data-modal-hide="popup-modal"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="p-6 text-center">
          {/* <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
          <span className=" material-symbols-outlined text-gray-600 text-6xl">
            help
          </span>
          <h3 className="mb-5 text-lg font-medium text-white">
            Do you know that you will be redirected to another page?
          </h3>

          <button
            data-modal-hide="popup-modal"
            type="button"
            className="text-white bg-pink-600 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border
             border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 mr-5"
          >
           <Link to="/about">Yes Proceed</Link>
          </button>
          <button
            data-modal-hide="popup-modal"
            type="button"
            className="text-white bg-red-600 hover:bg-red-400 focus:ring-4 
            focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            Cancel!
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopButton;
