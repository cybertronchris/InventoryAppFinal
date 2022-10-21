import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


const Car = (props) => (
 <tr>
   <td>{props.car.model}</td>
   <td>{props.car.make}</td>
   <td>{props.car.year}</td>
   <td>{props.car.mileage}</td>
   <td>{props.car.listPrice}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.car._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteCar(props.car._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function CarList() {
 const [cars, setCars] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getCars() {
     const response = await fetch(`https://my-json-server.typicode.com/rsturn29/cars/cars`);
 
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
 async function deleteCar(id) {
   await fetch(`https://my-json-server.typicode.com/rsturn29/cars/cars${id}`, {
     method: "DELETE"
   });
 
   const newCars = cars.filter((el) => el._id !== id);
   setCars(newCars);
 }
 
 // This method will map out the records on the table
 function carsList() {
   return cars.map((car) => {
     return (
       <Car
         car={car}
         deleteCar={() => deleteCar(car._id)}
         key={car._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div className="container">
    <div className="header">
     <h3 text-align="center">Inventory List</h3>
     <Link to="/createNew">Add Car</Link>
     </div>
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
