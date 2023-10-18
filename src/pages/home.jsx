import LoginAndRegistration from "../components/LoginandRegistration";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Mainbody from "../components/mainbody";
import Navbar from "../components/navbar";
import Slider from "../components/slider";

const Home = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Mainbody></Mainbody>
        <Slider></Slider>
        <LoginAndRegistration></LoginAndRegistration>
        <Footer></Footer>
        </div>
    );
};

export default Home;