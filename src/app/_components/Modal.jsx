'use client'

import { useEffect } from "react";

export default function Modal({ children, onClose }) {
  useEffect(() => {
    // Close modal when escape key is pressed
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative">
        <div className="p-4">
          {/* Close button inside the card */}
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
