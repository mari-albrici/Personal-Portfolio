
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

/*--------------------
* Testimonial Section
----------------------*/
export default function Testimonial() {
    const testimonail_list = [
        {id:1, 'image':'/img/avatar-1.jpg', author_name:'Jennifer Lutheran', position:'CEO at pxdraft', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
        {id:2, 'image':'/img/avatar-2.jpg', author_name:'Jennifer Lutheran', position:'CEO at pxdraft', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
        {id:3, 'image':'/img/avatar-3.jpg', author_name:'Jennifer Lutheran', position:'CEO at pxdraft', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
        {id:4, 'image':'/img/avatar-4.jpg', author_name:'Jennifer Lutheran', position:'CEO at pxdraft', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
        {id:5, 'image':'/img/avatar-3.jpg', author_name:'Jennifer Lutheran', position:'CEO at pxdraft', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
        {id:6, 'image':'/img/avatar-1.jpg', author_name:'Jennifer Lutheran', position:'CEO at pxdraft', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
    ]

    return (
        <>
        <section className="section testimonial-section">
            <div className="container">
                <div className="row section-heading justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h3><span>Testimonial</span></h3>
                    </div>
                </div>
                <Swiper spaceBetween={50} slidesPerView={2}>
                    {
                        testimonail_list.map((val ,i) =>{
                            return <SwiperSlide key={i}>
                                        <div className="feature-box-03">
                                            <div className="feature-img">
                                                <img src={val.image}  title={val.image} alt={val.image}/>
                                            </div>
                                            <div className="feature-content">
                                                <div className="icons">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <p>{ val.description }</p>
                                                <h6>{ val.author_name }</h6>
                                                <span>{ val.position }</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                })
                    }
                </Swiper>
            </div>
        </section>
        </>
    );
}
