import React from 'react'

export default function editor() {
  return (

    <>


<div class="container">
  <div class="row ">
    <div class="col bg-light p-5" >


    <div class="row"> 
  <div class="col-5">
  <div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile"/>
  <label class="custom-file-label" for="customFile">Upload Image</label>
</div>
  </div>
  <div class="col">
    
    <div class="row">
  <div class="col">
  
  <form>
  <div class="form-group m-1">
    <label for="gname">Given name</label>
    <input type="text" class="form-control" id="gname" aria-describedby="emailHelp" />
  </div>
  </form>

  </div>
  <div class="col">
 <form>
  <div class="form-group m-1">
    <label for="fname">Family name</label>
    <input type="text" class="form-control" id="fname" aria-describedby="emailHelp"/>
  </div>


  </form>

  </div>

  <form>
  <div class="form-group m-1">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
  </div>

  
  </form>

</div>

  </div>
</div>

      
<form>
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
    <div class="col bg-dark">
      2 of 2
    </div>
  </div>
</div>
    </>
  )
}
