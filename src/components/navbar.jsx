import { Link } from 'react-router-dom';
import img from '../../public/images/download.jfif'

const Navbar = () => {
 
    const navlink=<>
        <Link to='/'><li>Home</li></Link>
        <Link to='/add_products'><li>Add Products</li></Link>
        <Link to='/my_cart'><li>My Cart</li></Link>
    </>
    return (
        <div className='py-5'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlink}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">
    <div className="avatar">
  <div className="w-8  md:w-12 lg:w-16 rounded-full">
    <img src={img} />
  </div>
</div>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-20">
      {navlink}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login'>
    <button className="btn">
    <img src={img} className="h-6 w-6" stroke="currentColor" />
    Login
  </button>
    </Link>
  
  </div>
</div>
        </div>
    );
};

export default Navbar;