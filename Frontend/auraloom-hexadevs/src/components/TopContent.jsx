// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../assets/diverse-team-people-working-studio-record-podcast-show-using-camera-sound-equipment-man-woman-having-fun-with-chat-live-broadcast-social-media-channel.jpg';
import img2 from '../assets/pexels-george-milton-6954162.jpg'
import img3 from '../assets/pexels-karolina-grabowska-4476140.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const TopContent = () => {



    return (
        <div>
            <h1 className="text-4xl my-20 text-[#0B2F9F] text-center font-bold">Top Contents</h1>

            <section className='my-20'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation, Pagination]}
                    //onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <div className=''>
                        <SwiperSlide>
                            <div
                                className="hero min-h-screen"
                                style={{
                                    backgroundImage: `url(${img1})`,
                                }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-neutral-content text-center">
                                    <div className="max-w-xl">
                                        <h1 className="mb-5 text-5xl font-bold">Mental health awareness and self-care practices</h1>
                                        <p className="mb-5">
                                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                                        </p>
                                        <button className="btn btn-primary">Explore Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="hero min-h-screen"
                                style={{
                                    backgroundImage: `url(${img2})`,
                                }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-neutral-content text-center">
                                    <div className="max-w-xl">
                                        <h1 className="mb-5 text-5xl font-bold">Mental health awareness and self-care practices</h1>
                                        <p className="mb-5">
                                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                                        </p>
                                        <button className="btn btn-primary">Explore Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="hero min-h-screen"
                                style={{
                                    backgroundImage: `url(${img3})`,
                                }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-neutral-content text-center">
                                    <div className="max-w-xl">
                                        <h1 className="mb-5 text-5xl font-bold">Mental health awareness and self-care practices</h1>
                                        <p className="mb-5">
                                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                                        </p>
                                        <button className="btn btn-primary">Explore Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div> */}
                    </div>

                </Swiper>
            </section>
        </div>
    );
};

export default TopContent;