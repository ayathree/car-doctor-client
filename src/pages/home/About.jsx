import person from '../../assets/images/about_us/person.jpg'
import per from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className='w-1/2 mt-28 relative'>
          <img src={person} className="max-w-sm w-3/4 rounded-lg shadow-2xl" />
          <img src={per} className="max-w-sm w-1/2 rounded-lg shadow-2xl absolute right-28 top-1/2 border-8 border-white" />
          </div>
          <div className='w-1/2 mt-28 space-y-6'>
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia reprehenderit provident cumque distinctio nisi eum rem quod. Rem explicabo nulla distinctio, aliquam, sunt magnam hic, iure debitis ipsa provident eum.</p>
            <button className="btn bg-orange-600">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;