import React from "react";

const SkeletonCard = () => {
  return (
  <div className="rounded-lg border border-gray-200 shadow-md p-4 min-w-full max-w-sm mx-auto animate-pulse bg-white ">
      {/* Изображение */}
      <div className="h-48 bg-gray-300 rounded-md mb-4 relative overflow-hidden">
        {/* shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      </div>

      {/* Название */}
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      </div>

      {/* Описание */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
        <div className="h-4 bg-gray-300 rounded w-5/6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      </div>

      {/* Цена и кнопка */}
      <div className="mt-6 flex justify-between items-center">
        <div className="h-6 bg-gray-300 rounded w-1/4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
        <div className="h-8 bg-gray-300 rounded w-1/3 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
