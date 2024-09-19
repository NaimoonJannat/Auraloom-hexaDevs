import img1 from '../assets/pexels-chuck-3587477.jpg'
import img2 from '../assets/pexels-karolina-grabowska-4476138.jpg'
import { FaRegPlayCircle } from 'react-icons/fa';

const TrendingTopic = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl my-20 text-[#0B2F9F] text-center font-bold'>Trending Topics</h1>

                <section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>

                    <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row border border-white">
                        <figure className="md:w-1/2">
                            <img
                                src={img2}
                                alt="Movie"
                                className="w-full h-96"
                            />
                        </figure>
                        <div className="card-body md:w-1/2">
                            <h2 className='text-lg font-semibold'>Laugh Therapy</h2>
                            <h2 className="card-title text-xl text-white">Mental health awareness and self-care practices</h2>
                            <p className=''>We have a therapist expert as our guest, Krista Gordon is will share her experience.</p>
                            <div className="card-actions items-center">
                                <FaRegPlayCircle className='btn btn-sm border-white rounded-full w-full' />

                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row border border-white">
                        <figure className="md:w-1/2">
                            <img
                                src={img1}
                                alt="Movie"
                                className="w-full h-96"
                            />
                        </figure>
                        <div className="card-body md:w-1/2">
                            <h2 className='text-lg font-semibold'>Science Explorer</h2>
                            <h2 className="card-title text-xl text-white">Dating and navigating the modern dating scene</h2>
                            <p className=''>Unable to grasp something clearly or to think logically and decisively about something.</p>
                            <div className="card-actions items-center">
                                <FaRegPlayCircle className='btn btn-sm border-white rounded-full w-full' />

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TrendingTopic;