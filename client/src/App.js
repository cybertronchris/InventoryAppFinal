import React, {Component} from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service"
// We import all the components we need in our app
import Homepage from "./Components/homepage";

import Edit from "./Components/edit";
import CreateNew from "./Components/createNew";
import Navbar from "./Components/navbar";
import Register from "./Components/register";
import Login from "./Components/login";
import Admin from "./Components/admin";
import CarList from "./Components/carList"

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

render ()  {

 return (
   <>
    

     <Navbar/>
     
     <Routes>
       <Route path="/" element={<Homepage />} />
   
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/createNew" element={<CreateNew />} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/carList" element={<CarList />} />
       
     </Routes>
   </>
 );
};
 
}
export default App;