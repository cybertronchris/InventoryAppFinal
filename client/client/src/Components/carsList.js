import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


const Cars = (props) => (
 <tr>
   <td>{props.cars.model}</td>
   <td>{props.cars.make}</td>
   <td>{props.cars.year}</td>
   <td>{props.cars.mileage}</td>
   <td>{props.cars.listPrice}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.cars._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteCars(props.cars._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function CarsList() {
 const [cars, setCars] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getCars() {
     const response = await fetch(`http://localhost:5000/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const cars = await response.json();
     setCars(cars);
   }
 
   getCars();
 
   return;
 }, [cars.length]);
 
 // This method will delete a record
 async function deleteCars(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newCars = cars.filter((el) => el._id !== id);
   setCars(newCars);
 }
 
 // This method will map out the records on the table
 function carsList() {
   return cars.map((cars) => {
     return (
       <Cars
         cars={cars}
         deleteCars={() => deleteCars(cars._id)}
         key={cars._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
         <th>Model</th>
           <th>Make</th>
           <th>Year</th>
           <th>Mileage</th>
           <th>List Price</th>
         </tr>
       </thead>
       <tbody>{carsList()}</tbody>
     </table>
   </div>
 );
}