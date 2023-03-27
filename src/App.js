
import Calls from './pages/calls/Calls'
import Recording from './pages/recording/Recording';
import Home from './pages/home/Home';

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "../src/pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
        {!isAuth ? (
          <Link to="/login"> </Link>
        ) : (
          <>
            <Link to="/">  </Link>
            
          </>
        )}
      
      <Routes>
      <Route path='/' element={<Home isAuth={isAuth}/>} />
         <Route path='/recording' element={<Recording isAuth={isAuth}/>} />
        <Route path='/calls' element={<Calls isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home isAuth={isAuth}/>} />
//         <Route path='/recording' element={<Recording isAuth={isAuth}/>} />
//         <Route path='/calls' element={<Calls isAuth={isAuth}/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
