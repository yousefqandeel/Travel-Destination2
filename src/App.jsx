import React from "react";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";

import data from "./data/data.json";

function App() {
    return (
        <>
            <Home data={data} />
        </>
    )
};
export default App;