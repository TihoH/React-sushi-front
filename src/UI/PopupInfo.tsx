import React, { FC } from "react";

interface IPopupInfoProps {
  activeInfoPopup: boolean;
  className?: string;
  children: React.ReactNode;
  type?: 'warning' | 'ok';
}

const PopupInfo: FC<IPopupInfoProps> = ({
  activeInfoPopup,
  children,
  className = "",
  type = 'ok'
}) => {
  return (
    <div
      className={`
        ${className}
        fixed bottom-2 right-5 sm:right-10
        text-white font-semibold text-lg sm:text-xl
        px-5 py-3 rounded-xl shadow-lg
        transform transition-all duration-500
        ${activeInfoPopup ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
        z-50
        min-w-[250px] max-w-[90%] sm:min-w-[250px]
        text-center
        ${type === 'ok' ? 'bg-green-600' : ''}
        ${type === 'warning' ? 'bg-red-600 border-2 border-red-500' : ''}
      `}
    >
      {children}
    </div>
  );
};

export default PopupInfo;
