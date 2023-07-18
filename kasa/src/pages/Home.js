import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import imgHomeBanner from "../assets/images/banner/imgHome.png";



const Home =() => {
    return (
        <div className="home">
            <Header/>
            <main>
            <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner}/>
            </main>
            <Footer/>

            
        </div>
    );
};

export default Home;