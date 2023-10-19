// import img from '../../public/images/download.jfif'
import PropTypes from 'prop-types'; // ES6

const Mainbody = ({data}) => {
  const {image,name,type,price,des,rating}=data
  console.log(name)
  
    return (
        <div >
            <div className="card  bg-base-100 shadow-xl">
  <figure className="pt-5">
    <img src={image} alt=
    "Shoes" className="rounded-xl " />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title">{name}</h2>
    <p>Type : {type}</p>
    <p>{des}</p>
    <p>{rating}</p>
    <p>Price : {price}</p>
    <div className="card-actions">
      <button className="btn bg-black text-white font-bold">Buy Now</button>
    </div>
  </div>
</div>
</div>
    );
};
Mainbody.propTypes={
  data:PropTypes.node
}
export default Mainbody;