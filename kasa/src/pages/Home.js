import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import DisplayCards from "../components/home/DisplayCards";
import imgHomeBanner from "../assets/images/banner/imgHome.png";
import Footer from "../components/footer/Footer";

const Home = () => {    
    return (
    <>
        <Header />
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner}/>
        <DisplayCards/>
        <Footer />
    </>
    )
};

export default Home;