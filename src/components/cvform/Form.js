import React, { useState } from "react";
import Template1 from "../templates/template1/template1";
import Template2 from "../templates/template2/template2";
import ".//form.css";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";





export default function Form() {


  const router1 = createBrowserRouter([
    {
      path: "cv/template1",
      element:  <Template1
  //     uploadedimage={imageu}
  //     name={name}
  //  website={website}
  //  headline={headline}
  //     email={email}
  //    phone={phone}
  //    aboutme={aboutme}
    />,

    },
    {
      path: "/template2",
      element: <Template2 />,
      
    },
  ]);
  

  const [cv, setcv] = useState({
    image:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
    name: "",
    website:"",
    headline: "",
    email: "",
    phone: "",
  });


  const changeHandler = (e) => {

    // setcv({
    //   ...cv,                                // spreading the unchanged values
    //   [e.target.name]: e.target.value,          // changing the state of *changed value*
    // });


    setcv( cv => {
      return { ...cv,[e.target.name]: e.target.value}
    })
 }

/*
    setcv( cv => {
      return { ...cv,[e.target.name]: e.target.value}
   })

   setcv({...cv, [e.target.name]: e.target.value})


  const handleClick = (item_id,e)=> {
    [cv.item_id]=e;
  };
  
  const Setname = (e) => {
      setcv({name:e.target.value});
  };

  const Setemail= (e) => {
      setcv({email: e.target.value});
  };
*/


  const [imageu, setImage] = useState("https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000");
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [website, SetWebsite] = useState("");
  const [headline, SetHeadline] = useState("");
  const [phone, SetPhone] = useState("");
  const [aboutme, SetAboutme] = useState("");


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

  return (
    <>

      <div class="container-fluid">
        <div class="row ">
         
          <div className="col-4 bg-light p-0 m-0">
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
              <div class="form-group m-1  mb-3">
                <label for="pnumber">Phone number</label>
                
                <input 
                value={phone}
                onChange={ChangePhone}
                type="number" class="form-control" id="pnumber" />
              </div>
              <div class="form-group m-1  mb-3">
                <label for="address">About you</label>
                <input 
                value={aboutme}
               onChange={ChangeAboutme}
                 type="text" class="form-control" id="address" />
                
              </div>

              <div class="row">
                <div class="col">
                  <div class="form-group m-1">
                    <label for="pcode">Post code</label>
                    <input

                      type="number"
                      class="form-control"
                      id="pcode"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group m-1">
                    <label for="city">City</label>
                    <input
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
              <div class="form-group m-1  mb-3">
                <label for="pnumber">Phone number</label>
                
                <input 
                value={phone}
                onChange={ChangePhone}
                type="number" class="form-control" id="pnumber" />
              </div>
              <div class="form-group m-1  mb-3">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" />
              </div>

              <div class="row">
                <div class="col">
                  <div class="form-group m-1">
                    <label for="pcode">Post code</label>
                    <input

                      type="number"
                      class="form-control"
                      id="pcode"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group m-1">
                    <label for="city">City</label>
                    <input
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





          </div>
           

          <div className="cvpreview col-8 overflow-auto">

          <React.StrictMode>
<RouterProvider router={router1} />
</React.StrictMode>




           
          </div>
        </div>
      </div>

    </>
  );
                  
                  }