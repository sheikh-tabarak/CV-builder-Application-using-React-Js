import  React, { useRef } from "react";
import {useState} from "react";
import Template1 from "../templates/template1/template1";
import Template2 from "../templates/template2/template2";
import ".//form.css";
import {ComponentToPrint} from './ComponentToPrint'

import ReactToPrint from "react-to-print";
import Footer from '../header/footer';


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import downLoadPdf from "../configurations/downloading";


const AddExperience = (value)=>{


}




export default function Form() {
const pdfRef = useRef();



  


  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("old boring text");

  const componentRef = React.useRef(null);
  const onBeforeGetContentResolve = React.useRef(null);

  // const handleAfterPrint = React.useCallback(() => {
  //   console.log("`onAfterPrint` called");
  // }, []);

  // const handleBeforePrint = React.useCallback(() => {
  //   console.log("`onBeforePrint` called");
  // }, []);


  
  // const handleOnBeforeGetContent = React.useCallback(() => {
  //   console.log("`onBeforeGetContent` called");
  //   setLoading(true);
  //   setText("Loading new text...");

  //   const componentRef = useRef();
     
  //   return new Promise((resolve) => {
  //     onBeforeGetContentResolve.current = resolve;

  //     setTimeout(() => {
  //       setLoading(false);
  //       setText("New, Updated Text!");
  //       resolve();
  //     }, 2000);
  //   });
  // }, [setLoading, setText]);


  

  // const [cv, setcv] = useState({
  //   image:
  //     "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
  //   name: "",
  //   website:"",
  //   email: "",
  //   phone: "",
  // });


//   const changeHandler = (e) => {

//     setcv( cv => {
//       return { ...cv,[e.target.name]: e.target.value}
//     })
//  }
/* States and functions for Introduction Part */

  const [imageu, setImage] = useState("https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000");
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [website, SetWebsite] = useState("");
  const [headline, SetHeadline] = useState("");
  const [phone, SetPhone] = useState("");
  const [aboutme, SetAboutme] = useState("");
  const [city, SetCity] = useState("");


  const ChangeName = (event) => {
    SetName(event.target.value);
  };

  const ChangeEmail = (event) => {
    SetEmail(event.target.value);
  };

  const ChangeWebsite = (event) => {
    SetWebsite(event.target.value);
  };

  const ChangeHeadline = (event) => {
    SetHeadline(event.target.value);
  };
  
   const ChangePhone = (event) => {
    SetPhone(event.target.value);
  };


  const ChangeAboutme= (event) => {
    SetAboutme(event.target.value);
  };

  const ChangeCity= (event) => {
    SetCity(event.target.value);
  };

/* States and functions for Introduction Part */


/* States and functions for Experince Part */

  const [designation, SetDesignation] = useState("");
const [jobdesc, Setjobdesc] = useState("");
const [company, SetCompany] = useState("");
const [sdate, SetSDate] = useState("");
const [edate, SetEDate] = useState("");



const ChangeDesignation= (event) => {
  SetDesignation(event.target.value);
};


const Changejobdesc= (event) => {
  Setjobdesc(event.target.value);
};

const ChangeCompany= (event) => {
  SetCompany(event.target.value);
};

const ChangeSDate= (event) => {
  SetSDate(event.target.value);
};

const ChangeEDate= (event) => {
  SetEDate(event.target.value);
};



/* States and functions for Experince Part */

  return (
    <>


   <button onClick={()=>downLoadPdf(pdfRef)}>Download</button>
      <div ref={pdfRef} class="container-fluid ">
        <div class="row ">
          <div className="col-4 bg-light p-0 m-0  overflow-scroll">
          
          <details open>
          <summary className="lead sidebar-toggles">&nbsp;Introduction</summary>
          <div className="p-4">
            <div class="row">
              <div class="col-5">
                <div class="custom-file">
                  <input
                    style={{
                      backgroundImage: `url(${imageu})`,
                    }}
                    type="file"
                    class="custom-file-input"
                    id="customFile"
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setImage(URL.createObjectURL(event.target.files[0]));
                      // setImage(event.target.files[0]);
                    }}
                  />
                  <label class="custom-file-label" for="customFile">
                    {" "}
                  </label>
                </div>
              </div>
              <div class="col">
                <div class="row">
                  <div class="col">
                    <div class="form-group m-1">
                      <label for="gname">Name</label>
                      <input
                     value={name}
                        onChange={ChangeName}
                        type="text"
                        class="form-control"
                        id="gname"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>

                  <div class="form-group m-1">
                    <label for="fname">Website</label>
                    <input
                     value={website}
                onChange={ChangeWebsite}
                      type="text"
                      class="form-control"
                      id="fname"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </div>
            </div>

            <form>
              <div class="form-group m-1">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  value={email}
                  onChange={ChangeEmail}
                  aria-describedby="emailHelp"
                />
              </div>

              <div class="form-group m-1 mb-3">
                <label for="headline">Headline</label>
                <input
                 value={headline}
                 onChange={ChangeHeadline}
                  type="text"
                  class="form-control"
                  id="headline"
                  aria-describedby="emailHelp"
                />
              </div>

              <div class="form-outline">
              <label class="form-label" for="textAreaExample">About you</label>
              <textarea
              value={aboutme}
              onChange={ChangeAboutme}
              class="form-control" id="textAreaExample1" rows="4"></textarea>
              </div>

              <div class="form-group m-1  mb-3">
                <label for="pnumber">Phone number</label>
                
                <input 
                value={phone}
                onChange={ChangePhone}
                type="number" class="form-control" id="pnumber" />
              </div>
              

              <div class="row">
                <div class="col">
                  <div class="form-group m-1">
                    <label for="city">City</label>
                    <input
                      value={city}
                      onChange={ChangeCity}
                      type="text"
                      class="form-control"
                      id="city"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </div>
            </form>
            </div>
          </details>


          <details>
          <summary className="lead active sidebar-toggles">&nbsp;Experience</summary>
        
          <div className="p-4 active">
            

            <form>
              <div class="form-group m-1">
                <label for="designation">Designation</label>
                <input
                  type="text"
                  class="form-control"
                  id="designation"
                  value={designation}
                  onChange={ChangeDesignation}
                 
                />
              </div>
        
              <div class="form-group m-1">
                <label for="company">Company</label>
                <input
                  type="text"
                  class="form-control"
                  id="company"
                  value={company}
                  onChange={ChangeCompany}
                
                />
              </div>
        
        
              <div class="form-outline">
              <label class="form-label" for="textAreaExample">Job Description</label>
              <textarea
              value={jobdesc}
              onChange={Changejobdesc}
              class="form-control" id="textAreaExample1" rows="4"></textarea>
              </div>
        <br/>
        
              <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
              <label class="form-label" for="textAreaExample">Start Date</label>
        <input
        value={sdate}
        onChange={ChangeSDate}
        placeholder="Pick a date you started" type="date" id="example" class="form-control"/>
        <i class="fas fa-calendar input-prefix"></i>
        </div>
        
        <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
        <label class="form-label" for="textAreaExample">End Date</label>
        <input 
        value={edate}
        onChange={ChangeEDate}
        placeholder="Pick a date you ends" type="date" id="example" class="form-control"/>
        <i class="fas fa-calendar input-prefix"></i>
        </div>
        <br/>
        
        
        
        <div class="span9 btn-block">
        <button onClick={AddExperience} style={{width:375}} class="btn btn-large btn-block btn-primary" type="button">Add Experience</button>
        </div>
        
            </form>
            </div>


        
          
          </details >



          <details>
          <summary className="lead active sidebar-toggles">&nbsp;Education</summary>
        
          <div className="p-4 active">
            

            <form>
              <div class="form-group m-1">
                <label for="designation">Designation</label>
                <input
                  type="text"
                  class="form-control"
                  id="designation"
                  value={designation}
                  onChange={ChangeDesignation}
                 
                />
              </div>
        
              <div class="form-group m-1">
                <label for="company">Company</label>
                <input
                  type="text"
                  class="form-control"
                  id="company"
                  value={company}
                  onChange={ChangeCompany}
                
                />
              </div>
        
        
              <div class="form-outline">
              <label class="form-label" for="textAreaExample">Job Description</label>
              <textarea
              value={jobdesc}
              onChange={Changejobdesc}
              class="form-control" id="textAreaExample1" rows="4"></textarea>
              </div>
        <br/>
        
              <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
              <label class="form-label" for="textAreaExample">Start Date</label>
        <input
        value={sdate}
        onChange={ChangeSDate}
        placeholder="Pick a date you started" type="date" id="example" class="form-control"/>
        <i class="fas fa-calendar input-prefix"></i>
        </div>
        
        <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
        <label class="form-label" for="textAreaExample">End Date</label>
        <input 
        value={edate}
        onChange={ChangeEDate}
        placeholder="Pick a date you ends" type="date" id="example" class="form-control"/>
        <i class="fas fa-calendar input-prefix"></i>
        </div>
        <br/>
        
        
        
        <div class="span9 btn-block">
        <button onClick={AddExperience} style={{width:375}} class="btn btn-large btn-block btn-primary" type="button">Add Experience</button>
        </div>
        
            </form>
            </div>


        
          
          </details >


          <details>
          <summary className="lead active sidebar-toggles">&nbsp;Projects</summary>
        
          <div className="p-4 active">
            

            <form>
              <div class="form-group m-1">
                <label for="designation">Designation</label>
                <input
                  type="text"
                  class="form-control"
                  id="designation"
                  value={designation}
                  onChange={ChangeDesignation}
                 
                />
              </div>
        
              <div class="form-group m-1">
                <label for="company">Company</label>
                <input
                  type="text"
                  class="form-control"
                  id="company"
                  value={company}
                  onChange={ChangeCompany}
                
                />
              </div>
        
        
              <div class="form-outline">
              <label class="form-label" for="textAreaExample">Job Description</label>
              <textarea
              value={jobdesc}
              onChange={Changejobdesc}
              class="form-control" id="textAreaExample1" rows="4"></textarea>
              </div>
        <br/>
        
              <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
              <label class="form-label" for="textAreaExample">Start Date</label>
        <input
        value={sdate}
        onChange={ChangeSDate}
        placeholder="Pick a date you started" type="date" id="example" class="form-control"/>
        <i class="fas fa-calendar input-prefix"></i>
        </div>
        
        <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
        <label class="form-label" for="textAreaExample">End Date</label>
        <input 
        value={edate}
        onChange={ChangeEDate}
        placeholder="Pick a date you ends" type="date" id="example" class="form-control"/>
        <i class="fas fa-calendar input-prefix"></i>
        </div>
        <br/>
        
        
        
        <div class="span9 btn-block">
        <button onClick={AddExperience} style={{width:375}} class="btn btn-large btn-block btn-primary" type="button">Add Experience</button>
        </div>
        
            </form>
            </div>


        
          
          </details >


          </div>
           

          <div className="cvpreview col-8 overflow-auto">

          <ul class="list-group list-group-horizontal-sm mb-3">
  <li class="list-group-item"><a class="nav-link text-black" href="http://localhost:3000/build-cv/t1">Template 01</a></li>
  <li class="list-group-item"><a class="nav-link text-black" href="http://localhost:3000/build-cv/t2">Template 02</a></li>
  <li class="list-group-item"><a class="nav-link text-black" href="http://localhost:3000/build-cv/t3">Template 03</a></li>
  <li class="list-group-item"><a class="nav-link text-black" href="http://localhost:3000/build-cv/t4">Template 04</a></li>
  <li class="list-group-item"><a class="nav-link text-black" href="http://localhost:3000/build-cv/t5">Template 05</a></li>
  <li class="list-group-item"><a class="nav-link text-black" href="http://localhost:3000/build-cv/t6">Template 06</a></li>

  {/* <li class="list-group-item">  <a class="nav-link text-black" href="/build-cover-letter">Cover Letter</a></li> */}
</ul>
 
{/* <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />  */}


      <Template1 
      ref={componentRef} test="This is test"
      uploadedimage={imageu}
      name={name}
   website={website}
   headline={headline}
      email={email}
     phone={phone}
     aboutme={aboutme}
     city={city}

     designation={designation}
     company={company}
     jobdesc={jobdesc}   
     sdate={sdate}
     edate={edate}

  />




{/* <Outlet/> */}
           


          </div>
        </div>
      </div>
    </>
  );
                  
         
}

