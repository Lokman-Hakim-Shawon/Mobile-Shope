import Navbar from "../components/navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
  const handlecard=event=>{
    event.preventDefault()
    // image, name, type, price, description rating
    const form=event.target
    const image=form.image.value
    const name=form.name.value
    const type=form.type.value
    const price=form.price.value
    const des=form.description.value
    const rating=form.rating.value
    const user={image,name,type,price,des,rating}   
    console.log(user)
    fetch(' https://database-10-j5bpzuqd6-lokman-hakim-shawon.vercel.app/add_products',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    if(user){
       toast("Data added successfull")
    }
  }
    return (
        <div>
            <Navbar></Navbar>
            
     <div className="hero min-h-screen  bg-base-200">
 <div className="card  w-full max-w-3xl md:-mt-20 lg:-mt-20 shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handlecard}>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" name='image' placeholder="image url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="text" name='type' placeholder="type" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name='price' placeholder="price" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">short description</span>
          </label>
          <input type="text" name='description' placeholder="short description" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="number" name='rating' placeholder="rating" className="input input-bordered" required />
          
        </div>
            </div>     
        <div className="form-control mt-6">
          <button className="btn bg-black text-white font-bold">Add data</button>
        </div>
      </form>
    </div>
</div>
<ToastContainer />
        </div>
    );
};

export default AddProducts;