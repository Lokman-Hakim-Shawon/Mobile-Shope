import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Mainbody = () => {
  const data=useLoaderData()
  const [totalcard,settotalcard]=useState(6)
  return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {
            data.slice(0,totalcard).map(datas=><div key={datas._id} className="card  bg-base-100 shadow-xl">
              
                <figure className="pt-5">
                   <img src={datas.image} alt="Shoes" className="rounded-xl" />
                 </figure>
               <div className="card-body">
                   <h2 className="card-title">{datas.name}</h2>
                   <p>Model: {datas.type}</p>
                 <p>{datas.des}</p>
                 <p>{datas.rating}</p>
                 <p>Price: {datas.price} TK</p>
                   <div className="card-actions">
                    <Link to={`/brand_card/${datas.name}`} state={datas.name}>
                       <button className="btn bg-black text-white font-bold">
                         Show More phones
                       </button>
                     </Link>
                   </div>
                 </div>
               </div>)
          }
         </div> 
      // <div>
    //   
    // </div>
  );
};

Mainbody.propTypes = {
  data: PropTypes.node,
};

export default Mainbody;


// // import img from '../../public/images/download.jfif'
// import PropTypes from 'prop-types'; // ES6
// import { Link } from 'react-router-dom';

// const Mainbody = ({data}) => {
//   const {image,name,type,price,des,rating}=data
//       console.log(data)
//     return (
//         <div >
//             <div className="card  bg-base-100 shadow-xl">
//   <figure className="pt-5">
//     <img src={image} alt=
//     "Shoes" className="rounded-xl " />
//   </figure>
//   <div className="card-body  ">
//     <h2 className="card-title">{name}</h2>
//     <p>Type : {type}</p>
//     <p>{des}</p>
//     <p>{rating}</p>
//     <p>Price : {price}</p>
//     <div className="card-actions">
//       <Link to={`/brand_card/${name}` }>
//         <button className="btn bg-black text-white font-bold">
//           Show More phones</button>
//         </Link>
//     </div>
//   </div>
// </div>
// </div>
//     );
// };
// Mainbody.propTypes={
//   data:PropTypes.node
// }
// export default Mainbody;