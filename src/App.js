import React from 'react'
import logo from './logo.svg';
import './App.css';
import CVForm from './components/cvform/Form';
import CLForm from './components/clform/clform';
import Header from './components/header/header';
import Footer from './components/header/footer';
import router from './components/header/routers';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {

  const router = createBrowserRouter([
    {
      path: "/cv",
      element: <CVForm />,

    },
    {
      path: "/build-cover-letter",
      element: <CLForm />,
      
    },
  ]);

  return (
    
       <>

<Header/>
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
<Footer/>
       
  {/* <Router> 
    <Header/>


    <Routes>
        <Route path='/' element={<CVForm/>}/> 
        <Route path='/build-cover-letter' element={<CLForm/>}/>
  
  </Routes>

 <Footer/>
  </Router> */}
    </>
    
  );
}

export default App;
