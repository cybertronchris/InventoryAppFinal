import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import CarsList from "./components/carsList";
import Edit from "./components/edit";
import CreateNew from "./components/createNew";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<CarsList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/createNew" element={<CreateNew />} />
     </Routes>
   </div>
 );
};
 
export default App;