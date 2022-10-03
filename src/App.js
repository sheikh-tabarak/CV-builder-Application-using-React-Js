import React from 'react'
import logo from './logo.svg';
import './App.css';
import CVForm from './components/cvform/Form';
import CLForm from './components/clform/clform';
import Header from './components/header/header';
import Footer from './components/header/footer';
import router from './components/header/routers';
import Template1 from './components/templates/template1/template1'
import Template2 from './components/templates/template2/template2'
import Example from './components/cvform/Example'

//import data from "./components/cvform/Form";


import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
       <>   
<BrowserRouter> 

<Header/>

<Routes>
      <Route path="/build-cv" element={<CVForm />}>
      <Route
          path="t1"
          element={
            <Template1/>
          }
        />
        <Route path="t2" element={<Template2/>} />
        </Route>

      <Route path="/build-cl" element={<CLForm/>}/>

    </Routes>

<Footer/>
</BrowserRouter>

    </>
    
  );
}

export default App;
