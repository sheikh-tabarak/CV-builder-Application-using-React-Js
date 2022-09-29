import React, { useState } from "react";
import Template1 from "./templates/template1/template1";
import ".//form.css";


export default function Form() {
  
  // const realimage = (
  //   <img
  //     src={imageu}
  //     alt="Canvas Logo"
  //   />
  // );

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


  return (
    <>
<nav class="p-3 navbar fixed navbar-dark bg-dark">
<a class="navbar-brand" href="#">Tech Legion </a>

  
</nav>




      <div class="container-fluid">
        <div class="row ">
         
          <div className="col-4 bg-light p-0 m-0">
          <details>
          <summary className="text sidebar-toggles">&nbsp;Introduction</summary>
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



          <details>
          <summary className="sidebar-toggles">&nbsp;Experience</summary>
          <div className="p-4">
            

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

            <Template1
              uploadedimage={imageu}
              name={name}
           website={website}
           headline={headline}
              email={email}
             phone={phone}

              
            />
          </div>
        </div>
      </div>

      <div class="p-3 text-center bg-dark text-white">© 2022 Copyrights <strong><a className="text-white" href="https://techlegion.ml">Tech Legion</a></strong> | All Rights Reserved</div>
    </>
  );
                  
                  }