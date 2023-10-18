import Navbar from "../components/navbar";

const AddProducts = () => {
    return (
        <div>
            <Navbar></Navbar>
            
     <div className="hero min-h-screen  bg-base-200">
 <div className="card  w-full max-w-3xl md:-mt-20 lg:-mt-20 shadow-2xl bg-base-100">
      <form className="card-body">
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
          <input type="number" placeholder="rating" className="input input-bordered" required />
          
        </div>
            </div>     
        <div className="form-control mt-6">
          <button className="btn bg-black text-white font-bold">Add data</button>
        </div>
      </form>
    </div>
</div>
        </div>
    );
};

export default AddProducts;