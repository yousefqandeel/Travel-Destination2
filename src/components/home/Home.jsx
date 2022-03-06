import React from "react";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import TourDetails from "../TourDetails/TourDetails"

function Home(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Tours data={props.data} />} />
                <Route path="/:id" element={<TourDetails data={props.data} />} />
            </Routes>
            <Footer></Footer>
        </>
    )
};
export default Home;