import React, {Component} from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service"
// We import all the components we need in our app
import Homepage from "./Components/homepage";
import CarsList from "./Components/carsList";
import Edit from "./Components/edit";
import CreateNew from "./Components/createNew";
import Navbar from "./Components/navbar";
import Register from "./Components/register";
import Login from "./Components/login";
import Admin from "./Components/admin";


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
       <Route exact path="/" element={<Homepage />} />
       <Route path="/carsList" element={<CarsList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/createNew" element={<CreateNew />} />
       <Route exact path="/register" element={<Register />} />
       <Route exact path="/login" element={<Login />} />
       <Route exact path="/admin" element={<Admin />} />
      
       
     </Routes>
   </>
 );
};
 
}
export default App;