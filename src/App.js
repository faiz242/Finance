import Home from "../src/components/Home";
import Navbar from '../src/components/landingPage/Navbar';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import SignUpPage from '../src/components/loginPage/SignUpPage'
import LoginPage from '../src/components/loginPage/LoginPage'

function App() {
  const [clicked,setClicked]=useState();
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/login' element={< LoginPage  />}></Route>
          <Route exact path='/signUp' element={< SignUpPage />}></Route>
        </Routes>
      
        {/* <LoginPage /> */}
      </div>
    </Router>
  );
}

export default App;
