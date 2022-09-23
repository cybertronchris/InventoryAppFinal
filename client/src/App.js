import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Homepage from "./Components/homepage";
import CarsList from "./Components/carsList";
import Edit from "./Components/edit";
import CreateNew from "./Components/createNew";
import Navbar from "./Components/navbar";


const App = () => {
 return (
   <>
    

     <Navbar/>
     
     <Routes>
       <Route exact path="/" element={<Homepage />} />
       <Route path="/carsList" element={<CarsList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/createNew" element={<CreateNew />} />
       
       
     </Routes>
   </>
 );
};
 
export default App;