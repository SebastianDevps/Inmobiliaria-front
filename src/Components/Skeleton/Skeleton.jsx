import React from "react";

const Skeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Skeleton */}
      <div className="w-full h-[10vh] bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
          <div className="w-32 h-8 bg-gray-200 animate-pulse rounded" />
          <div className="hidden lg:flex space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-24 h-4 bg-gray-200 animate-pulse rounded"
              />
            ))}
          </div>
          <div className="w-28 h-10 bg-gray-200 animate-pulse rounded-full" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section Skeleton */}
        <div className="mb-12">
          <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded" />
        </div>

        {/* Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow">
              <div className="w-full h-48 bg-gray-200 animate-pulse rounded mb-4" />
              <div className="w-3/4 h-4 bg-gray-200 animate-pulse rounded mb-2" />
              <div className="w-1/2 h-4 bg-gray-200 animate-pulse rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
