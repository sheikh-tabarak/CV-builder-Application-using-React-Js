import React from 'react'
import CLForm from "../clform/clform";
import CVForm from "../cvform/Form";


import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


export default function routers() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <CVForm />,
    
        },
        {
          path: "/build-cover-letter",
          element: <CLForm />,
          
        },
      ])
  return (
<></>
  )
}
