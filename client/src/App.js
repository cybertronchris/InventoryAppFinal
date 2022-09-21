import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app

import CarsList from "./Components/carsList";
import Edit from "./Components/edit";
import CreateNew from "./Components/createNew";
 
const App = () => {
 return (
   <div>
     
     <Routes>
       <Route exact path="/" element={<CarsList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/createNew" element={<CreateNew />} />
     </Routes>
   </div>
 );
};
 
export default App;