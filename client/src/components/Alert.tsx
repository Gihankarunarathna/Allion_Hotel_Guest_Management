import React, { useEffect } from "react";

export type AlertType = "success" | "error";

interface AlertProps {
  message: string;
  type: AlertType;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); 
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";
  const borderColor = type === "success" ? "border-green-400" : "border-red-400";

  return (
    <div className={`fixed top-5 right-5 z-50 ${bgColor} ${textColor} border ${borderColor} px-4 py-3 rounded shadow-md`}>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 font-bold hover:text-gray-700"
      >
        ×
      </button>
    </div>
  );
};

export default Alert;
