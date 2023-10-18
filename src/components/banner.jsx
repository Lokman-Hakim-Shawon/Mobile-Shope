import img from '../../public/images/download1.jfif'
const Banner = () => {
    return (
        <div>
         <div className='border border-2 relative'>
            <div className =' '>
            <h1 className=' absolute px-16 py-12 md:p-28 lg:p-36 text-xl md:text-3xl lg:text-5xl text-black font-bold'>Technology and Electronics</h1>
            </div>
            <img src={img} className=' w-full vh-[30%] opacity-50 bg-black'/>
         </div>
        </div>
    );
};

export default Banner;