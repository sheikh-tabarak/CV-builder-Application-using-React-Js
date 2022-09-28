import React,{useState} from 'react'
import Template1 from "./templates/template1";
import ".//form.css"


export default function Form() {

  // const realimage = (
  //   <img 
  //     src={imageu}
  //     alt="Canvas Logo"
  //   />
  // );

  const [imageu,setImage]= useState("https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=")


  const [Name,SetName]= useState("")

  const ChangeName = (event)=>{
    SetName(event.target.value)
  }

  
  return (

    <>




<details>
<summary className='sidebar-toggles'>INSTALLATION</summary>
<div className='sidebar-item'><a href='#'>Getting Started</a></div>
<div className='sidebar-item'><a href='#'>Add React to a Website</a></div>
<div className='sidebar-item'><a href='#'>Create a New React App</a></div>
<div className='sidebar-item'><a href='#'>CDN Links</a></div>
<div className='sidebar-item'><a href='#'>Release Channels</a></div>
</details>








    <div class="container-fluid">
      <div class="row ">
        <div className="  col-4 bg-light p-5" >
    
    
        <div class="row"> 
      <div class="col-5">
      <div class="custom-file">
      <input style={{ 
      backgroundImage:`url(${imageu})`
    }} type="file" class="custom-file-input" id="customFile" onChange={(event) => {
          console.log(event.target.files[0]);
          setImage(URL.createObjectURL(event.target.files[0]));
          // setImage(event.target.files[0]);
        }}/>
      <label class="custom-file-label" for="customFile"> </label>
    </div>
      </div>
      <div class="col">
        
        <div class="row">
      <div class="col">
      
     
      <div class="form-group m-1">
        <label for="gname">Given name</label>
        <input value={Name} onChange={ChangeName} type="text" class="form-control" id="gname" aria-describedby="emailHelp"  />
      </div>
   
    
      </div>
      
    
      <div class="form-group m-1">
        <label for="fname">Family name</label>
        <input type="text" class="form-control" id="fname" aria-describedby="emailHelp"/>
    

      </div>
    
    </div>
    
      </div>
    </div>
    
          
    <form>

<div class="form-group m-1">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
      </div>

      <div class="form-group m-1 mb-3">

        <label for="headline">Headline</label>
        <input type="text" class="form-control" id="headline" aria-describedby="emailHelp" />
      </div>
      <div class="form-group m-1  mb-3">
        <label for="pnumber">Phone number</label>
        <input type="number" class="form-control" id="pnumber" />
      </div>
      <div class="form-group m-1  mb-3">
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address" />
      </div>
    
    
    
    
    
    
      <div class="row">
      <div class="col">
      
      <div class="form-group m-1">
        <label for="pcode">Post code</label>
        <input type="number" class="form-control" id="pcode" aria-describedby="emailHelp" />
      </div>
     
    
      </div>
      <div class="col">
    
      <div class="form-group m-1">
        <label for="city">City</label>
        <input type="text" class="form-control" id="city" aria-describedby="emailHelp"/>
      </div>
    
    
    
      </div>
    
    
    </div>
    
      
    </form>
            
    </div>
        <div className="col-8 overflow-auto">

        <Template1 name={Name} uploadedimage={imageu}/>
        
        </div>
      </div>
    </div>
        </>
  )
}
