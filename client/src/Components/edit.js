//add import statements
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
//export default function
export default function Edit(){
const [form, setForm] = useState({
    model: "",
    manufacturer: "",
    year: "",
    mileage: "",
    listPrice: "",
    records:[],
  });
  const params = useParams();
  const navigate = useNavigate();
//use effect to fetch()

useEffect(() =>{
    async function fetchData() {
        const id = params.id.toString();
        const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
        if (!response.ok) {
          const message = `An error has occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const record = await response.json();
        if (!record) {
          window.alert(`Record with id ${id} not found`);
          navigate("/");
          return;
        }
    
        setForm(record);
      }
    
      fetchData();

      return;
    },
    [params.id, navigate])
}


//return statement for effect function

    //update state 

    //send POST to update database


 //return the updated data in form onto display(return statement)   