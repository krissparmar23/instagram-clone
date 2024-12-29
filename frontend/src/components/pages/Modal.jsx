import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ setModalOpen }) => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50"
      onClick={() => setModalOpen(false)}
    >
      <div className="bg-white rounded-lg shadow-lg w-64">
        <div className="flex justify-between items-center bg-gray-100 rounded-t-lg px-4 py-2">
          <h5 className="text-lg font-medium text-gray-800">Confirm</h5>
          <button
            className="text-gray-500 hover:text-gray-800 w-8 h-8 p-1 bg-[#0A3CD7] rounded-md"
            onClick={() => setModalOpen(false)}
          >
            <span className="material-symbols-outlined text-white">close</span>
          </button>
        </div>
        <div className="p-4 text-center text-gray-700">
          Are you really want to log out?
        </div>
        <div className="flex justify-around items-center p-4">
          <button
            className="bg-red-500 text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-red-600 hover:-translate-y-1 focus:outline-none transition-all"
            onClick={() => {
              setModalOpen(false);
              localStorage.clear();
              navigate("/signin");
            }}
          >
            Log Out
          </button>
          <button
            className="bg-gray-700 text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-gray-800 hover:-translate-y-1 focus:outline-none transition-all"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
