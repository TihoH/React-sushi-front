import React, { FC, ReactNode } from "react";

interface PopupProps {
  children: ReactNode;
  isActivePopup: boolean;
}

const Popup: FC<PopupProps> = ({ children, isActivePopup }) => {
  return (
    <div
      className={`absolute inset-0 bg-black/50 z-50 flex items-center justify-center 
  transition-opacity duration-300 
  ${
    isActivePopup
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  }`}
    >
      <div
        className={`bg-white max-w-[600px] w-full rounded-md p-5 border-4 border-green-300
    transform transition-all duration-300
    ${isActivePopup ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Popup;
