import bannerCamera from '/images/main-camera.png';
import "./Banner.css";
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='w-full px-2 md:w-10/12 md:px-0 mx-auto py-10 lg:py-20 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-0'>
            <div className='flex-1 space-y-5 text-center lg:text-left'>
                <h1 className='text-4xl md:text-5xl font-extrabold'>Start your Journey as <br /> Influencer</h1>
                <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem vestibulum sed scelerisque eros. Lectus faucibus.</p>
                <button className='btn bg-pink-500 rounded-full text-white text-xs border border-pink-600 hover:bg-transparent hover:text-pink-500 w-full md:w-fit'>
                    PREBOOK NOW <FaArrowRight className='animate-bounce' />
                </button>
            </div>

            <div className="banner-bg flex-1">
                <img src={bannerCamera} alt="Banner Camera" />
            </div>
        </div>
    );
};

export default Banner; <h1>This is banner</h1>