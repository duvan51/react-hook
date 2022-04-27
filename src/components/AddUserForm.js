import { useState } from "react";
import { useForm } from "react-hook-form";
import './addUserForm.css'


const AddUserForm =({addUsers})=> {
  
  
  const { register, handleSubmit } = useForm();

  const onSubmit =(data, e)=>{
    addUsers(data)


    //limpiar el form
    e.target.reset();
  
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="name">
      <i class="fi fi-rr-mode-portrait"></i>
      <div>
        <input id="first_name" placeholder="First name"{
            ...register("first_name")
          }/>
          <input id="last_name" placeholder="Last Name" {
            ...register("last_name")          
          }/>
      </div>
      </div>
       <div  className="email" >
       <i class="fi fi-rr-envelope"></i>
          <input id="email" placeholder="email" name="email" {
            ...register("email")
          }/>
      </div>
      <div className="password" > 
      <i class="fi fi-rr-key"></i>
          <input id = "password" placeholder="pasword" name="pasword" type="password" 
          {
            ...register("password")
          }/>
      </div>  
      <div className="birthday" >
      <i class="fi fi-rs-calendar"></i>
          <input id ="birthday" placeholder="birthday" name="birthday" type="date" 
          {
            ...register("birthday")
          }/>
      </div>
      <div className="input">
        <input type="submit" className="button"/>
      </div> 
    </form>
  );
}
export default AddUserForm