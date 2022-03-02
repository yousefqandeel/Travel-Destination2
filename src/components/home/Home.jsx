
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
function Home(props) {
    return (
        <>
            <Header />
            <Tours tours={props.data} />
            <Footer />
        </>
    )
};
export default Home;