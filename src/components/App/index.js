import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from "../Footer/footer";
import Navbar from "../Header/navbar";
import Welcome from "../Welcome";
import Landing from "../Landing";
import "./App.css";
import Login from "../Login";
import Signup from "../SignUp";
import ErrorPage from "../ErrorPage";
function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />

    </Router>

  );
}

export default App;
