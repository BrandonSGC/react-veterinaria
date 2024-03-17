import { useEffect, useState } from "react";

export const Alert = ({ alert }) => {
  const { show, type, text } = alert;

  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  const alertClasses = {
    success: "text-green-600 bg-green-100 border-green-600",
    warning: "text-yellow-600 bg-yellow-100 border-yellow-600",
    error: "text-red-600 bg-red-100 border-red-600",
  };

  return (
    <>
      {isVisible && (
        <div
          className={`p-2 font-semibold text-center border-2 rounded-sm ${
            alertClasses[type]
          }`}
        >
          <p>{text}</p>
        </div>
      )}
    </>
  );
};