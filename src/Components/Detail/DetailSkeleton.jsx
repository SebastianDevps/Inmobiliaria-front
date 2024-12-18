import React from "react";

const DetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido Principal Skeleton */}
          <div className="lg:col-span-2 space-y-8">
            {/* Galería Skeleton */}
            <section className="relative rounded-xl overflow-hidden aspect-video bg-gray-200 animate-pulse">
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-white/90 rounded-full">
                {[...Array(4)].map((_, idx) => (
                  <div
                    key={idx}
                    className="w-3 h-3 rounded-full bg-gray-300"
                  />
                ))}
              </div>
            </section>

            {/* Información Principal Skeleton */}
            <section className="space-y-4">
              <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse" />
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
                <div className="w-1/2 h-5 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex flex-wrap gap-4">
                {[...Array(4)].map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-200 rounded-full h-10 w-40 animate-pulse"
                  />
                ))}
              </div>
            </section>

            {/* Tabs Skeleton */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="border-b">
                <div className="flex gap-4 p-4">
                  <div className="w-24 h-6 bg-gray-200 rounded animate-pulse" />
                  <div className="w-24 h-6 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                {[...Array(4)].map((_, idx) => (
                  <div
                    key={idx}
                    className="w-full h-4 bg-gray-200 rounded animate-pulse"
                    style={{ width: `${Math.random() * 20 + 80}%` }}
                  />
                ))}
                <div className="mt-6 aspect-video rounded-lg bg-gray-200 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Formulario Skeleton */}
          <div>
            <div className="sticky top-24 bg-white rounded-xl shadow-sm p-6 space-y-6">
              <div className="space-y-2">
                <div className="w-40 h-8 bg-gray-200 rounded animate-pulse" />
                <div className="w-56 h-4 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="space-y-4">
                <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse" />
                <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse" />
                <div className="w-full h-32 bg-gray-200 rounded-lg animate-pulse" />
                <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse" />
              </div>
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailSkeleton;