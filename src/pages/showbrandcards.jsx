import { Link, useLoaderData, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import { PropTypes } from 'prop-types';
// import { useState } from "react";
// import { toast } from "react-toastify";

const ShowBrandCards = () => {
    
    const loadData=useLoaderData()
    console.log(loadData)
    const location = useLocation()
    const data=location.state
    console.log(data)
    const lokman=(datas)=>{
      fetch('https://database-10-j5bpzuqd6-lokman-hakim-shawon.vercel.app/add_products',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(datas)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    // if(datas){
    //    alert("Data added successfull")
    // }
  }  

    
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-10 lg:gap-10 md:px-24 lg:px-24">
            {
            loadData.slice(0,23).map(datas => {
              
                    if (datas.name == data) {
                        return (
                                <div key={datas._id}>                        
                            <div  className="card  bg-base-100 shadow-xl">
                            <figure className="">
                              <img src={datas.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body ">
                              <h2 className="card-title">{datas.name}</h2>
                              <p>model : {datas.type}</p>
                              <p>{datas.des}</p>
                              <p>{datas.rating}</p>
                              <p>Price : {datas.price} TK</p>
                              <div className="card-actions">
                                <Link to={`/show_details/${datas.name}`} state={datas}><button className="btn bg-black text-white font-bold">Show Details</button></Link>
                                <button onClick={lokman(datas)} className="btn bg-black text-white font-bold">Add To Cart</button>
                              </div>
                            </div>
                          </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
            
    );
};
ShowBrandCards.propTypes={
    data:PropTypes.node
}
export default ShowBrandCards;
