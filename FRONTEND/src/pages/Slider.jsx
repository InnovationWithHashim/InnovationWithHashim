import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { NavLink } from 'react-router-dom';
import { Pagination, Navigation } from 'swiper/modules';
import './slider.css';

export const Slider = () => {
    return (
        <>
        <div className="heading">
            <h1>projects</h1>
        </div>
        <section className="Slider">
    
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card-article">
                        <div className="card-img">
                            <img src="./images/p1-main.jpg" alt="Image 1"  />
                        </div>
                        <div className="card-data">
                            <h3 className="card-name">Shape< span>Shift</span></h3>
                            <p className="card-description">ShapeShift is a modern gym website offering a dynamic user experience with responsive layouts and an engaging hero section.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card-article">
                        <div className="card-img">
                            <img src="./images/p5-main.jpg" alt="Image 5"  />
                        </div>
                        <div className="card-data">
                            <h3 className="card-name">Beanery</h3>
                            <p className="card-description">Beanery is a cozy restaurant website showcasing a delicious menu, inviting ambiance, and a glimpse into our culinary craftsmanship and team.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card-article">
                        <div className="card-img">
                            <img src="./images/p3-main.jpg" alt="Image 3" className />
                        </div>
                        <div className="card-data">
                            <h3 className="card-name">Knights<span>Templar</span></h3>
                            <p className="card-description">Knights Templar explores the history, legends, and artifacts of the ancient order through detailed articles, immersive timelines, and featured stories.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card-article">
                        <div className="card-img">
                            <img src="./images/p2-main.jpg" alt="Image 2"  />
                        </div>
                        <div className="card-data">
                            <h3 className="card-name">Flavor<span>Craft</span></h3>
                            <p className="card-description">Flavorcraft is a culinary blog showcasing diverse recipes, nutrition tips, and food stories, all presented with a visually appealing design.</p>
                        </div>
                    </div>
                </SwiperSlide>

               

                <SwiperSlide>
                    <div className="card-article">
                        <div className="card-img">
                            <img src="./images/p4-main.jpg" alt="Image 4" />
                        </div>
                        <div className="card-data">
                            <h3 className="card-name">Crown<span>&Dial</span></h3>
                            <p className="card-description">Crown & Dial is a luxury watch website featuring a curated selection of elegant timepieces, detailed product previews, and customer testimonials.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="slider-btn">
                <NavLink to="/projects">
                  <button className="btn-main-one">VIEW PROJECTS</button>
                </NavLink>
                </div>
            </Swiper>
        </section>
        </>
    );
};
