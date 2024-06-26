import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src={img1} className="w-full rounded-3xl" />
    <div className="absolute h-full   left-0 p-12 pt-24 top-0 space-y-6  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
       
            <h1 className='text-6xl text-left text-white font-bold w-1/3'>Car Doctor</h1>
            <p className='text-2xl text-left text-white w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni illo, nostrum unde officia, provident delectus mollitia, odit autem similique iusto saepe error quia facere. Facilis placeat assumenda tempora earum!</p>
            <div className='flex flex-row gap-4'>
                <button className='btn bg-orange-600'>Discover more</button>
                <button className='btn bg-orange-600'>Latest project</button>

            </div>
        
      <a href="#slide4" className="btn btn-circle  mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle ">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src={img2} className="w-full rounded-3xl " />
    <div className="absolute h-full   left-0 p-12 pt-24 top-0 space-y-6  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
       
            <h1 className='text-6xl text-left text-white font-bold w-1/3'>Car Doctor</h1>
            <p className='text-2xl text-left text-white w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni illo, nostrum unde officia, provident delectus mollitia, odit autem similique iusto saepe error quia facere. Facilis placeat assumenda tempora earum!</p>
            <div className='flex flex-row gap-4'>
                <button className='btn bg-orange-600'>Discover more</button>
                <button className='btn bg-orange-600'>Latest project</button>

            </div>
        
      <a href="#slide1" className="btn btn-circle  mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle ">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full rounded-3xl" />
    <div className="absolute h-full   left-0 p-12 pt-24 top-0 space-y-6  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
       
       <h1 className='text-6xl text-left text-white font-bold w-1/3'>Car Doctor</h1>
       <p className='text-2xl text-left text-white w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni illo, nostrum unde officia, provident delectus mollitia, odit autem similique iusto saepe error quia facere. Facilis placeat assumenda tempora earum!</p>
       <div className='flex flex-row gap-4'>
           <button className='btn bg-orange-600'>Discover more</button>
           <button className='btn bg-orange-600'>Latest project</button>

       </div>
   
 <a href="#slide2" className="btn btn-circle  mr-5">❮</a> 
 <a href="#slide4" className="btn btn-circle ">❯</a>
</div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full rounded-3xl" />
    <div className="absolute h-full   left-0 p-12 pt-24 top-0 space-y-6  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
       
       <h1 className='text-6xl text-left text-white font-bold w-1/3'>Car Doctor</h1>
       <p className='text-2xl text-left text-white w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni illo, nostrum unde officia, provident delectus mollitia, odit autem similique iusto saepe error quia facere. Facilis placeat assumenda tempora earum!</p>
       <div className='flex flex-row gap-4'>
           <button className='btn bg-orange-600'>Discover more</button>
           <button className='btn bg-orange-600'>Latest project</button>

       </div>
   
 <a href="#slide3" className="btn btn-circle  mr-5">❮</a> 
 <a href="#slide1" className="btn btn-circle ">❯</a>
</div>
  </div>
</div>
    );
};

export default Banner;