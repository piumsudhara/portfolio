import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.svg",
    userName: "Thishan Rasangike",
    subtitle: "Team Lead | Google Crowdsource Sri Lanka",
    review:
    "I rarely come across real talents who stand out like Pium.  Pium’s ability to handle multiple projects was unlike any I’ve seen before and made a dramatic increase in the productivity level of It industry. ",
  }
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Recommandations" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
