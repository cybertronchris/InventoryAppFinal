//add import statements
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";



export default function Edit(){
const [form, setForm] = useState({
    model: "",
    manufacturer: "",
    year: "",
    mileage: "",
    listPrice: "",
    cars:[],
  });
  const params = useParams();
  const navigate = useNavigate();
//use effect to fetch()

useEffect(() =>{
    async function fetchData() {
        const id = params.id.toString();
        const response = await fetch(`${params.id.toString()}`);
 
        if (!response.ok) {
          const message = `An error has occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const record = await response.json();
        if (!record) {
          window.alert(`Car with id ${id} not found`);
          navigate("/");
          return;
        }
    
        setForm(record);
      }
    
      fetchData();

      return;
    },
    [params.id, navigate]);


    //update state 
    function updateForm(value){
        return setForm((prev) =>{
            return { ...prev, ...value};
        });
    }
    async function onSubmit(e) {
        e.preventDefault();
        const editedCar = {
          model: form.model,
          make: form.make,
          year: form.year,
          mileage: form.mileage,
          listPrice: form.listPrice,
        };
      //changed to plural
        // This will send a post request to update the data in the database.
        await fetch(`https://my-json-server.typicode.com/rsturn29/cars/cars${params.id}`, {
          method: "POST",
          body: JSON.stringify(editedCar),
          headers: {
            'Content-Type': 'application/json'
          },
        });
      
        navigate("/");
      
    }
      return (
        <div>
          <h3>Update Inventory</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="model">Model: </label>
              <input
                type="text"
                className="form-control"
                id="model"
                value={form.model}
                onChange={(e) => updateForm({ model: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="make">Make: </label>
              <input
                type="text"
                className="form-control"
                id="make"
                value={form.make}
                onChange={(e) => updateForm({ make: e.target.value })}
              />
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
              <label htmlFor="year" className="form-control">Year</label>
                <input
                  className="form-check-input"
                  type="number"
                  name="year"
                  id="year"
                  value={form.year}
                  onChange={(e) => updateForm({ year: e.target.value })}
                />
               
              </div>
              <div className="form-group">
              <label htmlFor="mileage" className="form-control">Mileage</label>
                <input
                  className="form-group"
                  type="number"
                  name="mileage"
                  id="mileage"
                  value={form.mileage}
              
                  onChange={(e) => updateForm({ mileage: e.target.value })}
                />
               
              </div>
              <div className="form-group">
              <label htmlFor="listPrice" className="form-control">List Price</label>
                <input
                  className="form-group"
                  type="number"
                  name="listPrice"
                  id="listPrice"
                  value={form.listPrice}
               
                  onChange={(e) => updateForm({ listPrice: e.target.value })}
                />
              
            </div>
            </div>
            <br />
      
            <div className="form-group">
              <input
                type="submit"
                value="Update Inventory"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      );
      }
