import React, { FC, ReactNode } from "react";

interface PopupProps {
  children: ReactNode;
  isActivePopup: boolean;
}

const Popup: FC<PopupProps> = ({ children, isActivePopup }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 inset-0 bg-black/50 z-50 flex items-center justify-center 
  transition-opacity duration-300 
  ${
    isActivePopup
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  }`}
    >
      <div
        className={`bg-white w-[80%] md:max-w-[600px] md:w-full rounded-md p-5 border-4 border-green-300
    transform transition-all duration-300
    ${isActivePopup ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Popup;
