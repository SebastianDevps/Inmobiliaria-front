import './App.css';
import { router, } from "./Pages/index";
import { RouterProvider } from "react-router-dom";
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="!w-[280px] md:!w-auto" // Ancho más pequeño en móviles
        toastStyle={{
          '@media (max-width: 480px)': {
            fontSize: '12px',
            padding: '8px',
            margin: '4px',
            minHeight: '40px'
          }
        }}
      />
      <RouterProvider router={router} />
    </>

  );
}

export default App;
