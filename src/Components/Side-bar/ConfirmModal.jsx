import React from 'react';

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg p-6 w-96 shadow-lg z-[1100]">
        <h2 className="text-xl text-sky-600 font-semibold mb-4">Are you sure you want to be a creator?</h2>
        <div className="flex justify-end space-x-3">
          <button 
            className="bg-gray-200 dark:bg-gray-700 dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition" 
            onClick={onClose}
          >
            Back
          </button>
          <button 
            className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition" 
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
