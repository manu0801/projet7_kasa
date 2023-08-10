import React from "react";
import Header from "../components/header/Header";
import imgAbout from "../assets/images/banner/imgAbout.png";
import Banner from "../components/banner/Banner";
import AboutContent from "../components/about/AboutContent";
import Footer from "../components/footer/Footer";

const About =() => {
    return (
        <div className="about">
            <Header/>
            <main>
                <Banner image={imgAbout} />
                <AboutContent/>
            </main>
            <Footer/>
        </div>
    );
};

export default About;