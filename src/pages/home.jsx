

// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import LoginAndRegistration from "../components/LoginandRegistration";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Mainbody from "../components/mainbody";
import Navbar from "../components/navbar";
import Slider from "../components/slider";

const Home = () => {
     
    //  console.log(data)
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