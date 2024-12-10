import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <div className="absolute rotate-12 text-xl top-[220px]">
          <span className="bg-red-500 text-white px-2 rounded-lg">
            Página no encontrada
          </span>
        </div>
        
        <p className="mt-16 text-2xl font-semibold text-gray-700 tracking-tight">
          ¡Oops! La página que buscas no existe.
        </p>
        
        <p className="mt-4 text-gray-500">
          La página que estás buscando ha sido movida, eliminada o nunca existió.
        </p>

        <Link 
          to="/" 
          className="mt-8 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 
                     text-white font-semibold rounded-lg transition-colors 
                     duration-300 ease-in-out"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;