import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/navbar";

const MyCart = () => {
    // const [count,setcount]=useState(1)
    const alldata=useLoaderData()
    console.log(alldata)
    
    const handledelete= _id =>{
        console.log(_id)
        fetch(`https://database-10-e9f6tq1ap-lokman-hakim-shawon.vercel.app/add_products`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{

            console.log(data)
            console.log('delete')
        })
    }    
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10">
                {
                    alldata.slice(44,alldata.length).map(datas=>{
                        return (
                            <div key={datas._id}>
                                <div className="card  bg-base-100 shadow-xl">
                                  <figure className="">
                                    <img src={datas.image} alt="Shoes" className="rounded-xl" />
                                  </figure>
                                  <div className="card-body ">
                                    <h2 className="card-title">{datas.name}</h2>
                                    <p>{datas.type}</p>
                                    <p>{datas.des}</p>
                                    <p>{datas.rating}</p>
                                    <p>{datas.price}</p>
                                    <div className="card-actions">
                                      <Link to='/show_details' ><button className="btn bg-black text-white font-bold">show details</button></Link>
                                      <button onClick={()=>handledelete(datas._id)} className="btn bg-black text-white font-bold">Delete</button>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MyCart;