// import { useLoaderData } from "react-router-dom";
// import { useLoaderData} from "react-router-dom";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import { PropTypes } from 'prop-types';
// import MyCart from "./MyCart";

const ShowBrandCards = () => {
    // console.log(data)
    const loadData=useLoaderData()
    console.log(loadData)
    const location = useLocation()
    const data=location.state
    console.log(data)
  
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 grid-cols-2 md:gap-10 lg:gap-10 md:px-24 lg:px-24">
            {loadData.map(datas => {
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
