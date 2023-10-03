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
    <div className="App">
      <Navbar />


      <Welcome />
      <Landing />
      <Login />
      <Signup />
      <ErrorPage />
      <Footer />
    </div>
  );
}

export default App;
