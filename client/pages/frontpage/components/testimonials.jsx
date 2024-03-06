import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import { fetchTestimonials } from "../../../lib/fetchAPI";
import "../../../css/frontPage.css";
import { useEffect, useState } from "react";

/*
Fetching donors testimonials from database and displaying them in a carousel.
 */
export function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(async () => {
    setTestimonials(await fetchTestimonials());
  }, []);
  const settings = {
    dots: true,
    horizontal: true,
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    accessibility: true,
    fade: true,
    arrows: true,
    prevArrow: (
      <div className="slick-prev">
        <i className="fa fa-angle-left" aria-hidden="true">
          {" "}
        </i>
      </div>
    ),
    nextArrow: (
      <div className="slick-next">
        <i className="fa fa-angle-right" aria-hidden="true">
          {" "}
        </i>
      </div>
    ),
  };

  return (
    <div>
      <h2 className={"testimonial-h2"}>TESTIMONIALS FROM OUR PARTNERS</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.testimonial_id}>
            <div className="testimonial-container">
              <div className="testimonial-p">
                "{testimonial.testimonial_text}"
              </div>
              <div className="testimonial-p">
                <div className="testimonial-img">
                  <img
                    style={{
                      margin: "auto",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: "10vw",
                    }}
                    src={testimonial.user_logo_path}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
