import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import AboutUs from "./AboutUs.jsx";
import Testimonial from "./Testimonial.jsx";
import ContactUs from "./ContactUs.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <AboutUs/>
            <Testimonial/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;