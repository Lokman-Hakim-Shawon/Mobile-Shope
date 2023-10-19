

import { useEffect, useState } from "react";
import LoginAndRegistration from "../components/LoginandRegistration";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Mainbody from "../components/mainbody";
import Navbar from "../components/navbar";
import Slider from "../components/slider";

const Home = () => {
    const [data,setdata]=useState([])

    useEffect(()=>{
        
        fetch('http://localhost:5000/add_products')
        .then(res=>res.json())
        .then(datas=>setdata(datas))
    },[])
    
    return (
        <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {
            data.map(data=><Mainbody key={data._id} data={data}></Mainbody>)
        }
        </div>
        
        
        <Slider></Slider>
        <LoginAndRegistration></LoginAndRegistration>
        <Footer></Footer>
        </div>
    );
};

export default Home;