import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./features/Nav/Navbar";
import HomePage from "./features/Home/pages/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
