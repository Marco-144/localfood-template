import Hero from "../../sections/Hero/Hero";
import Menu from "../../sections/Menu/Menu";
import Catering from "../../sections/Catering/Catering";
import Combos from "../../sections/Combos/Combos";
import Contact from "../../sections/Contact/Contact";
import Footer from "../../sections/Footer/Footer";

function Home() {
    return (
        <>
            <Hero />
            <Menu />
            <Catering />
            <Combos />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;