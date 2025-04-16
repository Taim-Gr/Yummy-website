"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function TemporaryNotice({
  message,
  duration = 5000,
  successMessage = false,
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const bgColor = successMessage ? "bg-green-50" : "bg-yellow-50";
  const borderColor = successMessage ? "border-green-200" : "border-yellow-200";
  const textColor = successMessage ? "text-green-800" : "text-yellow-800";
  const btnColor = successMessage
    ? "text-green-500 hover:text-green-700"
    : "text-yellow-500 hover:text-yellow-700";

  return (
    <div
      className={`fixed top-4 left-0 right-0 mx-auto w-full max-w-md ${bgColor} border ${borderColor} rounded-lg p-4 shadow-md z-50`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className={`text-sm font-medium ${textColor}`}>{message}</p>
        </div>
        <button
          onClick={handleClose}
          className={`ml-3 flex-shrink-0 inline-flex ${btnColor} focus:outline-none`}
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
