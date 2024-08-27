import "./projects.css";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export const Projects = () => {
  return (
    <>
      <section className="top">
        <h1> MY <span>Projects</span> </h1>
        <div className="view">
          <h3>You can view these projects on </h3>
          <a href="https://github.com/InnovationWithHashim" target="_blank" rel="noreferrer">
            <button><i className="fab fa-github"></i> GitHub</button>
          </a>
        </div>
      </section>
      <section className="projects">
        <div className="Projects">
          <Swiper
            spaceBetween={30}
            effect="fade"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation, EffectFade, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./images/p1-main.jpg" alt="Project 1" className="img" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="./images/p2.jpg" alt="Project 2" className="img" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="./images/p3.jpg" alt="Project 3" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p4.jpg" alt="Project 4" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p5.jpg" alt="Project 5" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p6.jpg" alt="Project 6" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p7.jpg" alt="Project 7" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p8.jpg" alt="Project 8" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p9.jpg" alt="Project 9" className="img" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="info">
          <h3 className="cardp-name">Shape<span>Shift</span></h3>
          <p className="cardp-description">ShapeShift is a modern gym website offering a dynamic user experience with responsive layouts and an engaging hero section.</p>
        </div>
      </section>


      <section className="projects">
        <div className="Projects">
          <Swiper
            spaceBetween={30}
            effect="fade"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation, EffectFade, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./images/p5-main.jpg" alt="Project 1" className="img" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="./images/p5-1.jpg" alt="Project 2" className="img" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="./images/p5-2.jpg" alt="Project 3" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p5-3.jpg" alt="Project 4" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p5-4.jpg" alt="Project 5" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p5-5.jpg" alt="Project 6" className="img" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="info">
        <h3 className="cardp-name">Beanery</h3>
        <p className="cardp-description">Beanery is a cozy restaurant website showcasing a delicious menu, inviting ambiance, and a glimpse into our culinary craftsmanship and team.</p>
        </div>
      </section>


      <section className="projects">
        <div className="Projects">
          <Swiper
            spaceBetween={30}
            effect="fade"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation, EffectFade, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./images/p3-main.jpg" alt="Project 1" className="img" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="./images/p3-1.jpg" alt="Project 2" className="img" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="./images/p3-2.jpg" alt="Project 3" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p3-3.jpg" alt="Project 4" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p3-4.jpg" alt="Project 5" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p3-5.jpg" alt="Project 6" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p3-6.jpg" alt="Project 7" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p3-7.jpg" alt="Project 8" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p3-8.jpg" alt="Project 7" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p3-9.jpg" alt="Project 8" className="img" />
            </SwiperSlide>
         
          </Swiper>
        </div>
        <div className="info">
        <h3 className="cardp-name">Knights<span>Templar</span></h3>
        <p className="cardp-description">Knights Templar explores the history, legends, and artifacts of the ancient order through detailed articles, immersive timelines, and featured stories.</p>
        </div>
      </section>

      <section className="projects">
        <div className="Projects">
          <Swiper
            spaceBetween={30}
            effect="fade"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation, EffectFade, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./images/p2-main.jpg" alt="Project 1" className="img" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="./images/p2-1.jpg" alt="Project 2" className="img" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="./images/p2-2.jpg" alt="Project 3" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p2-3.jpg" alt="Project 4" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p2-4.jpg" alt="Project 5" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p2-5.jpg" alt="Project 6" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p2-6.jpg" alt="Project 7" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p2-7.jpg" alt="Project 8" className="img" />
            </SwiperSlide>
         
          </Swiper>
        </div>
        <div className="info">
        <h3 className="cardp-name">Flavor<span>Craft</span></h3>
        <p className="cardp-description">Flavorcraft is a culinary blog showcasing diverse recipes, nutrition tips, and food stories, all presented with a visually appealing design.</p>
        </div>
      </section>

      <section className="projects">
        <div className="Projects">
          <Swiper
            spaceBetween={30}
            effect="fade"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation, EffectFade, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./images/p4-main.jpg" alt="Project 1" className="img" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="./images/p4-1.jpg" alt="Project 2" className="img" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="./images/p4-2.jpg" alt="Project 3" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p4-3.jpg" alt="Project 4" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p4-4.jpg" alt="Project 5" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p4-5.jpg" alt="Project 6" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p4-6.jpg" alt="Project 7" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p4-7.jpg" alt="Project 8" className="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/p4-8.jpg" alt="Project 7" className="img" />
            </SwiperSlide>
          
         
          </Swiper>
        </div>
        <div className="info">
        <h3 className="cardp-name">Crown<span>&Dial</span></h3>
        <p className="cardp-description">Crown & Dial is a luxury watch website featuring a curated selection of elegant timepieces, detailed product previews, and customer testimonials.</p>
        </div>
      </section>

    </>
  );
};
