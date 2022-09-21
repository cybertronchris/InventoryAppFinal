import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
    const [form, setForm] = useState({
      model: "",
      manufacturer: "",
      year: "",
      mileage: "",
      listPrice: "",
    });
    const navigate = useNavigate();

    //update state properties.

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
async function onSubmit(e) {
    e.preventDefault();

    const newInventory = { ...form };
    await fetch("http://localhost:5000/record/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInventory),
      })
      .catch(error => {
        window.alert(error);
        return;
      });
    
      setForm({ model: "", manufaturer: "", year: "", mileage:"",listPrice:"" });
      navigate("/");

}

    return (
        <div>
            <form onSubmit={onSubmit}>
               
                <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input type="text" className="form-control" id="model" value={form.model} onChange={(e) => updateForm({ model: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="manufacturer">MFR</label>
                    <input type="text" className="form-control" id="manufacturer" value={form.manufacturer} onChange={(e) => updateForm({ manufacturer: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input type="number" className="form-control" id="year" value={form.year} onChange={(e) => updateForm({ year: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="mileage">Mileage</label>
                    <input type="text" className="form-control" id="mileage" value={form.mileage} onChange={(e) => updateForm({ mileage: e.target.value})}/>
                </div>
               
                <div className="form-group">
                    <label htmlFor="listPrice">List Price</label>
                    <input type="text" className="form-control" id="name" value={form.listPrice} onChange={(e) => updateForm({ listPrice: e.target.value})}/>
                </div>
               
                <div className="form-group">


         <input
           type="submit"
           value="Add car"
           className="btn btn-primary"

         />
         </div>
            </form>
        </div>
    )
}