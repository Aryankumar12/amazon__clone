import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {auth} from './firebase'
import X from "./1";
import Y from "./2";
import Z from "./3";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   //will only runs one when the apps components loads
  //   auth.onAuthStateChanged
  // }, []);



  return (
    <Router>
      {/* <Header/> */}
      <Routes>
        <Route path="/login" element={<Z />}></Route>
        <Route path="/checkout" element={<Y />}></Route>
        <Route path="/" element={<X />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
