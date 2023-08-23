import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ErrorPage from "../components/error/ErrorPage";

const Error =() => {
    return (
        <div>
            <Header/>
            
                <ErrorPage/>
            
            <Footer/>
        </div>
    );
};

export default Error;