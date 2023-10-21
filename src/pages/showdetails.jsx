import { useLocation } from "react-router-dom";

const Showdetails = () => {
    const location = useLocation()
    const data=location.state
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={data.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{data.name}</h2>
    <p>Model : {data.type}</p>
    <p>{data.des}</p>
    <p>{data.rating}</p>
    <p>Price : {data.price} TK</p>
    <div className="card-actions">
      <button className="btn bg-black text-white font-bold">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Showdetails;