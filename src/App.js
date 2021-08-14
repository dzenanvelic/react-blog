
import './App.css';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home'
import Settings from './pages/home/settings/Settings';
import Single from './pages/home/single/Single';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Write from './pages/write/Write';
import React,{useContext} from "react";
import{Context} from './context/Context'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  const {user} = useContext(Context)
  return (<>
  
  <Router>
     <Topbar/>
    <Switch>
    <Route exact path="/">
       <Home/> 
      </Route>  
    
    <Route  path="/register">
     {user ? <Home/> : <Register/> }
      </Route>  
       <Route path="/login">
      {user ? <Home/> : <Login/> }
      </Route> 
    <Route t path="/settings">
      {user ?  <Settings/> : <Register/> }
      </Route>  
    <Route  path="/write">
      { user ? <Write/> : <Register/> }
      </Route>  
    <Route  path="/post/:postId">
       <Single/> 
      </Route>  
    </Switch>
  </Router>
   
   
  </>);
}

export default App;
